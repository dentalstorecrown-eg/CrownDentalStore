# 👑 Crown Dental Store - عرض كراون لمستلزمات الأسنان

Professional dental supplies e-commerce website built with pure HTML5, CSS3, and Vanilla JavaScript.

**متجر احترافي لمستلزمات وأدوات طب الأسنان مبني بصيغة HTML5 و CSS3 و JavaScript نقي**

---

## ✨ Features - المميزات

✅ **Fully Responsive Design** - يعمل على جميع الأجهزة  
✅ **Arabic & English Support** - دعم اللغة العربية والإنجليزية  
✅ **Product Catalog** - كتالوج منتجات ديناميكي  
✅ **Search & Filter** - بحث وتصفية متقدمة  
✅ **Product Details** - صفحات تفاصيل منتجات متكاملة  
✅ **WhatsApp Integration** - تكامل واتس آب  
✅ **Google Maps** - خريطة جوجل للموقع  
✅ **Geolocation API** - كشف موقع المستخدم  
✅ **Contact Form** - نموذج تواصل  
✅ **Mobile Menu** - قائمة جوال متحركة  
✅ **Modern Design** - تصميم حديث واحترافي  
✅ **SEO Optimized** - محسّن لمحركات البحث

---

## 📋 Project Structure

```
Crown/dental-store/
├── index.html                 # Home page
├── products.html              # Products listing page
├── product-details.html       # Single product details page
├── categories.html            # Product categories page
├── about.html                 # About store page
├── contact.html               # Contact page with maps
│
├── css/
│   ├── style.css              # Main styles & variables
│   └── responsive.css         # Mobile responsive styles
│
├── js/
│   ├── data.js                # Product database & contact info
│   ├── main.js                # Global functionality & geolocation
│   ├── products.js            # Products page logic
│   └── product-details.js     # Product details page logic
│
├── SETUP_GUIDE.md             # Comprehensive setup guide
├── README.md                  # This file
│
└── images/
    ├── products/              # Product images folder
    ├── categories/            # Category images folder
    └── logo/                  # Logo images folder
```

---

## 🎯 What's New - القدرات الجديدة

### ✅ Crown Branding
- Professional SVG logo with "C" crown design
- Consistent Crown branding throughout
- Professional favicon

### ✅ Egyptian Prices (EGP)
- All products priced in Egyptian Pounds
- Professional currency formatting
- EGP symbol in all display areas

### ✅ Enhanced Product Data
- 12 realistic dental products
- Professional Arabic & English descriptions
- Detailed specifications for each product
- Realistic pricing and availability status

### ✅ Geolocation Integration
- Automatic user location detection
- Delivery time estimation by governorate
- Location-based service preparation

### ✅ Google Maps
- Embedded Google Maps on contact page
- Easy customization of location
- Professional location display

---

## 🚀 How to Run Locally - كيفية التشغيل

### Option 1: Using Python (Recommended)
```bash
cd "c:/Users/user/Desktop/Crown/dental-store"
python -m http.server 8000
# Visit: http://localhost:8000
```

### Option 2: Using Node.js (http-server)
```bash
cd dental-store
npx http-server
```

### Option 3: Using Live Server (VS Code)
- Install "Live Server" extension in VS Code
- Right-click on `index.html`
- Select "Open with Live Server"

### Option 4: Direct Browser
- Simply drag and drop `index.html` into your browser
- Or double-click the file

### Option 4: Direct Browser
- Simply drag and drop `index.html` into your browser
- Or double-click the file

---

## 📝 Quick Start Guide

### 1. Update Contact Information
Edit `js/data.js` and update the `contactInfo` object:
```javascript
const contactInfo = {
  storeName: "Crown Dental Store",
  whatsapp: "+20[YOUR_NUMBER]",        // ← Update this
  phone: "+20[YOUR_NUMBER]",            // ← Update this
  email: "your-email@example.com",     // ← Update this
  address: "Your City, Egypt"          // ← Update this
};
```

### 2. Replace Product Images
See `SETUP_GUIDE.md` for detailed instructions on:
- Using free image resources (Unsplash, Pexels, Pixabay)
- Uploading images to free hosting (Imgur, Cloudinary)
- Updating image URLs in `js/data.js`

### 3. Add Your Products
Add new products to the `products` array in `js/data.js`
See section below for template

### 4. Deploy to Hosting
Choose from:
- **Netlify** (easiest - drag & drop)
- **GitHub Pages** (free forever)
- **Vercel** (optimized for web apps)
- **Traditional hosting** (Hostinger, Bluehost, etc.)

