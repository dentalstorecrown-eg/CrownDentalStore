/* =============================================================
   MAIN JAVASCRIPT - Global Functionality
   ============================================================= */

// Current Language (can be 'ar' for Arabic or 'en' for English)
let currentLanguage = 'en';

/* =============================================================
   REDIRECT TO HOME ON PAGE REFRESH
   ============================================================= */

// Redirect to home page when refreshing any page except index.html
(function() {
  const currentPageName = window.location.pathname.split('/').pop() || 'index.html';
  const isHomePage = currentPageName === 'index.html' || currentPageName === '';
  
  // Only redirect if not on home page and this appears to be a page refresh
  if (!isHomePage) {
    // Check if user is navigating via refresh key (F5, Ctrl+R, etc.)
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
      window.location.href = 'index.html';
      return;
    }
    
    // Alternative: Use sessionStorage approach for better compatibility
    const isNewSession = !sessionStorage.getItem('pageLoadSession');
    if (isNewSession) {
      sessionStorage.setItem('pageLoadSession', 'true');
    } else {
      // If session exists and we're not on home, it might be a refresh
      // but we'll use the navigation type check above instead
    }
  }
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initializeNavbar();
  initializeFloatingWhatsApp();
  setActiveNavLink();
  initializeMobileMenu();
  initializeGeolocation();
  initializeNavbarIcons();
});

/* =============================================================
   NAVBAR FUNCTIONALITY
   ============================================================= */

function initializeNavbar() {
  const navbar = document.querySelector('.navbar');

  if (!navbar) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
  });
}

/* =============================================================
   NAVBAR ICONS FUNCTIONALITY
   ============================================================= */

function initializeNavbarIcons() {
  const icons = document.querySelectorAll('.navbar-icons .navbar-icon');

  icons.forEach(icon => {
    const title = icon.getAttribute('title');

    // Account icon handler
    if (title === 'الحساب' || title === 'Account') {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', function() {
        handleAccountClick();
      });
    }

    // Shopping cart icon handler
    if (title === 'السلة' || title === 'Cart') {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', function() {
        handleCartClick();
      });
    }
  });
}

function handleAccountClick() {
  // For now, show an alert. In a full implementation, you might:
  // - Open a login modal
  // - Navigate to an account page
  // - Show user profile dropdown
  alert(currentLanguage === 'ar' ? 'ميزة الحساب قريباً قيد التطوير' : 'Account feature coming soon');
}

function handleCartClick() {
  // For now, show an alert. In a full implementation, you might:
  // - Navigate to a cart page
  // - Show a mini cart modal
  // - Display cart items count
  alert(currentLanguage === 'ar' ? 'عربة التسوق قريباً قيد التطوير' : 'Shopping cart coming soon');
}

function initializeMobileMenu() {
  const toggle = document.querySelector('.navbar-toggle');
  const nav = document.querySelector('.navbar-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });

  // Close menu when link is clicked
  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Check if current page matches link
    if (href === currentPage ||
        (currentPage === '' && href === 'index.html') ||
        (currentPage === '/' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* =============================================================
   GEOLOCATION SERVICE - DETECT USER LOCATION
   ============================================================= */

function initializeGeolocation() {
  // Check if geolocation is supported by the browser
  if ('geolocation' in navigator && contactInfo.enableGeolocation) {
    // Get user's location for delivery calculation and localization
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        // Store location in sessionStorage for use throughout the session
        sessionStorage.setItem('userLatitude', latitude);
        sessionStorage.setItem('userLongitude', longitude);
        
        // Log location for debugging (remove in production)
        console.log('User location detected:', {lat: latitude, lng: longitude});
        
        // You can use this for:
        // 1. Calculating shipping costs
        // 2. Showing nearby store locations
        // 3. Personalizing content based on location
      },
      function(error) {
        // Handle geolocation errors silently (user may have denied permission)
        console.log('Geolocation error:', error.message);
        // Don't show error to user - geolocation is optional
      },
      {
        // Options for geolocation
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 3600000 // Cache location for 1 hour
      }
    );
  }
}

// Function to get user location from storage
function getUserLocation() {
  const latitude = sessionStorage.getItem('userLatitude');
  const longitude = sessionStorage.getItem('userLongitude');
  
  if (latitude && longitude) {
    return {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    };
  }
  return null;
}

// Function to calculate delivery time based on governorate (You can enhance this)
function estimateDeliveryTime(governorate) {
  const deliveryTimes = {
    'Cairo': '1-2 days',
    'Giza': '1-2 days',
    'Mansoura': '2-3 days',
    'Alexandria': '2-3 days',
    'Tanta': '2-3 days',
    'Zagazig': '2-3 days',
    'Suez': '2-3 days',
    'Ismailia': '2-3 days',
    'Port Said': '3-4 days',
    'Aswan': '4-5 days',
    'Luxor': '4-5 days',
    'Asyut': '3-4 days',
    'Minya': '3-4 days'
  };
  
  return deliveryTimes[governorate] || '3-5 days';
}

/* =============================================================
   FLOATING WHATSAPP BUTTON
   ============================================================= */

function initializeFloatingWhatsApp() {
  const whatsappBtn = document.getElementById('floating-whatsapp-btn');

  if (!whatsappBtn) return;

  whatsappBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openWhatsApp();
  });

  // Create floating button if it doesn't exist
  if (!document.getElementById('floating-whatsapp-btn')) {
    createFloatingWhatsAppButton();
  }
}

