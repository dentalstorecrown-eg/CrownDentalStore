# Complete Product Parser with Variant Support
$categoriesPath = "images\categories"
$outputFile = "products-complete.json"

$products = @()
$idCounter = 1

# Category mapping
$categoryMap = @{
    "Consumbles" = "Consumables"
    "Consumles 2" = "Consumables"
    "Restorative" = "Restorative"
    "Restorative 2" = "Restorative"
    "Restorative 3" = "Restorative"
    "Endo" = "Endodontics"
    "Endo 2" = "Endodontics"
    "Ortho" = "Orthodontics"
    "Prothetic" = "Prosthetics"
    "Prothetic 2" = "Prosthetics"
    "Pedo" = "Pediatric"
    "Perio" = "Perio"
    "Surgery" = "Surgery"
}

# Get all category folders
$categoryFolders = Get-ChildItem -Path $categoriesPath -Directory

foreach ($folder in $categoryFolders) {
    $categoryName = $categoryMap[$folder.Name]
    if (-not $categoryName) { 
        $categoryName = $folder.Name 
    }
    
    Write-Host "Processing category: $($folder.Name) -> $categoryName"
    
    # Get all image files
    $files = Get-ChildItem -Path $folder.FullName -File
    
    foreach ($file in $files) {
        $ext = $file.Extension.ToLower()
        if ($ext -notmatch "^\.?(jpg|jpeg|png|webp|gif|avif)$") {
            continue
        }
        
        $fileName = $file.BaseName
        
        $productName = ""
        $price = 0
        $variants = @()
        $hasVariants = $false
        
        # Try different patterns
        if ($fileName -match "^(.+?)\s+-\s+(.+?)\s+-\s+(\d+)\s*LE\s*$") {
            # Pattern: name - variants - PRICE LE
            $productName = $matches[1].Trim()
            $variantString = $matches[2].Trim()
            $price = [int]$matches[3]
            
            # Check if middle part has size variations
            if ($variantString -match "[-#\d\s]+") {
                $sizes = $variantString -split "\s+-\s+" | Where-Object { $_ -ne "" }
                
                if ($sizes.Count -gt 1 -or $variantString -match "#") {
                    $hasVariants = $true
                    foreach ($size in $sizes) {
                        if ($size -ne "") {
                            $variants += @{
                                size = $size
                                price = $price
                            }
                        }
                    }
                }
            }
        }
        elseif ($fileName -match "^(.+?)\s+-\s+(\d+)\s+LE\s*$") {
            # Pattern: name - PRICE LE
            $productName = $matches[1].Trim()
            $price = [int]$matches[2]
        }
        elseif ($fileName -match "^(.+?)\s+-\s+(\d+)LE\s*$") {
            # Pattern: name - PRICELE (no space)
            $productName = $matches[1].Trim()
            $price = [int]$matches[2]
        }
        elseif ($fileName -match "^(.+?)-\s+(\d+)\s+LE\s*$") {
            # Pattern: name- PRICE LE
            $productName = $matches[1].Trim()
            $price = [int]$matches[2]
        }
        else {
            Write-Host "  Skip: $fileName"
            continue
        }
        
        # Clean product name
        $productName = $productName -replace "\s+", " "
        $productName = $productName.Trim()
        $productName = (Get-Culture).TextInfo.ToTitleCase($productName.ToLower())
        
        # Create product
        $product = @{
            id = $idCounter
            name = $productName
            category = $categoryName
            price = $price
            image = "images/categories/$($folder.Name)/$($file.Name)"
            fileName = $file.Name
            folderName = $folder.Name
            hasVariants = $hasVariants
        }
        
        if ($hasVariants -and $variants.Count -gt 0) {
            $product.variants = $variants
        }
        
        $products += $product
        $idCounter++
        
        $varInfo = ""
        if ($hasVariants) {
            $varInfo = " (Variants: $($variants.Count))"
        }
        Write-Host "  + $productName - $price LE$varInfo"
    }
}

# Save to JSON
$products | ConvertTo-Json -Depth 10 | Out-File $outputFile -Encoding UTF8

Write-Host ""
Write-Host "========================================="
Write-Host "Parsed $($products.Count) products"
Write-Host "Products with variants: $(($products | Where-Object { $_.hasVariants }).Count)"
Write-Host "Output: $outputFile"
Write-Host "========================================="
