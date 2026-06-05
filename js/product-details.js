/* =============================================================
   PRODUCT DETAILS PAGE JAVASCRIPT
   ============================================================= */

let currentProduct = null;
let productQuantity = 1;

// Initialize product details page
document.addEventListener('DOMContentLoaded', function() {
  const productId = getUrlParameter('id');

  if (!productId) {
    showProductNotFound();
    return;
  }

  const product = getProductById(productId);

  if (!product) {
    showProductNotFound();
    return;
  }

  currentProduct = product;
  renderProductDetails(product);
  setupImageGallery(product);
  renderRelatedProducts(product);
});

/* =============================================================
   RENDER PRODUCT DETAILS
   ============================================================= */

function renderProductDetails(product) {
  const container = document.getElementById('product-details-container');
  if (!container) return;

  const productName = product.name || product.nameEnglish;
  const description = product.description || '';
  const availabilityClass = `card-availability ${product.availability}`;
  const availabilityText = product.availability === 'in_stock' ? 'In Stock' : product.availability === 'limited_stock' ? 'Limited Stock' : 'Out of Stock';

  // Create specifications HTML
  const specsHtml = product.specifications.map(spec => {
    const label = spec.label || spec.labelEnglish;
    return `
      <li>
        <span class="spec-label">${label}</span>
        <span class="spec-value">${spec.value}</span>
      </li>
    `;
  }).join('');

  // Create gallery thumbnails HTML
  const thumbnailsHtml = product.gallery.map((img, index) => `
    <img src="${img}" alt="${productName} ${index + 1}" class="product-thumbnail ${index === 0 ? 'active' : ''}" onclick="switchImage(${index})">
  `).join('');

  const html = `
    <div class="product-gallery">
      <img id="main-product-image" src="${product.image}" alt="${productName}" class="product-main-image">
      <div class="product-thumbnails">
        ${thumbnailsHtml}
      </div>
      
      <div style="margin-top: var(--spacing-lg); padding: var(--spacing-lg); background-color: var(--color-bg-light); border-radius: var(--radius-lg);">
        <label style="font-weight: 600; display: block; margin-bottom: var(--spacing-lg);">Quantity:</label>
        <div style="display: flex; align-items: center; gap: var(--spacing-lg); justify-content: center;">
          <button onclick="decrementQuantity()" style="background-color: var(--color-primary); border: none; border-radius: 50%; width: 50px; height: 50px; cursor: pointer; font-size: 28px; color: white; font-weight: bold; display: flex; align-items: center; justify-content: center; transition: all var(--transition-fast); box-shadow: 0 2px 8px rgba(0, 86, 179, 0.2);">−</button>
          <input type="number" id="product-quantity" value="1" min="1" style="width: 80px; text-align: center; border: none; font-size: 28px; font-weight: 700; background: transparent; color: var(--color-text);" readonly>
          <button onclick="incrementQuantity()" style="background-color: var(--color-primary); border: none; border-radius: 50%; width: 50px; height: 50px; cursor: pointer; font-size: 28px; color: white; font-weight: bold; display: flex; align-items: center; justify-content: center; transition: all var(--transition-fast); box-shadow: 0 2px 8px rgba(0, 86, 179, 0.2);">+</button>
        </div>
      </div>
    </div>

    <div class="product-info">
      <h1>${productName}</h1>

      <div class="product-meta">
        <div class="product-meta-item">
          <span class="product-meta-label">Category</span>
          <span class="product-meta-value">${product.category}</span>
        </div>
        <div class="product-meta-item">
          <span class="product-meta-label">Brand</span>
          <span class="product-meta-value">${product.brand}</span>
        </div>
        <div class="product-meta-item">
          <span class="product-meta-label">Availability</span>
          <div class="${availabilityClass}">${availabilityText}</div>
        </div>
      </div>

      <div class="product-price">${formatCurrency(product.price, product.currency)}</div>

      <div class="product-description">
        <h3>Description</h3>
        <p>${description}</p>
      </div>

      <div class="specifications">
        <h3>Specifications</h3>
        <ul class="specifications-list">
          ${specsHtml}
        </ul>
      </div>

      <div class="product-actions">
        <button class="btn btn-success btn-lg" onclick="orderNow('${productName}', ${product.price}, '${product.currency}')" style="display: flex; align-items: center; justify-content: center; gap: var(--spacing-sm);">
          <img src="images/social/whatsapp_style_icon.svg" alt="WhatsApp" style="width: 20px; height: 20px;"> Order on WhatsApp
        </button>
        <a href="tel:${contactInfo.phone.replace(/[\s-]/g, '')}" class="btn btn-primary btn-lg">
          📞 Call Us
        </a>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

/* =============================================================
   IMAGE GALLERY
   ============================================================= */

function setupImageGallery(product) {
  const thumbnails = document.querySelectorAll('.product-thumbnail');

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
      switchImage(index);
    });
  });
}

function switchImage(index) {
  if (!currentProduct || index >= currentProduct.gallery.length) return;

  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.product-thumbnail');

  // Update main image
  mainImage.src = currentProduct.gallery[index];

  // Update active thumbnail
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

/* =============================================================
   RELATED PRODUCTS
   ============================================================= */

function renderRelatedProducts(product) {
  const container = document.getElementById('related-products-container');
  if (!container) return;

  const related = getRelatedProducts(product, 4);

  if (related.length === 0) {
    container.innerHTML = '';
    return;
  }

  const html = related.map(prod => createProductCard(prod)).join('');

  container.innerHTML = `
    <div class="section">
      <div class="section-title">
        <h2>${getText('منتجات ذات صلة', 'Related Products')}</h2>
      </div>
      <div class="products-grid">
        ${html}
      </div>
    </div>
  `;
}

/* =============================================================
   ORDER FUNCTIONS
   ============================================================= */

function orderNow(productName, price, currency) {
  const quantity = parseInt(document.getElementById('product-quantity')?.value || 1);
  const totalPrice = price * quantity;
  const message = `🛍️ I would like to order the following product:\n\n📦 Product: ${productName}\n📊 Quantity: ${quantity}\n💰 Unit Price: ${price} ${currency}\n💵 Total Price: ${totalPrice} ${currency}\n\nCan I get more details?`;
  openWhatsApp(message);
}

/* =============================================================
   QUANTITY COUNTER FUNCTIONS
   ============================================================= */

function incrementQuantity() {
  const input = document.getElementById('product-quantity');
  if (input) {
    input.value = parseInt(input.value) + 1;
  }
}

function decrementQuantity() {
  const input = document.getElementById('product-quantity');
  if (input && parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

/* =============================================================
   ERROR HANDLING
   ============================================================= */

function showProductNotFound() {
  const container = document.getElementById('product-details-container');
  if (!container) return;

  container.innerHTML = `
    <div class="empty-state" style="grid-column: 1/-1; min-height: 400px; display: flex; flex-direction: column; justify-content: center;">
      <div class="empty-state-icon">❌</div>
      <h2>Product Not Found</h2>
      <p>Sorry, the product you are looking for does not exist.</p>
      <a href="products.html" class="btn btn-primary" style="margin-top: var(--spacing-lg); display: inline-block;">
        Back to Products
      </a>
    </div>
  `;
}

/* =============================================================
   BREADCRUMB
   ============================================================= */

function renderBreadcrumb(product) {
  const breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;

  const productName = product.name || product.nameEnglish;
  const categoryName = product.category;

  breadcrumb.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="products.html">Products</a></li>
    <li><a href="products.html">${categoryName}</a></li>
    <li>${productName}</li>
  `;
}

// Initialize breadcrumb when product loads
window.addEventListener('load', function() {
  if (currentProduct) {
    renderBreadcrumb(currentProduct);
  }
});

/* =============================================================
   SOCIAL SHARING
   ============================================================= */

function shareProduct(platform) {
  if (!currentProduct) return;

  const productName = currentProduct.name || currentProduct.nameEnglish;
  const productUrl = window.location.href;
  const shareText = `Check out this product: ${productName}`;

  let url = '';

  switch(platform) {
    case 'facebook':
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
      break;
    case 'twitter':
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(productUrl)}`;
      break;
    case 'whatsapp':
      url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + productUrl)}`;
      break;
    default:
      return;
  }

  window.open(url, '_blank', 'width=600,height=400');
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderProductDetails,
    setupImageGallery,
    switchImage,
    renderRelatedProducts,
    orderNow,
    shareProduct
  };
}