function createFloatingWhatsAppButton() {
  const button = document.createElement('a');
  button.id = 'floating-whatsapp-btn';
  button.className = 'floating-whatsapp';
  button.href = '#';
  button.title = currentLanguage === 'ar' ? 'اتصل بنا عبر واتس آب' : 'Contact us on WhatsApp';
  button.innerHTML = '<img src="images/social/whatsapp_style_icon.svg" alt="WhatsApp" style="width: 32px; height: 32px;">';

  document.body.appendChild(button);

  button.addEventListener('click', function(e) {
    e.preventDefault();
    openWhatsApp();
  });
}

function openWhatsApp(message = null) {
  const phone = contactInfo.whatsapp;

  if (!message) {
    message = currentLanguage === 'ar'
      ? 'السلام عليكم، أود التحقق من المنتجات والأسعار'
      : 'Hello, I would like to inquire about your products';
  }

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Remove + if present at start for proper URL formatting
  const cleanPhone = phone.replace(/\+/g, '');

  // Open WhatsApp
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

/* =============================================================
   SMOOTH SCROLLING
   ============================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* =============================================================
   LANGUAGE SUPPORT - ENGLISH ONLY
   ============================================================= */

// Website language is set to English only
const websiteLanguage = 'en';

// Initialize English on page load
window.addEventListener('load', function() {
  const html = document.documentElement;
  html.setAttribute('dir', 'ltr');
  html.setAttribute('lang', 'en');
  currentLanguage = 'en';
});

/* =============================================================
   UTILITY FUNCTIONS
   ============================================================= */

// Format currency
function formatCurrency(price, currency = 'USD') {
  return new Intl.NumberFormat(currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
    style: 'currency',
    currency: currency
  }).format(price);
}

// Get text in current language
function getText(arabicText, englishText) {
  return currentLanguage === 'ar' ? arabicText : englishText;
}

// Get product name in current language (English only)
function getProductName(product) {
  return product.name || product.nameEnglish;
}

// Get product description in current language
function getProductDescription(product) {
  return currentLanguage === 'ar' ? product.descriptionArabic : product.descriptionEnglish;
}

// Get category name in current language
function getCategoryName(category) {
  return currentLanguage === 'ar' ? category.nameArabic : category.nameEnglish;
}

