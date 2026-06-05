// Product Database for Crown Dental Store
// Add new products by adding objects to this array
// Prices in Egyptian Pounds (EGP)
// Images: Replace placeholder URLs with your actual product image URLs
// Free image resources: Unsplash.com, Pexels.com, Pixabay.com

const products = [
  {
    id: 1,
    name: "Stainless Steel Dental Mirror",
    category: "Instrument",
    brand: "ProDental",
    price: 480,
    currency: "EGP",
    image: "images/products/dental-mirror.jpg",
    gallery: [
      "images/products/dental-mirror.jpg",
      "images/products/dental-mirror.jpg"
    ],
    description: "Premium stainless steel dental mirror with ergonomic design for comfortable examination and diagnosis. Suitable for basic and comprehensive dental examinations. Safe for use in all dental practices. Lifetime durability guarantee.",
    specifications: [
      { label: "Material", value: "100% Stainless Steel" },
      { label: "Size", value: "45mm Round" },
      { label: "Weight", value: "50g" },
      { label: "Warranty", value: "1 Year" }
    ],
    availability: "in_stock",
    badge: "In Stock"
  },
  {
    id: 2,
    name: "Double-Ended Dental Explorer",
    category: "Instrument",
    brand: "ProDental",
    price: 675,
    currency: "EGP",
    image: "images/products/dental-explorer.avif",
    gallery: [
      "images/products/dental-explorer.avif",
      "images/products/dental-explorer.avif"
    ],
    description: "Professional double-ended dental explorer for accurate caries detection with precision-engineered sharp tips. Manufactured from high-grade medical stainless steel. Internationally certified and sterilizable.",
    specifications: [
      { label: "Type", value: "Double-ended" },
      { label: "Length", value: "17.5cm" },
      { label: "Certification", value: "CE Marked, ISO 1986" },
      { label: "Weight", value: "35g" }
    ],
    availability: "in_stock",
    badge: "Best Seller"
  },
  {
    id: 3,
    name: "Universal Dental Composite Resin",
    category: "Restorative",
    brand: "DentalChem",
    price: 1350,
    currency: "EGP",
    image: "images/products/dx-universal-composite.jpg",
    gallery: [
      "images/products/dx-universal-composite.jpg",
      "images/products/dx-universal-composite.jpg"
    ],
    description: "High-quality universal dental composite resin with excellent shaping, carving, and polishing properties. Multi-shade system for perfect color matching. Superior stain resistance and liquid uptake resistance. 3-year shelf life.",
    specifications: [
      { label: "Size", value: "4g Syringe" },
      { label: "Available Shades", value: "A1, A2, A3, A3.5, B1" },
      { label: "Working Time", value: "5-7 minutes" },
      { label: "Curing Time", value: "20 seconds" }
    ],
    availability: "in_stock",
    badge: "New"
  },
  {
    id: 4,
    name: "Tokuyama Universal Bond II Adhesive",
    category: "Restorative",
    brand: "Tokuyama",
    price: 1163,
    currency: "EGP",
    image: "images/products/universal-bond-ii.jpg",
    gallery: [
      "images/products/universal-bond-ii.jpg",
      "images/products/universal-bond-ii.jpg"
    ],
    description: "Tokuyama Universal Bond II - Self-cured dental universal adhesive providing strong and long-lasting adhesion for all composite restorations. Advanced nano-particle formulation. Excellent wet environment performance. Superior shear strength and versatile application.",
    specifications: [
      { label: "Type", value: "Dual-Component" },
      { label: "Bottle Size", value: "5ml each" },
      { label: "Shelf Life", value: "3 years" },
      { label: "Setting Time", value: "30 seconds" }
    ],
    availability: "in_stock",
    badge: "In Stock"
  },
  {
    id: 5,
    name: "Nickel-Titanium Endodontic File Set",
    category: "Endodontics",
    brand: "ProDental",
    price: 1680,
    currency: "EGP",
    image: "images/products/endodontic-files.jpg",
    gallery: [
      "images/products/endodontic-files.jpg",
      "images/products/endodontic-files.jpg"
    ],
    description: "Premium endodontic file set made of advanced nickel-titanium alloy. Extremely flexible with superior fracture resistance. Precise cutting edges for efficient root canal cleaning. Includes sterile holder and safe storage case. 5-year shelf life.",
    specifications: [
      { label: "Material", value: "Nickel-Titanium (NiTi)" },
      { label: "Number of Files", value: "6 pieces set" },
      { label: "Sizes", value: "#15, #20, #25, #30, #35, #40" },
      { label: "Includes Case", value: "Yes" }
    ],
    availability: "in_stock",
    badge: "Best Seller"
  },
  {
    id: 6,
    name: "High-Quality Alginate Impression Material",
    category: "Consumables",
    brand: "DentalChem",
    price: 975,
    currency: "EGP",
    image: "images/products/alginate-impression-material.jpg",
    gallery: [
      "images/products/alginate-impression-material.jpg",
      "images/products/alginate-impression-material.jpg"
    ],
    description: "Fast-setting alginate impression material providing accurate dental impressions with excellent detail reproduction. Easy removal with minimal patient discomfort. Consistent impression quality. Available in multiple flavors. Safe and sterile.",
    specifications: [
      { label: "Type", value: "Alginate" },
      { label: "Pack Size", value: "500g" },
      { label: "Setting Time", value: "2-3 minutes" },
      { label: "Shelf Life", value: "2 years" }
    ],
    availability: "in_stock",
    badge: "In Stock"
  },
  {
    id: 7,
    name: "Latex-Free Nitrile Medical Gloves",
    category: "Medical Wear",
    brand: "Schneider",
    price: 390,
    currency: "EGP",
    image: "images/products/nitrile-gloves.jpg",
    gallery: [
      "images/products/nitrile-gloves.jpg",
      "images/products/nitrile-gloves.jpg"
    ],
    description: "100% latex-free sterile nitrile medical gloves providing superior protection against infection and viruses. Extremely flexible, durable, and safe. Suitable for all dental professionals. Hypoallergenic. Box of 100 individually wrapped gloves.",
    specifications: [
      { label: "Material", value: "Nitrile 100%" },
      { label: "Package", value: "100 pieces/box" },
      { label: "Available Sizes", value: "S, M, L, XL" },
      { label: "Standards", value: "FDA & ISO 10993" }
    ],
    availability: "in_stock",
    badge: "New"
  },
  {
    id: 8,
    name: "3-Layer Disposable Medical Face Masks",
    category: "Medical Wear",
    brand: "Voxkin",
    price: 255,
    currency: "EGP",
    image: "images/products/disposable-masks.jpg",
    gallery: [
      "images/products/disposable-masks.jpg",
      "images/products/disposable-masks.jpg"
    ],
    description: "Three-layer medical face masks providing effective protection against splashes, aerosols, and viruses. Soft, comfortable to wear with secure ear loops. High-quality manufacturing and complete sterilization. 2-year shelf life.",
    specifications: [
      { label: "Layers", value: "3-layer protection" },
      { label: "Package", value: "50 pieces/box" },
      { label: "Certification", value: "ASTM F2100-Level 3" },
      { label: "Type", value: "Disposable" }
    ],
    availability: "in_stock",
    badge: "Best Seller"
  },
  {
    id: 9,
    name: "Sterilization Pouches with Indicator Strip",
    category: "Consumables",
    brand: "Defend",
    price: 563,
    currency: "EGP",
    image: "images/products/sterilization-pouch.jpg",
    gallery: [
      "images/products/sterilization-pouch.jpg",
      "images/products/sterilization-pouch.jpg"
    ],
    description: "Medical sterilization pouches with chemical indicator strip for autoclave steam sterilization validation. Reliable design for safe equipment preservation. High-resistance material with international manufacturing standards. Provides year-long sterility assurance after sterilization.",
    specifications: [
      { label: "Size", value: "90mm x 150mm" },
      { label: "Package", value: "200 pieces/pack" },
      { label: "Material", value: "Medical-grade Kraft + Plastic" },
      { label: "Standards", value: "ISO 11607" }
    ],
    availability: "limited_stock",
    badge: "Limited"
  },
  {
    id: 10,
    name: "Aesthetic Ceramic Orthodontic Brackets",
    category: "Orthodontics",
    brand: "OrthoTech",
    price: 1950,
    currency: "EGP",
    image: "images/products/orthodontic-brackets.avif",
    gallery: [
      "images/products/orthodontic-brackets.avif",
      "images/products/orthodontic-brackets.avif"
    ],
    description: "High-precision aesthetic ceramic orthodontic brackets with pure white color matching natural tooth shade. Strong, durable, and easy to clean. Smooth edges minimize gum irritation. Made from premium medical-grade ceramic.",
    specifications: [
      { label: "Material", value: "Medical-grade Ceramic" },
      { label: "Color", value: "Natural tooth-colored white" },
      { label: "Package", value: "20 brackets/box" },
      { label: "Key Feature", value: "Aesthetic & Durable" }
    ],
    availability: "in_stock",
    badge: "New"
  },
  {
    id: 11,
    name: "High-Speed Electric Dental Handpiece",
    category: "Equipment",
    brand: "ECO Lime",
    price: 8550,
    currency: "EGP",
    image: "images/products/dental-handpiece.jpg",
    gallery: [
      "images/products/dental-handpiece.jpg",
      "images/products/dental-handpiece.jpg"
    ],
    description: "High-speed electric dental handpiece with superior torque and minimal noise. 100% medical-grade sterilizable material. Advanced cooling technology. Suitable for all dental preparations. Powerful and efficient motor. Comprehensive 2-year warranty.",
    specifications: [
      { label: "Maximum Speed", value: "400,000 rpm" },
      { label: "Power Source", value: "Electric Mains Powered" },
      { label: "Warranty", value: "2 years complete" },
      { label: "Cooling", value: "Air-cooling system" }
    ],
    availability: "in_stock",
    badge: "Best Seller"
  },
  {
    id: 12,
    name: "Powerful LED Blue Curing Light",
    category: "Equipment",
    brand: "LightDental",
    price: 3765,
    currency: "EGP",
    image: "images/products/curing-light.jpg",
    gallery: [
      "images/products/curing-light.jpg",
      "images/products/curing-light.jpg"
    ],
    description: "Powerful LED dental curing light with blue wavelength for rapid composite resin hardening. High-intensity evenly distributed light. Efficient operation with fast curing. Cool operation temperature. Long-lasting rechargeable battery.",
    specifications: [
      { label: "Light Type", value: "LED Blue Wavelength" },
      { label: "Wavelength Range", value: "420-480 nm" },
      { label: "Curing Time", value: "10-20 seconds" },
      { label: "Battery Type", value: "Rechargeable Li-ion" }
    ],
    availability: "in_stock",
    badge: "In Stock"
  }
];

