# Parse products from new categories folder
$categoriesPath = "images\categories"
$outputFile = "products-parsed.json"

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
    $files = Get-ChildItem -Path $folder.FullName -File
    
    foreach ($file in $files) {
        $fileName = $file.BaseName
        
        # Parse filename: "product name - price LE" or "product name - sizes - price LE"
        if ($fileName -match '(.+?)\s+-\s+(.+?)\s+-\s+(\d+)\s+LE') {
            # Has variants/sizes
            $productName = $matches[1].Trim()
            $variants = $matches[2].Trim()
            $price = [int]$matches[3]
        }
        elseif ($fileName -match '(.+?)\s+-\s+(\d+)\s+LE') {
            # Simple product with price
            $productName = $matches[1].Trim()
            $variants = $null
            $price = [int]$matches[2]
        }
        else {
            # No price in filename, skip or use default
            Write-Host "  Skipping: $fileName (no price found)"
            continue
        }
        
        # Clean up product name
        $productName = $productName -replace '\s+', ' '
        $productName = (Get-Culture).TextInfo.ToTitleCase($productName.ToLower())
        
        # Create product object
        $product = @{
            id = $idCounter
            name = $productName
            category = $categoryName
            price = $price
            image = "images/categories/$($folder.Name)/$($file.Name)"
            fileName = $file.Name
        }
        
        if ($variants) {
            $product.variants = $variants
        }
        
        $products += $product
        $idCounter++
    }
}

# Output to JSON
$products | ConvertTo-Json -Depth 10 | Out-File $outputFile -Encoding UTF8

Write-Host "`nParsed $($products.Count) products"
Write-Host "Output saved to: $outputFile"