---

## ➕ How to Add a New Product

All products are stored in `js/data.js`. To add a new product:

1. Open `js/data.js`
2. Find the `products` array
3. Add a new product object before the closing bracket:

```javascript
{
  id: 13,                                    // Unique ID (increment from last)
  sku: "CRWN-XX-013",                       // Use CRWN prefix
  nameArabic: "اسم المنتج بالعربية",        // Arabic name
  nameEnglish: "Product Name",              // English name
  category: "Dental Instruments",           // Use existing category
  brand: "BrandName",                       // Brand
  price: 500,                               // Price in EGP
  currency: "EGP",                          // Currency
  image: "https://image-url.jpg",          // Main image URL
  gallery: [                                // Gallery images (2-3 images)
    "https://gallery-image-1.jpg",
    "https://gallery-image-2.jpg"
  ],
  descriptionArabic: "وصف تفصيلي للمنتج بالعربية مع المميزات والفوائد",
  descriptionEnglish: "Detailed product description in English",
  specifications: [                         // Product specifications
    { 
      labelArabic: "المادة", 
      labelEnglish: "Material", 
      value: "Stainless Steel" 
    },
    { 
      labelArabic: "الحجم", 
      labelEnglish: "Size", 
      value: "50mm" 
    }
  ],
  availability: "in_stock",                 // in_stock, limited_stock, out_of_stock
  badge: "New"                              // New, Best Seller, In Stock, Limited
}
```

**Available Categories:**
- Dental Instruments
- Dental Consumables
- Endodontics
- Restorative Materials
- Impression Materials
- Orthodontic Supplies
- Sterilization Products
- Dental Equipment
- PPE and Infection Control

---

## 🎨 Customization

### Change Store Name
1. Update in `js/data.js`: `contactInfo.storeName`
2. Update in all HTML files navbar sections

### Change Colors
Edit `css/style.css` CSS variables:
```css
:root {
  --color-primary: #1e40af;           /* Main blue */
  --color-teal: #0d9488;              /* Accent teal */
  --color-success: #10b981;           /* Success green */
  --color-warning: #f59e0b;           /* Warning orange */
  --color-danger: #ef4444;            /* Danger red */
}
```

### Change Logo
Replace the SVG logo in navbar with your image:
```html
<img src="images/logo/your-logo.png" alt="Logo" width="30" height="30">
```

### Change Google Maps Location
1. Go to Google Maps
2. Search for your address
3. Click Share → Embed map
4. Copy the iframe embed code
5. Replace the `<iframe>` in `contact.html`

---

## 📊 Features Explanation

### Product Filtering & Search
- **Search** by product name, SKU, or category
- **Filter** by category
- **Sort** by price or name
- **Availability** indicators

### WhatsApp Integration
- **Floating button** on all pages
- **Pre-filled messages** with product details
- **Click anywhere** to contact via WhatsApp

### Geolocation Service
- Detects user location (with permission)
- Calculates delivery time by governorate
- Personalizes user experience
- Optional - doesn't require backend

### Responsive Design
- Works on all devices
- Mobile menu toggle
- Touch-friendly buttons
- Optimized images

### Multilingual Support
- Arabic (RTL) by default
- English (LTR) ready
- Easy language switching
- Bilingual content support

---

## 📁 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Home page with hero, featured products, CTA |
| `products.html` | Product listing with search & filter |
| `product-details.html` | Single product details with gallery |
| `categories.html` | Browse by category |
| `about.html` | About Crown Dental Store |
| `contact.html` | Contact form, maps, social media |
| `css/style.css` | Main styling & variables |
| `css/responsive.css` | Mobile responsive styles |
| `js/data.js` | Product database & contact info |
| `js/main.js` | Global functions & geolocation |
| `js/products.js` | Products page logic |
| `js/product-details.js` | Product details logic |

---

## 🔍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 📋 Troubleshooting

### Products Not Showing?
1. Check browser console (F12)
2. Verify `js/data.js` syntax
3. Ensure all product IDs are unique
4. Check that images URLs are valid

### WhatsApp Button Not Working?
1. Verify phone format: `+20[number]`
2. Ensure country code is included
3. Test the button URL directly

### Maps Not Displaying?
1. Check iframe embed code
2. Ensure iframe tag is properly closed
3. Verify Google Maps link is accessible

