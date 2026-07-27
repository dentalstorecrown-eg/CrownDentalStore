# Major Update Plan - Product Variants & New Prices

## Overview
Replace entire categories folder with "New categories" and implement:
1. **New prices** from filenames
2. **Size/variant selection** for products with multiple options
3. **Updated UI** to display variants
4. **Cart system** to handle variant selection

## Current Status
✅ Categories folder backed up to `categories_backup_old`
✅ New categories folder copied to `images/categories`
✅ Parsed 363 products from new structure

## Discovered Product Patterns

### Pattern 1: Simple Products (Most Common)
**Format**: `product name - PRICE LE.ext`
**Example**: `air way tips metal - 25 LE.jpg`
- Product Name: Air Way Tips Metal
- Price: 25 LE

### Pattern 2: Products with Variants/Sizes
**Format**: `product name - SIZE1 - SIZE2 - SIZE3 - PRICE LE.ext`
**Example**: `elastics chinese -1#4 - 1#8 - 3#8 - 3#16 - 5#16 - 20 LE.jpg`
- Product Name: Elastics Chinese
- Available Sizes: 1#4, 1#8, 3#8, 3#16, 5#16
- Price: 20 LE (per unit or per variant)

### Pattern 3: Products with Type Variations
**Example Files Found**:
- `body silaxil- 500 LE`
- `catalyst silaxil- 490 LE`
- `light silaxil- 525 LE`
- `putty silaxil- 900 LE`

These are different types of the same product line (Silaxil impression material)

## Required Changes

### 1. Data Structure Updates (`js/data.js`)

**New Product Object Structure**:
```javascript
{
  id: 1,
  name: "Elastics Chinese",
  category: "Orthodontics",
  brand: "Chinese",
  basePrice: 20,  // Base price
  currency: "EGP",
  image: "images/categories/Ortho/elastics chinese -1#4 - 1#8 - 3#8 - 3#16 - 5#16 - 20 LE.jpg",
  
  // NEW: Variants array for products with multiple options
  variants: [
    { id: "1-4", size: "1#4", price: 20 },
    { id: "1-8", size: "1#8", price: 20 },
    { id: "3-8", size: "3#8", price: 20 },
    { id: "3-16", size: "3#16", price: 20 },
    { id: "5-16", size: "5#16", price: 20 }
  ],
  
  hasVariants: true,  // Flag to indicate variant selection needed
  description: "Orthodontic rubber bands",
  specifications: [
    { label: "Available Sizes", value: "1#4, 1#8, 3#8, 3#16, 5#16" }
  ],
  availability: "in_stock",
  badge: "Multiple Sizes"
}
```

**Simple Product** (no variants):
```javascript
{
  id: 2,
  name: "Air Way Tips Metal",
  category: "Consumables",
  brand: "Dental",
  price: 25,  // Direct price
  currency: "EGP",
  image: "images/categories/Consumbles/air way tips metal - 25 LE.jpg",
  hasVariants: false,
  description: "Metal air way tips",
  specifications: [{ label: "Material", value: "Metal" }],
  availability: "in_stock",
  badge: "In Stock"
}
```

### 2. UI Updates

#### Product Card Changes (`index.html`, `products.html`)
- Display price from filename
- Show "Multiple Options Available" for variant products
- Add size selector dropdown for variants

#### Product Details Page (`product-details.html`)
- Add variant selector (dropdown or buttons)
- Update price dynamically based on selected variant
- Display available sizes clearly

#### Example HTML for Variant Selector:
```html
<div class="variant-selector" id="variantSelector">
  <label>Select Size:</label>
  <select class="form-control" id="sizeSelect">
    <option value="">Choose size...</option>
    <option value="1-4" data-price="20">1#4 - 20 EGP</option>
    <option value="1-8" data-price="20">1#8 - 20 EGP</option>
    <!-- etc -->
  </select>
</div>
```

### 3. Cart System Updates (`js/cart.js`)

**Updated Cart Item Structure**:
```javascript
{
  productId: 123,
  productName: "Elastics Chinese",
  selectedVariant: "1-4",  // NEW: Selected variant ID
  variantLabel: "Size 1#4", // NEW: Display label
  price: 20,
  quantity: 2,
  image: "...",
  category: "Orthodontics"
}
```

**Required Functions**:
- `addToCartWithVariant(productId, variantId, quantity)`
- Update cart display to show variant info
- WhatsApp message to include variant selection

### 4. WhatsApp Order Format

**Updated Message**:
```
🛒 *Crown Dental Store Order*

📦 *Products:*
1. Elastics Chinese (Size: 1#4) - 20 EGP x 2 = 40 EGP
2. Air Way Tips Metal - 25 EGP x 1 = 25 EGP

💰 *Total: 65 EGP*
```

## Implementation Steps

### Step 1: Parse All Products ✅
- Extract product names, prices, and variants from filenames
- Create comprehensive JSON structure
- Handle special cases (silaxil types, files with multiple products)

### Step 2: Rebuild data.js
- Use parsed JSON to generate new products array
- Add variant structures for applicable products
- Update all prices to match new pricing
- Total expected products: ~363+

### Step 3: Update Product Display
- Modify product cards to show variants
- Add price display from filename data
- Handle "Multiple Options" badge

### Step 4: Implement Variant Selection
- Add variant selector UI components
- JavaScript to handle variant selection
- Update price display dynamically

### Step 5: Update Cart System
- Modify addToCart to accept variant parameter
- Update cart display to show variant info
- Ensure localStorage saves variant data

### Step 6: Update WhatsApp Integration
- Modify message format to include variants
- Test order submission with variants

### Step 7: Testing
- Test all products display correctly
- Test variant selection works
- Test cart with variants
- Test WhatsApp orders include variant info
- Test on mobile devices

## Parsing Issues to Fix

### Products that need manual handling:
1. `rotary file plex v refel - 15#3 - 20#4 - 25#4 - 30#4 - 35#4- 550LE` (typo: missing space before LE)
2. `body silaxil- 500 LE` (different products, not variants)
3. `catalyst silaxil- 490 LE`
4. `light silaxil- 525 LE`
5. `putty silaxil- 900 LE`
6. `files mani` (no price in filename)

## Timeline Estimate
- Parsing & Data Preparation: 1 hour
- data.js Rebuild: 2 hours
- UI Updates: 2 hours
- Cart System Updates: 1 hour
- WhatsApp Integration: 30 min
- Testing & Fixes: 1 hour
**Total: ~7-8 hours of development**

## Next Steps
1. Fix parsing script for edge cases
2. Generate complete products array with variants
3. Update data.js with new structure
4. Implement variant selector UI
5. Update cart and WhatsApp functions
6. Test thoroughly
7. Deploy to GitHub

---
**Status**: Planning Complete - Ready for Implementation
**Created**: Current Session
