/* =============================================================
   SHOPPING CART FUNCTIONALITY
   ============================================================= */

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCart();
  updateCartIcon();
});

// Get cart from localStorage
function getCart() {
  const cart = localStorage.getItem('dentalStoreCart');
  return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('dentalStoreCart', JSON.stringify(cart));
  updateCartIcon();
}

// Add item to cart
function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) {
    showNotification('Product not found', 'error');
    return;
  }

  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.image,
      category: product.category,
      quantity: quantity
    });
  }

  saveCart(cart);
  showNotification('Product added to cart!', 'success');
  
  // Redirect to cart page
  window.location.href = 'cart.html';
}

// Remove item from cart
function removeFromCart(productId, variantId = null) {
  let cart = getCart();
  if (variantId) {
    cart = cart.filter(item => !(item.id === productId && item.variantId === variantId));
  } else {
    cart = cart.filter(item => !(item.id === productId && !item.variantId));
  }
  saveCart(cart);
  renderCart();
  showNotification('Product removed from cart', 'success');
}

// Update item quantity
function updateCartItemQuantity(productId, quantity, variantId = null) {
  const cart = getCart();
  let item;
  if (variantId) {
    item = cart.find(i => i.id === productId && i.variantId === variantId);
  } else {
    item = cart.find(i => i.id === productId && !i.variantId);
  }
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
      renderCart();
    }
  }
}

// Clear entire cart
function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    localStorage.removeItem('dentalStoreCart');
    renderCart();
    updateCartIcon();
    showNotification('Cart cleared', 'success');
  }
}

// Calculate cart total
function calculateCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Calculate cart item count
function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Render cart page
function renderCart() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSummaryContainer = document.getElementById('cart-summary');
  const emptyCartContainer = document.getElementById('empty-cart');
  const cartItemCount = document.getElementById('cart-item-count');

  if (cart.length === 0) {
    // Show empty cart state
    if (cartItemsContainer) cartItemsContainer.style.display = 'none';
    if (cartSummaryContainer) cartSummaryContainer.style.display = 'none';
    if (emptyCartContainer) emptyCartContainer.style.display = 'block';
    if (cartItemCount) cartItemCount.textContent = 'Your cart is empty';
    return;
  }

  // Show cart content
  if (cartItemsContainer) cartItemsContainer.style.display = 'block';
  if (cartSummaryContainer) cartSummaryContainer.style.display = 'block';
  if (emptyCartContainer) emptyCartContainer.style.display = 'none';
  if (cartItemCount) {
    const itemCount = getCartItemCount();
    cartItemCount.textContent = `You have ${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`;
  }

  // Render cart items
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = cart.map(item => {
      const itemId = item.variantId ? `${item.id}-${item.variantId}` : item.id;
      const displayName = item.hasVariants && item.variantLabel ? `${item.name} (${item.variantLabel})` : item.name;
      const removeHandler = item.variantId ? `removeFromCart(${item.id}, '${item.variantId}')` : `removeFromCart(${item.id})`;
      const updateHandler = item.variantId 
        ? `updateCartItemQuantity(${item.id}, ${item.quantity - 1}, '${item.variantId}')`
        : `updateCartItemQuantity(${item.id}, ${item.quantity - 1})`;
      const updateHandlerPlus = item.variantId 
        ? `updateCartItemQuantity(${item.id}, ${item.quantity + 1}, '${item.variantId}')`
        : `updateCartItemQuantity(${item.id}, ${item.quantity + 1})`;
      
      return `
      <div class="cart-item" data-product-id="${itemId}">
        <img src="${item.image}" alt="${displayName}" class="cart-item-image">
        <div class="cart-item-details">
          <h3 class="cart-item-name">${displayName}</h3>
          <p class="cart-item-category">${item.category}</p>
          <p class="cart-item-price">${formatCurrency(item.price, item.currency)}</p>
        </div>
        <div class="cart-item-actions">
          <div class="cart-quantity-controls">
            <button class="cart-qty-btn" onclick="${updateHandler}">−</button>
            <input type="number" class="cart-qty-input" value="${item.quantity}" min="1" readonly>
            <button class="cart-qty-btn" onclick="${updateHandlerPlus}">+</button>
          </div>
          <p class="cart-item-subtotal">${formatCurrency(item.price * item.quantity, item.currency)}</p>
          <button class="btn-remove-item" onclick="${removeHandler}" title="Remove item">🗑️</button>
        </div>
      </div>
    `;
    }).join('');
  }

  // Update summary
  const total = calculateCartTotal();
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  
  if (subtotalEl) subtotalEl.textContent = formatCurrency(total, 'EGP');
  if (totalEl) totalEl.textContent = formatCurrency(total, 'EGP');
}

// Update cart icon badge
function updateCartIcon() {
  const count = getCartItemCount();
  let badge = document.getElementById('cart-badge');
  
  if (!badge) {
    // Create badge if it doesn't exist
    const cartIcon = document.getElementById('floating-cart-btn');
    if (cartIcon) {
      badge = document.createElement('span');
      badge.id = 'cart-badge';
      badge.className = 'cart-badge';
      cartIcon.appendChild(badge);
    }
  }
  
  if (badge) {
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : count;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Order via WhatsApp
function orderNow() {
  const cart = getCart();
  
  if (cart.length === 0) {
    showNotification('Your cart is empty', 'error');
    return;
  }

  const total = calculateCartTotal();
  const whatsappNumber = '201028260186';
  
  // Build order message
  let message = '🛒 *New Order from Crown Dental Store*\n\n';
  message += '*Order Details:*\n';
  message += '━━━━━━━━━━━━━━━━━━━━\n\n';
  
  cart.forEach((item, index) => {
    const displayName = item.hasVariants && item.variantLabel 
      ? `${item.name} (${item.variantLabel})` 
      : item.name;
    
    message += `${index + 1}. *${displayName}*\n`;
    message += `   • Category: ${item.category}\n`;
    message += `   • Price: ${item.price} ${item.currency}\n`;
    message += `   • Quantity: ${item.quantity}\n`;
    message += `   • Subtotal: ${item.price * item.quantity} ${item.currency}\n\n`;
  });
  
  message += '━━━━━━━━━━━━━━━━━━━━\n';
  message += `*Total Amount: ${total} EGP*\n\n`;
  message += 'Please confirm this order and provide delivery details.';

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

// Export functions for use in other files
if (typeof window !== 'undefined') {
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.updateCartItemQuantity = updateCartItemQuantity;
  window.clearCart = clearCart;
  window.getCart = getCart;
  window.getCartItemCount = getCartItemCount;
  window.orderNow = orderNow;
  window.updateCartIcon = updateCartIcon;
}
