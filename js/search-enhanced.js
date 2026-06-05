/* =============================================================
   ENHANCED SEARCH WITH DROPDOWN AUTOCOMPLETE
   ============================================================= */

// Initialize enhanced search on all pages
document.addEventListener('DOMContentLoaded', function() {
  initializeSearchDropdowns();
  initializeNavbarSearch();
});

/* =============================================================
   SEARCH DROPDOWN INITIALIZATION
   ============================================================= */

function initializeSearchDropdowns() {
  const searchInputs = document.querySelectorAll('[data-search-dropdown]');

  searchInputs.forEach(input => {
    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    dropdown.style.display = 'none';
    input.parentNode.insertBefore(dropdown, input.nextSibling);

    // Add input event listener for autocomplete
    input.addEventListener('input', function(e) {
      handleSearchInput(this, dropdown);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });

    // Show dropdown on focus
    input.addEventListener('focus', function() {
      if (this.value.trim()) {
        handleSearchInput(this, dropdown);
      }
    });
  });
}

function handleSearchInput(input, dropdown) {
  const searchTerm = input.value.trim().toLowerCase();

  if (!searchTerm) {
    dropdown.style.display = 'none';
    return;
  }

  // PURE PROGRESSIVE MATCHING - Only prefix matches, no partial includes
  const matches = products.filter(product => {
    const name = (product.name || product.nameEnglish || '').toLowerCase();
    const brand = (product.brand || '').toLowerCase();
    const category = (product.category || '').toLowerCase();
    const sku = (product.sku || '').toLowerCase();
    
    // Check if ANY field STARTS with search term - progressive matching only
    return (
      name.startsWith(searchTerm) ||
      brand.startsWith(searchTerm) ||
      category.startsWith(searchTerm) ||
      sku.startsWith(searchTerm)
    );
  }).slice(0, 10);

  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="search-dropdown-item no-results">
        <div class="search-no-results">
          No products found for "${input.value}"
        </div>
      </div>
    `;
    dropdown.style.display = 'block';
    return;
  }

  // Sort matches: Name prefix > Category prefix > Name length
  matches.sort((a, b) => {
    const aName = (a.name || a.nameEnglish || '').toLowerCase();
    const bName = (b.name || b.nameEnglish || '').toLowerCase();
    const aCategory = (a.category || '').toLowerCase();
    const bCategory = (b.category || '').toLowerCase();
    
    // Prefix match in name gets highest priority (0 = match, 1 = no match)
    const aNamePrefix = aName.startsWith(searchTerm) ? 0 : 1;
    const bNamePrefix = bName.startsWith(searchTerm) ? 0 : 1;
    if (aNamePrefix !== bNamePrefix) return aNamePrefix - bNamePrefix;
    
    // Then prefix match in category
    const aCatPrefix = aCategory.startsWith(searchTerm) ? 0 : 1;
    const bCatPrefix = bCategory.startsWith(searchTerm) ? 0 : 1;
    if (aCatPrefix !== bCatPrefix) return aCatPrefix - bCatPrefix;
    
    // Then by name length (shorter names first for tighter matches)
    return aName.length - bName.length;
  });

  // Build dropdown HTML with highlighted matches
  const html = matches.map(product => {
    const productName = product.name || product.nameEnglish;
    const highlightedName = highlightSearchTerm(productName, searchTerm);
    
    return `
      <div class="search-dropdown-item" onclick="selectSearchResult('${product.id}')">
        <img src="${product.image}" alt="${productName}" class="search-result-image">
        <div class="search-result-info">
          <div class="search-result-name">${highlightedName}</div>
          <div class="search-result-category">${product.category || 'General'}</div>
          <div class="search-result-price">${formatCurrency(product.price, product.currency)}</div>
        </div>
      </div>
    `;
  }).join('');

  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
}

// Highlight search term in results
function highlightSearchTerm(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

// Handle navbar search with fixed positioning for dropdown
function handleNavbarSearchInput(input, dropdown) {
  const searchTerm = input.value.trim().toLowerCase();

  if (!searchTerm) {
    dropdown.style.display = 'none';
    return;
  }

  // Position dropdown below the input using fixed positioning
  const inputRect = input.getBoundingClientRect();
  dropdown.style.position = 'fixed';
  dropdown.style.top = (inputRect.bottom + 5) + 'px';
  dropdown.style.left = inputRect.left + 'px';
  dropdown.style.width = (inputRect.width + 80) + 'px'; // Add button width
  dropdown.style.maxWidth = '90vw';

  // PURE PROGRESSIVE MATCHING - Only prefix matches, no partial includes
  const matches = products.filter(product => {
    const name = (product.name || product.nameEnglish || '').toLowerCase();
    const brand = (product.brand || '').toLowerCase();
    const category = (product.category || '').toLowerCase();
    const sku = (product.sku || '').toLowerCase();
    
    // Check if ANY field STARTS with search term - progressive matching only
    return (
      name.startsWith(searchTerm) ||
      brand.startsWith(searchTerm) ||
      category.startsWith(searchTerm) ||
      sku.startsWith(searchTerm)
    );
  }).slice(0, 10);

  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="search-dropdown-item no-results">
        <div class="search-no-results">
          No products found for "${input.value}"
        </div>
      </div>
    `;
    dropdown.style.display = 'block';
    return;
  }

  // Sort matches: Name prefix > Category prefix > Name length
  matches.sort((a, b) => {
    const aName = (a.name || a.nameEnglish || '').toLowerCase();
    const bName = (b.name || b.nameEnglish || '').toLowerCase();
    const aCategory = (a.category || '').toLowerCase();
    const bCategory = (b.category || '').toLowerCase();
    
    // Prefix match in name gets highest priority (0 = match, 1 = no match)
    const aNamePrefix = aName.startsWith(searchTerm) ? 0 : 1;
    const bNamePrefix = bName.startsWith(searchTerm) ? 0 : 1;
    if (aNamePrefix !== bNamePrefix) return aNamePrefix - bNamePrefix;
    
    // Then prefix match in category
    const aCatPrefix = aCategory.startsWith(searchTerm) ? 0 : 1;
    const bCatPrefix = bCategory.startsWith(searchTerm) ? 0 : 1;
    if (aCatPrefix !== bCatPrefix) return aCatPrefix - bCatPrefix;
    
    // Then by name length (shorter names first for tighter matches)
    return aName.length - bName.length;
  });

  // Build dropdown HTML with highlighted matches
  const html = matches.map(product => {
    const productName = product.name || product.nameEnglish;
    const highlightedName = highlightSearchTerm(productName, searchTerm);
    
    return `
      <div class="search-dropdown-item" onclick="selectSearchResult('${product.id}')">
        <img src="${product.image}" alt="${productName}" class="search-result-image">
        <div class="search-result-info">
          <div class="search-result-name">${highlightedName}</div>
          <div class="search-result-category">${product.category || 'General'}</div>
          <div class="search-result-price">${formatCurrency(product.price, product.currency)}</div>
        </div>
      </div>
    `;
  }).join('');

  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
}