// ============================================================
// CONTACT INFORMATION - EDIT THESE VALUES FOR CROWN DENTAL STORE
// ============================================================
const contactInfo = {
  // 👇 CHANGE THESE TO YOUR ACTUAL CONTACT DETAILS
  storeName: "Crown Dental Store",
  whatsapp: "+201000000000",        // WhatsApp number (with country code) - ADD YOUR WHATSAPP NUMBER
  phone: "+201000000000",           // Phone number - ADD YOUR PHONE NUMBER
  email: "info@crowndentalstore.com",    // Email address - ADD YOUR EMAIL
  address: "Egypt",       // Physical address - ADD YOUR ADDRESS
  googleMapsUrl: "https://maps.google.com/?q=crown+dental+store+egypt", // Google Maps link - UPDATE WITH YOUR LOCATION
  
  // GEOLOCATION SETTINGS
  enableGeolocation: true,
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.8267899999997!2d31.355!3d31.0461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z31LCsDI2JzE2LjAiTiAzMULCsDIxJzE4LjAiRQ!5e0!3m2!1sar!2seg!4v1234567890123", // Replace with your embed URL from Google Maps
  
  // Social Media Links (add your actual URLs)
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com"
};

// Store categories
const categories = [
  { id: 1, nameEnglish: "Orthodontics" },
  { id: 2, nameEnglish: "Restorative" },
  { id: 3, nameEnglish: "Endodontics" },
  { id: 4, nameEnglish: "Pediatric" },
  { id: 5, nameEnglish: "Implant" },
  { id: 6, nameEnglish: "Prosthetics" },
  { id: 7, nameEnglish: "Perio & Surgery" },
  { id: 8, nameEnglish: "Consumables" },
  { id: 9, nameEnglish: "Instrument" },
  { id: 10, nameEnglish: "Equipment" },
  { id: 11, nameEnglish: "Dental LAB" },
  { id: 12, nameEnglish: "Medical Wear" },
  { id: 13, nameEnglish: "Cosmetics" },
  { id: 14, nameEnglish: "Dental Student" },
  { id: 15, nameEnglish: "Handpiece Repair" }
];