### Mobile Menu Issues?
1. Clear browser cache (Ctrl+Shift+Del)
2. Test in private/incognito mode
3. Try different browser

---

## 📖 Documentation

For detailed setup and customization:
- **See `SETUP_GUIDE.md`** for comprehensive instructions
- Image replacement guide
- Product addition guide
- Contact info customization
- Hosting deployment guide

---

## 💼 Business Features

✅ **Professional Appearance** - Trust building design
✅ **Product Management** - Easy to add/edit products
✅ **Customer Communication** - WhatsApp, Email, Phone
✅ **Location Services** - Maps & geolocation
✅ **Search & Discovery** - Find products easily
✅ **Mobile Friendly** - 60% of traffic is mobile
✅ **Fast Loading** - No heavy frameworks
✅ **SEO Ready** - Search engine optimized

---

## 🚀 Deployment

### Free Options:
- **Netlify**: Drag & drop deployment
- **GitHub Pages**: Git-based deployment
- **Vercel**: Optimized static hosting

### Paid Options:
- **Hostinger**: $2.99/month
- **Bluehost**: $2.95/month + domain
- **DreamHost**: Reliable, $4/month

---

## 📞 Support

- Check `SETUP_GUIDE.md` for detailed help
- Test in browser console (F12)
- Verify all image URLs are accessible
- Clear cache before testing changes

---

## 📄 License

This website template is free to use and modify for your dental supplies business.

---

**Made with ❤️ for Crown Dental Store**
**Version: 1.0 (Professional Edition)**
**Last Updated: June 2026**

---

## 🎯 Next Steps

1. ✅ Update contact information in `js/data.js`
2. ✅ Replace placeholder images with real product images
3. ✅ Add your products to the database
4. ✅ Test all features on mobile devices
5. ✅ Deploy to Netlify or hosting provider
6. ✅ Set up custom domain
7. ✅ Add Google Analytics
8. ✅ Submit to search engines

**Good luck with Crown Dental Store! 👑🦷**
```

**Available Categories:**
- Dental Instruments
- Dental Consumables
- Endodontics
- Restorative Materials
- Impression Materials
- Orthodontic Supplies
- Sterilization Products
- Dental Equipment
- PPE and Infection Control

## 🖼️ How to Change Product Images

### Replace Individual Product Images:

1. Open `js/data.js`
2. Find the product you want to update
3. Replace the `image` URL with your image URL
4. Update `gallery` array with your image URLs

### Use Placeholder Images During Development:

The site uses placeholder.com service. You can customize placeholders:
```
https://via.placeholder.com/300x300?text=YourProductName
```

### Add Real Product Images:

**Option 1: Use Image Hosting Service**
- Upload images to: Imgur, Cloudinary, AWS S3, or similar
- Copy the URL and paste into `js/data.js`

**Option 2: Create Local Images Folder**
```
1. Create: dental-store/images/products/
2. Add your images: product-1.jpg, product-2.jpg, etc.
3. Update URLs in data.js:
   image: "images/products/product-1.jpg"