function selectSearchResult(productId) {
  const product = products.find(p => p.id === parseInt(productId));
  if (product) {
    window.location.href = `product-details.html?id=${product.id}`;
  }
}

/* =============================================================
   NAVBAR SEARCH
   ============================================================= */

function initializeNavbarSearch() {
  const navbarSearchIcon = document.querySelector('[data-navbar-search-toggle]');
  
  if (!navbarSearchIcon) return;

  let searchVisible = false;

  navbarSearchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    const navbar = document.querySelector('.navbar');
    const searchInput = document.querySelector('.navbar-search-input');

    if (!searchVisible) {
      // Show search
      if (!navbar.querySelector('.navbar-search-wrapper')) {
        createNavbarSearchInput(navbar);
      }
      
      const wrapper = navbar.querySelector('.navbar-search-wrapper');
      wrapper.style.display = 'flex';
      wrapper.querySelector('input').focus();
      searchVisible = true;
    } else {
      // Hide search
      const wrapper = navbar.querySelector('.navbar-search-wrapper');
      if (wrapper) {
        wrapper.style.display = 'none';
      }
      searchVisible = false;
    }
  });
}

function createNavbarSearchInput(navbar) {
  const wrapper = document.createElement('div');
  wrapper.className = 'navbar-search-wrapper';
  
  wrapper.innerHTML = `
    <input 
      type="text" 
      class="navbar-search-input" 
      placeholder="Search products..."
      data-search-dropdown
    >
    <button class="navbar-search-btn" onclick="performNavbarSearch()">
      Search
    </button>
  `;

  // Insert before navbar icons
  const navbarIcons = navbar.querySelector('.navbar-icons');
  if (navbarIcons) {
    navbarIcons.parentNode.insertBefore(wrapper, navbarIcons);
  }

  // Initialize dropdown for navbar search
  const input = wrapper.querySelector('input');
  const dropdown = document.createElement('div');
  dropdown.className = 'search-dropdown navbar-search-dropdown';
  dropdown.style.display = 'none';
  document.body.appendChild(dropdown);

  input.addEventListener('input', function(e) {
    handleNavbarSearchInput(this, dropdown);
  });

  input.addEventListener('focus', function() {
    if (this.value.trim()) {
      handleNavbarSearchInput(this, dropdown);
    }
  });

  document.addEventListener('click', function(e) {
    if (!wrapper.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
}

function performNavbarSearch() {
  const searchInput = document.querySelector('.navbar-search-input');
  if (!searchInput || !searchInput.value.trim()) {
    alert('Please enter a search term');
    return;
  }

  const searchTerm = encodeURIComponent(searchInput.value.trim());
  window.location.href = `products.html?search=${searchTerm}`;
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Search initialization
});
