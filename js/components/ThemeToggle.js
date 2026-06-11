/**
 * Theme Toggle — light / dark mode dropdown
 *
 * Priority order:
 *  1. localStorage override ('theme-mode' = 'light' | 'dark' | 'auto')
 *  2. prefers-color-scheme (system default, auto-tracks when mode is 'auto')
 */
export function initThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  const arrowBtn = document.getElementById('theme-dropdown-arrow-btn');
  const menu = document.getElementById('theme-dropdown-menu');
  const wrapper = document.getElementById('theme-dropdown-wrapper');
  if (!btn || !arrowBtn || !menu || !wrapper) return;

  const root = document.documentElement;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');

  /* ── SVG icons ─────────────────────────────────────────────────── */
  const SUN_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
         viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2"  x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22"  x2="6.34" y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
      <line x1="2"  y1="12" x2="5"  y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66"/>
      <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"/>
    </svg>`;

  const MOON_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
         viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;

  const CHECK_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" 
         viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" stroke-width="3" 
         stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`;

  /* ── Theme resolution and application ──────────────────────────── */
  function getSystemTheme() {
    return mq.matches ? 'dark' : 'light';
  }

  function resolveAndApply() {
    // Legacy support: read old 'theme' key if exists, or use 'theme-mode'
    let mode = localStorage.getItem('theme-mode');
    if (!mode) {
      const legacy = localStorage.getItem('theme');
      if (legacy) {
        mode = legacy;
        localStorage.setItem('theme-mode', legacy);
        localStorage.removeItem('theme');
      } else {
        mode = 'auto';
      }
    }

    const resolvedTheme = mode === 'auto' ? getSystemTheme() : mode;
    
    // Apply dataset attribute to documentElement
    root.dataset.theme = resolvedTheme;
    
    // Update main icon button SVG (Sun if current resolved is dark, Moon if light)
    btn.innerHTML = resolvedTheme === 'dark' ? SUN_SVG : MOON_SVG;
    
    // Accessibility descriptions
    const label = resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);

    // Update Dropdown checkmarks
    document.querySelectorAll('.theme-dropdown-item').forEach(item => {
      const itemMode = item.getAttribute('data-theme-mode');
      const indicator = item.querySelector('.theme-item-indicator');
      if (itemMode === mode) {
        item.classList.add('active');
        if (indicator) indicator.innerHTML = CHECK_SVG;
      } else {
        item.classList.remove('active');
        if (indicator) indicator.innerHTML = '';
      }
    });
  }

  /* ── Dropdown Open / Close Actions ─────────────────────────────── */
  function toggleDropdown() {
    const isExpanded = arrowBtn.getAttribute('aria-expanded') === 'true';
    arrowBtn.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('active');
    menu.setAttribute('aria-hidden', isExpanded);
  }

  function closeDropdown() {
    arrowBtn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
  }

  /* ── Initialise ─────────────────────────────────────────────────── */
  resolveAndApply();

  /* ── Track OS changes ───────────────────────────────────────────── */
  mq.addEventListener('change', () => {
    const mode = localStorage.getItem('theme-mode') || 'auto';
    if (mode === 'auto') {
      resolveAndApply();
    }
  });

  /* ── Event Listeners ────────────────────────────────────────────── */
  
  // 1. Icon Button click toggles light/dark directly
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeDropdown();
    
    const currentResolved = root.dataset.theme;
    const nextTheme = currentResolved === 'dark' ? 'light' : 'dark';
    
    // Store direct choice
    localStorage.setItem('theme-mode', nextTheme);
    resolveAndApply();
  });

  // 2. Dropdown arrow button toggle click
  arrowBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // 3. Dropdown item clicks
  document.querySelectorAll('.theme-dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const mode = item.getAttribute('data-theme-mode');
      localStorage.setItem('theme-mode', mode);
      resolveAndApply();
      closeDropdown();
    });
  });

  // 4. Close dropdown on outside clicks
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      closeDropdown();
    }
  });

  // 5. Accessibility escape key to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });
}