```

## 📞 How to Change Contact Information

All contact details are in `js/data.js` in the `contactInfo` object:

```javascript
const contactInfo = {
  whatsapp: "+201000000000",        // Change WhatsApp number
  phone: "+201000000000",           // Change phone number
  email: "info@dentalstore.com",    // Change email
  address: "Mansoura, Egypt",       // Change address
  googleMapsUrl: "https://maps.google.com/?q=your+location", // Google Maps link
  
  // Social media links
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/yourpage",
  linkedin: "https://linkedin.com/company/yourpage",
  twitter: "https://twitter.com/yourpage"
};
```

### Update in HTML Files (if needed):
- Search for: `+201000000000`
- Search for: `info@dentalstore.com`
- Search for: `Mansoura, Egypt`
- Replace with your details

## 🎨 How to Customize Colors and Design

All colors and spacing are defined as CSS variables in `css/style.css`:

```css
:root {
  /* Colors */
  --color-primary: #0056B3;           /* Main blue - change this */
  --color-secondary: #17A2B8;         /* Teal - change this */
  --color-success: #28A745;           /* Green */
  --color-text: #1F3A5F;              /* Dark navy text */
  --color-bg-light: #F8F9FA;          /* Light gray background */
  
  /* Typography */
  --font-primary: 'Cairo', 'Segoe UI', 'Arial', sans-serif;
  
  /* Spacing */
  --spacing-base: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

**To change primary color:**
1. Open `css/style.css`
2. Find `--color-primary: #0056B3;`
3. Replace with your color: `--color-primary: #YourHexColor;`

## 🌍 Language Support

The site is built with Arabic (RTL) as default, with support for English (LTR).

To switch language globally:
```javascript
// In any JavaScript file:
setLanguage('ar');  // Arabic
setLanguage('en');  // English
```

The language preference is saved in browser's localStorage.

## 📱 Responsive Design

The website is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1200px and up
- **Large Desktop**: 1440px and up

Breakpoints are in `css/responsive.css`

## ⚙️ Features Included

✅ Product search and filtering
✅ Category filtering
✅ Sort by price, name, availability
✅ Product details with gallery
✅ Related products display
✅ WhatsApp integration for orders
✅ Phone call integration
✅ Email contact form
✅ Sticky navigation bar
✅ Mobile menu toggle
✅ Floating WhatsApp button
✅ RTL/LTR support
✅ Professional badges
✅ Smooth animations
✅ Print-friendly layout
✅ Dark mode support (optional)

## 🔧 Customization Tips

### Change Store Name:
- Search for "متجر الأسنان" in all HTML files
- Replace with your store name
- Search for "Dental Store" in data.js

### Change Logo/Icon:
- The emoji 🦷 is used as favicon
- Replace with your own in all HTML files:
```html
<link rel="icon" href="images/logo/your-logo.png">
```

### Add New Navigation Link:
In all HTML files, find `<ul class="navbar-nav">` and add:
```html
<li><a href="your-page.html">Link Name</a></li>
```

### Customize Footer:
- Open each HTML file
- Find `<footer class="footer">`
- Edit the content as needed

## 🌐 How to Upload to Hosting

### Option 1: Using cPanel (Most Common)

1. Compress the `dental-store` folder to ZIP
2. Login to cPanel (yoursite.com/cpanel)
3. File Manager → public_html
4. Upload the ZIP file
5. Extract it
6. Your site is now live at yoursite.com

### Option 2: Using FTP

1. Download FileZilla or WinSCP
2. Connect with your FTP credentials
3. Upload all files to `/public_html/` or `/www/`
4. Visit your domain

### Option 3: Using GitHub Pages (Free)

1. Create account on github.com
2. Create new repository named `yourusername.github.io`
3. Upload all files
4. Site will be live at `https://yourusername.github.io`

### Option 4: Using Netlify (Free)

1. Visit netlify.com
2. Drag and drop the `dental-store` folder
3. Site deployed instantly

## 📊 Domain and Email

After uploading:

1. **Domain Setup:**
   - Purchase domain from GoDaddy, Namecheap, etc.
   - Point domain to your hosting
   - Update email with your domain

2. **Professional Email:**
   - Create `info@yourdomain.com`
   - Update in `js/data.js`
   - Configure in cPanel

## 🔐 SEO Optimization

Already included:
- ✅ Meta descriptions
- ✅ Keywords
- ✅ Semantic HTML
- ✅ Fast loading
- ✅ Mobile-friendly
- ✅ Structured data ready

To improve further:
1. Add Google Analytics
2. Submit sitemap to Google Search Console
3. Add structured data (schema.org)
4. Optimize images

## 📈 Performance Tips

1. **Image Optimization:**
   - Compress images before uploading
   - Use WebP format if possible
   - Use CDN for image hosting

2. **Caching:**
   - Enable browser caching
   - Use CDN for static files

3. **Database:**
   - Move to database later if needed
   - Current JS data.js is perfect for <1000 products

## 🐛 Troubleshooting

**Images not showing?**
- Check image URLs are correct
- Ensure images are accessible (public URLs)
- Use HTTPS URLs for security

**WhatsApp not opening?**
- Check phone number format includes country code
- Use format: +20XXXXXXXXXXX

**RTL not working?**
- Check `<html dir="rtl" lang="ar">`
- Verify CSS has RTL support

**Form not working?**
- Check contactForm is valid
- Data is logged to console (no backend currently)

## 🚀 Future Enhancements

You can easily add:
- Real backend payment system
- User accounts and wishlist
- Product reviews and ratings
- Email notification system
- Admin dashboard
- SMS notifications
- Multi-currency support
- Live chat support

## 📞 Support & Questions

For modifications or assistance:
- Check the inline comments in code
- Each file has section comments
- CSS variables are documented
- JavaScript functions have clear names

## 📄 License

This project is ready for commercial use.

---

**Last Updated:** 2024
**Version:** 1.0
**Status:** Production Ready ✅
