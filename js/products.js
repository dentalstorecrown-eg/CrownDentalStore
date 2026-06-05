/* =============================================================
   PRODUCTS PAGE JAVASCRIPT
   ============================================================= */

let allProducts = [...products];
let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 12;

// Initialize products page
document.addEventListener('DOMContentLoaded', function() {
  renderProducts(filteredProducts);
  setupFilters();
  setupSearch();
  handleURLParams();
});

/* =============================================================
   RENDER PRODUCTS
   ============================================================= */

function renderProducts(productsToRender) {
  const container = document.getElementById('products-container');

  if (!container) return;

  // Clear container
  container.innerHTML = '';

  if (productsToRender.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📦</div>
        <h2>${getText('لم يتم العثور على منتجات', 'No products found')}</h2>
        <p>${getText('يرجى محاولة البحث مع معايير مختلفة', 'Please try searching with different criteria')}</p>
      </div>
    `;
    return;
  }

  // Render product cards
  const html = productsToRender
    .map(product => createProductCard(product))
    .join('');

  container.innerHTML = html;

  // Add animation class to cards
  setTimeout(() => {
    const cards = container.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.animation = `slideUp 0.5s ease-in-out ${index * 0.05}s forwards`;
      card.style.opacity = '0';
    });
  }, 10);
}

/* =============================================================
   FILTERS SETUP
   ============================================================= */

function setupFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const sortFilter = document.getElementById('sort-filter');
  const clearFilters = document.getElementById('clear-filters');

  if (categoryFilter) {
    // Populate categories
    const uniqueCategories = getUniqueCategories();
    const options = uniqueCategories.map(cat => {
      const name = getCategoryName(cat);
      return `<option value="${cat.nameEnglish}">${name}</option>`;
    }).join('');

    categoryFilter.innerHTML = `<option value="">All Categories</option>` + options;

    categoryFilter.addEventListener('change', applyFilters);
  }

  if (sortFilter) {
    sortFilter.addEventListener('change', applyFilters);
  }

  if (clearFilters) {
    clearFilters.addEventListener('click', function() {
      if (categoryFilter) categoryFilter.value = '';
      if (sortFilter) sortFilter.value = 'default';
      document.getElementById('search-input').value = '';

      filteredProducts = [...allProducts];
      renderProducts(filteredProducts);
      showNotification(
        'All filters cleared',
        'info'
      );
    });
  }
}

function applyFilters() {
  const categoryFilter = document.getElementById('category-filter')?.value;
  const sortFilter = document.getElementById('sort-filter')?.value;
  const searchTerm = document.getElementById('search-input')?.value;

  // Start with all products
  let results = [...allProducts];

  // Apply search with progressive/prefix matching
  if (searchTerm) {
    const searchLower = searchTerm.toLowerCase();
    results = results.filter(product => {
      const name = (product.name || product.nameEnglish || '').toLowerCase();
      const description = (product.description || '').toLowerCase();
      const brand = (product.brand || '').toLowerCase();
      const category = (product.category || '').toLowerCase();

      // Progressive prefix matching - prioritize prefix matches
      return name.startsWith(searchLower) ||
             brand.startsWith(searchLower) ||
             category.startsWith(searchLower) ||
             // Fall back to includes for flexibility
             name.includes(searchLower) ||
             description.includes(searchLower);
    });

    // Sort by match quality for better relevance
    results.sort((a, b) => {
      const aName = (a.name || a.nameEnglish || '').toLowerCase();
      const bName = (b.name || b.nameEnglish || '').toLowerCase();
      const aCategory = (a.category || '').toLowerCase();
      const bCategory = (b.category || '').toLowerCase();

      // Prefix match in name gets highest priority
      const aNamePrefix = aName.startsWith(searchLower) ? 0 : 1;
      const bNamePrefix = bName.startsWith(searchLower) ? 0 : 1;
      if (aNamePrefix !== bNamePrefix) return aNamePrefix - bNamePrefix;

      // Then prefix match in category
      const aCatPrefix = aCategory.startsWith(searchLower) ? 0 : 1;
      const bCatPrefix = bCategory.startsWith(searchLower) ? 0 : 1;
      if (aCatPrefix !== bCatPrefix) return aCatPrefix - bCatPrefix;

      // Then by name length
      return aName.length - bName.length;
    });
  }

  // Apply category filter
  if (categoryFilter) {
    results = results.filter(product => product.category === categoryFilter);
  }

  // Apply sorting
  if (sortFilter) {
    results = sortProducts(results, sortFilter);
  }

  filteredProducts = results;
  currentPage = 1;
  renderProducts(filteredProducts);

  // Show result count
  updateResultCount(filteredProducts.length);
}

function updateResultCount(count) {
  const resultCount = document.getElementById('result-count');
  if (resultCount) {
    resultCount.textContent = `Found ${count} product${count !== 1 ? 's' : ''}`;
  }
}

/* =============================================================
   SEARCH SETUP
   ============================================================= */

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  if (searchInput) {
    // Real-time search with debounce
    let debounceTimer;

    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        applyFilters();
      }, 300);
    });
  }

  if (searchButton) {
    searchButton.addEventListener('click', function() {
      applyFilters();
    });
  }

  // Allow Enter key to trigger search
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        applyFilters();
      }
    });
  }
}

/* =============================================================
   PAGINATION
   ============================================================= */

function setupPagination() {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginationContainer = document.getElementById('pagination');

  if (!paginationContainer || totalPages <= 1) {
    if (paginationContainer) {
      paginationContainer.innerHTML = '';
    }
    return;
  }

  let html = '';

  // Previous button
  html += `<li><a href="#" onclick="previousPage(); return false;" ${currentPage === 1 ? 'style="pointer-events: none; opacity: 0.5;"' : ''}>Previous</a></li>`;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += `<li><span class="active">${i}</span></li>`;
    } else {
      html += `<li><a href="#" onclick="goToPage(${i}); return false;">${i}</a></li>`;
    }
  }

  // Next button
  html += `<li><a href="#" onclick="nextPage(); return false;" ${currentPage === totalPages ? 'style="pointer-events: none; opacity: 0.5;"' : ''}>Next</a></li>`;

  paginationContainer.innerHTML = html;
}

function goToPage(pageNum) {
  currentPage = pageNum;
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = filteredProducts.slice(start, end);

  renderProducts(pageProducts);
  setupPagination();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function previousPage() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

function nextPage() {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

/* =============================================================
   QUICK ACTIONS
   ============================================================= */

function addToCart(productId) {
  const product = getProductById(productId);
  if (product) {
    showNotification(
      `Added ${product.name || product.nameEnglish} to cart`,
      'success'
    );
  }
}

function quickView(productId) {
  window.location.href = `product-details.html?id=${productId}`;
}

/* =============================================================
   HANDLE URL PARAMETERS (Search from other pages)
   ============================================================= */

function handleURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  const categoryParam = urlParams.get('category');

  if (searchParam) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = decodeURIComponent(searchParam);
      applyFilters();
    }
  }

  if (categoryParam) {
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
      categoryFilter.value = decodeURIComponent(categoryParam);
      applyFilters();
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderProducts,
    applyFilters,
    setupSearch,
    setupFilters,
    goToPage,
    previousPage,
    nextPage,
    handleURLParams
  };
}