// Create product card HTML
function createProductCard(product) {
  const productName = getProductName(product);
  const categoryName = product.category; // Categories are English
  const whatsappMessage = `Product: ${productName}\nSKU: ${product.sku}\nPrice: ${product.price} ${product.currency}\nI'm interested in this product.`;

  const availabilityClass = `card-availability ${product.availability}`;
  const availabilityText = getText(
    product.availability === 'in_stock' ? 'متوفر' : product.availability === 'limited_stock' ? 'كمية محدودة' : 'غير متوفر',
    product.availability === 'in_stock' ? 'In Stock' : product.availability === 'limited_stock' ? 'Limited Stock' : 'Out of Stock'
  );

  return `
    <div class="card fade-in">
      <div class="card-image">
        <img src="${product.image}" alt="${productName}" loading="lazy">
        <span class="card-badge">${product.badge}</span>
      </div>
      <div class="card-body">
        <div class="card-category">${categoryName}</div>
        <h3 class="card-title">${productName}</h3>
        <div class="card-price">${formatCurrency(product.price, product.currency)}</div>
        <div class="${availabilityClass}">${availabilityText}</div>
        <div class="quantity-counter">
          <button class="qty-btn" onclick="decreaseQuantity(this)">−</button>
          <input type="number" class="qty-input" value="1" min="1" readonly>
          <button class="qty-btn" onclick="increaseQuantity(this)">+</button>
        </div>
        <div class="card-actions">
          <a href="product-details.html?id=${product.id}" class="btn btn-primary btn-sm" style="flex: 1; text-align: center;">
            ${getText('عرض التفاصيل', 'View Details')}
          </a>
          <button class="btn btn-secondary btn-sm" onclick="orderProduct('${productName}', '${product.sku}', ${product.price}, '${product.currency}', this)" style="flex: 1;">
            ${getText('اطلب الآن', 'Order Now')}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Contact via WhatsApp with product info
function contactViaWhatsApp(productName, sku, price, currency) {
  const message = currentLanguage === 'ar'
    ? `أود طلب المنتج: ${productName}\nالرمز: ${sku}\nالسعر: ${price} ${currency}`
    : `I would like to order: ${productName}\nSKU: ${sku}\nPrice: ${price} ${currency}`;

  openWhatsApp(message);
}

// Quantity counter functions
function increaseQuantity(button) {
  const input = button.previousElementSibling;
  input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(button) {
  const input = button.nextElementSibling;
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

// Order product with quantity
function orderProduct(productName, sku, price, currency, button) {
  const card = button.closest('.card');
  const quantityInput = card.querySelector('.qty-input');
  const quantity = parseInt(quantityInput.value);
  const totalPrice = price * quantity;

  const message = currentLanguage === 'ar'
    ? `أود طلب ${quantity} من: ${productName}\nالرمز: ${sku}\nالسعر للواحدة: ${price} ${currency}\nالإجمالي: ${totalPrice} ${currency}`
    : `I would like to order ${quantity} of: ${productName}\nSKU: ${sku}\nPrice per unit: ${price} ${currency}\nTotal: ${totalPrice} ${currency}`;

  openWhatsApp(message);
}

// Search and filter utilities
function searchProducts(searchTerm) {
  const term = searchTerm.toLowerCase();

  return products.filter(product => {
    return (
      product.nameArabic.toLowerCase().includes(term) ||
      product.nameEnglish.toLowerCase().includes(term) ||
      product.sku.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });
}

function filterByCategory(categoryName) {
  return products.filter(product => product.category === categoryName);
}

function sortProducts(productsArray, sortBy) {
  const sorted = [...productsArray];

  switch(sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name':
      return sorted.sort((a, b) => {
        const nameA = getProductName(a).toLowerCase();
        const nameB = getProductName(b).toLowerCase();
        return nameA.localeCompare(nameB);
      });
    case 'newest':
      return sorted.reverse();
    default:
      return sorted;
  }
}

// Get unique categories
function getUniqueCategories() {
  const categoryNames = [...new Set(products.map(p => p.category))];
  return categories.filter(cat => categoryNames.includes(cat.nameEnglish));
}

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

// Get related products
function getRelatedProducts(product, limit = 4) {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

// Show notification
function showNotification(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '100px';
  alertDiv.style.right = currentLanguage === 'ar' ? 'auto' : '20px';
  alertDiv.style.left = currentLanguage === 'ar' ? '20px' : 'auto';
  alertDiv.style.zIndex = '9999';
  alertDiv.style.minWidth = '300px';

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.style.opacity = '0';
    alertDiv.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(() => alertDiv.remove(), 300);
  }, 3000);
}

/* =============================================================
   FORM HANDLING
   ============================================================= */

function setupContactForm() {
  const form = document.getElementById('contact-form');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validate form
    if (!data.name || !data.email || !data.message) {
      showNotification(
        getText('يرجى ملء جميع الحقول المطلوبة', 'Please fill in all required fields'),
        'error'
      );
      return;
    }

    // In a real application, you would send this to a backend
    console.log('Form Data:', data);

    // Show success message
    showNotification(
      getText('تم إرسال رسالتك بنجاح. سنتواصل معك قريباً', 'Your message has been sent successfully. We will contact you soon.'),
      'success'
    );

    // Reset form
    form.reset();
  });
}

// Initialize forms on page load
window.addEventListener('load', function() {
  setupContactForm();
});

/* =============================================================
   LOCAL STORAGE HELPERS
   ============================================================= */

// Save to local storage
function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
}

// Get from local storage
function getFromStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error reading from localStorage:', e);
    return null;
  }
}

// Remove from local storage
function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing from localStorage:', e);
  }
}

/* =============================================================
   URL PARAMETERS
   ============================================================= */

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    searchProducts,
    filterByCategory,
    sortProducts,
    getUniqueCategories,
    getProductById,
    getRelatedProducts,
    formatCurrency,
    getText,
    getProductName,
    getProductDescription,
    getCategoryName,
    createProductCard,
    contactViaWhatsApp,
    openWhatsApp,
    showNotification,
    saveToStorage,
    getFromStorage,
    removeFromStorage,
    getUrlParameter
  };
}
