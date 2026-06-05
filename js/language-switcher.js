/* =============================================================
   LANGUAGE SWITCHER
   ============================================================= */

// Initialize language switcher on all pages
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguageSwitcher();
});

function initializeLanguageSwitcher() {
  const navbar = document.querySelector('.navbar-icons');
  
  if (!navbar) return;
  
  // Check if language switcher already exists
  if (navbar.querySelector('.language-switcher')) return;
  
  // Create language switcher
  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  
  const currentLang = localStorage.getItem('language') || 'ar';
  
  switcher.innerHTML = `
    <button class="lang-btn lang-ar ${currentLang === 'ar' ? 'active' : ''}" onclick="setLanguage('ar')" title="العربية">
      العربية
    </button>
    <span class="lang-divider">|</span>
    <button class="lang-btn lang-en ${currentLang === 'en' ? 'active' : ''}" onclick="setLanguage('en')" title="English">
      EN
    </button>
  `;
  
  // Insert at the beginning of navbar-icons (before search icon)
  navbar.insertBefore(switcher, navbar.firstChild);
}
