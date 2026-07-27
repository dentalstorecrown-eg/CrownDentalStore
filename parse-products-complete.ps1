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
    if (-not $categoryName) { $categoryName = $folder.Name }
    
    Write-Host "Processing category: $($folder.Name) -> $categoryName"
    
    # Get all image files in the category
    $files = Get-ChildItem -Path $folder.FullName -File | Where-Object { $_.Extension -match "\.(jpg|jpeg|png|webp|gif|avif)$" }
    
    foreach ($file in $files) {
        $fileName = $file.BaseName
        
        # Handle various patterns
        $productName = ""
        $price = 0
        $variants = @()
        $hasVariants = $false
        
        # Pattern 1: "name - size1 - size2 - size3 - PRICE LE" or "name - size1 - size2 - PRICELE" (no space)
        if ($fileName -match '^(.+?)\s+-\s+(.+?)\s+-\s+(\d+)\s*LE\s*$') {
            $productName = $matches[1].Trim()
            $variantString = $matches[2].Trim()
            $price = [int]$matches[3]
            
            # Check if the middle part contains size variations
            if ($variantString -match '[-#\d\s]+') {
                # Split by dash and clean up
                $sizes = $variantString -split '\s+-\s+' | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" }
                
                # If we have multiple parts that look like sizes, it's a variant product
                if ($sizes.Count -gt 1 -or $variantString -match '#') {
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
        # Pattern 2: Simple "name - PRICE LE"
        elseif ($fileName -match '^(.+?)\s+-\s+(\d+)\s+LE\s*$') {
            $productName = $matches[1].Trim()
            $price = [int]$matches[2]
        }
        # Pattern 3: "name - PRICELE" (no space before LE)
        elseif ($fileName -match '^(.+?)\s+-\s+(\d+)LE\s*$') {
            $productName = $matches[1].Trim()
            $price = [int]$matches[2]
        }
        # Pattern 4: "name- PRICE LE" (no space after name)
        elseif ($fileName -match '^(.+?)-\s+(\d+)\s+LE\s*$') {
            $productName = $matches[1].Trim()
            $price = [int]$matches[2]
        }
        else {
            # No price found, skip
            Write-Host "  Skipping: $fileName (no price pattern matched)"
            continue
        }
        
        # Clean up product name
        $productName = $productName -replace '\s+', ' '
        $productName = $productName.Trim()
        # Capitalize first letter of each word
        $productName = (Get-Culture).TextInfo.ToTitleCase($productName.ToLower())
        
        # Create product object
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
        
        Write-Host "  ✓ $productName - $price LE $(if($hasVariants){"(Variants: $($variants.Count))"})"
    }
}

# Output to JSON
$products | ConvertTo-Json -Depth 10 | Out-File $outputFile -Encoding UTF8

Write-Host "`n========================================="
Write-Host "✓ Parsed $($products.Count) products"
Write-Host "✓ Products with variants: $(($products | Where-Object { $_.hasVariants }).Count)"
Write-Host "✓ Output saved to: $outputFile"
Write-Host "========================================="
