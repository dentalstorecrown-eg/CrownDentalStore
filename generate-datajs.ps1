# Generate new data.js from parsed products
$inputFile = "products-complete.json"
$outputFile = "js\data.js"

# Read parsed products
$productsJson = Get-Content $inputFile -Raw | ConvertFrom-Json

Write-Host "Generating data.js with $($productsJson.Count) products..."

# Start building the file
$content = @"
// Product Database for Crown Dental Store - UPDATED with new prices and variants
const products = [

"@

# Add each product
$index = 0
foreach ($product in $productsJson) {
    $index++
    
    # Determine brand from name or use category
    $brand = "Dental"
    if ($product.name -match "(3M|Dentsply|Shofu|Tokuyama|Bisco|GC|Ivoclar|Mac|Mani|Nic|Dota|Rogin|Meta|BMS|Chem|Epic|Cavex|Kromopan|Zetaplus|Chinese|Pakistani|Korean|Italian|Russian)") {
        $brand = $matches[1]
    }
    
    # Create specifications
    $specs = @()
    if ($product.hasVariants -and $product.variants) {
        $sizes = ($product.variants | ForEach-Object { $_.size }) -join ", "
        $specs += "{ label: 'Available Options', value: '$sizes' }"
    } else {
        $specs += "{ label: 'Type', value: 'Dental Product' }"
    }
    
    # Determine badge
    $badge = "In Stock"
    if ($product.hasVariants) {
        $badge = "Multiple Options"
    } elseif ($product.price -gt 1000) {
        $badge = "Premium"
    } elseif ($product.price -lt 50) {
        $badge = "Economy"
    }
    
    # Build product entry (using single quotes for JavaScript strings)
    $productEntry = "  { "
    $productEntry += "id: $($product.id), "
    $productEntry += "name: '$($product.name)', "
    $productEntry += "category: '$($product.category)', "
    $productEntry += "brand: '$brand', "
    
    if ($product.hasVariants -and $product.variants -and $product.variants.Count -gt 0) {
        # Product with variants
        $productEntry += "hasVariants: true, "
        $productEntry += "basePrice: $($product.price), "
        $productEntry += "variants: ["
        
        $variantEntries = @()
        foreach ($variant in $product.variants) {
            $varId = $variant.size -replace "[^a-zA-Z0-9]", "-"
            $variantEntries += "{ id: '$varId', size: '$($variant.size)', price: $($variant.price) }"
        }
        $productEntry += $variantEntries -join ", "
        $productEntry += "], "
        
        $productEntry += "price: $($product.price), "
    } else {
        # Simple product
        $productEntry += "hasVariants: false, "
        $productEntry += "price: $($product.price), "
    }
    
    $productEntry += "currency: 'EGP', "
    $productEntry += "image: '$($product.image)', "
    $productEntry += "gallery: ['$($product.image)'], "
    $productEntry += "description: '$($product.name)', "
    $productEntry += "specifications: [$($specs -join ', ')], "
    $productEntry += "availability: 'in_stock', "
    $productEntry += "badge: '$badge' }"
    
    # Add comma if not last product
    if ($index -lt $productsJson.Count) {
        $productEntry += ","
    }
    
    $content += $productEntry + "`n"
}

# Close products array
$content += @"
];

// Contact Information
const contactInfo = {
  storeName: "Crown Dental Store",
  whatsapp: "+201028260186",
  phone1: "+201028260186",
  phone2: "+201556555784",
  phone3: "+201556555784",
  email: "",
  address: "Mansoura, Egypt",
  latitude: 31.052986,
  longitude: 31.404959,
  googleMapsUrl: "https://maps.google.com/?q=31.052986,31.404959",
  enableGeolocation: true,
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.826789999997!2d31.355!3d31.0461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z31LCsDI2JzE2LjAiTiAzMULCsDIxJzE4LjAiRQ!5e0!3m2!1sar!2seg!4v1234567890123",
  facebook: "https://www.facebook.com/share/1H798BjZV2/",
  instagram: "https://www.instagram.com/crown.dentalstore?igsh=MWJqNnlodHkzOGtucQ==",
  linkedin: "",
  twitter: ""
};

// Store categories
const categories = [
  { id: 1, nameEnglish: "Orthodontics" },
  { id: 2, nameEnglish: "Restorative" },
  { id: 3, nameEnglish: "Endodontics" },
  { id: 4, nameEnglish: "Pediatric" },
  { id: 5, nameEnglish: "Implant" },
  { id: 6, nameEnglish: "Prosthetics" },
  { id: 7, nameEnglish: "Perio" },
  { id: 8, nameEnglish: "Surgery" },
  { id: 9, nameEnglish: "Consumables" },
  { id: 10, nameEnglish: "Instrument" },
  { id: 11, nameEnglish: "Equipment" },
  { id: 12, nameEnglish: "Dental LAB" },
  { id: 13, nameEnglish: "Medical Wear" },
  { id: 14, nameEnglish: "Cosmetics" },
  { id: 15, nameEnglish: "Dental Student" },
  { id: 16, nameEnglish: "Handpiece Repair" }
];
"@

# Write to file
$content | Out-File $outputFile -Encoding UTF8

Write-Host "✓ Generated $outputFile with $($productsJson.Count) products"
Write-Host "✓ Products with variants: $(($productsJson | Where-Object { $_.hasVariants }).Count)"
