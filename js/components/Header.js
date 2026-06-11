export default function Header() {
  return `
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo-area">
          <div class="header-avatar-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="brand-logo-svg">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="var(--accent-violet)" />
                  <stop offset="100%" stop-color="var(--accent-cyan)" />
                </linearGradient>
              </defs>
              <path class="logo-frame" d="M50 8 L86 29 L86 71 L50 92 L14 71 L14 29 Z" fill="none" stroke="url(#logo-grad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path class="logo-frame-inner" d="M50 18 L77 34 L77 66 L50 82 L23 66 L23 34 Z" fill="none" stroke="url(#logo-grad)" stroke-width="1.5" opacity="0.35" stroke-linecap="round" stroke-linejoin="round" />
              <text x="50" y="60" class="logo-text" font-family="'Outfit', sans-serif" font-weight="700" font-size="28" fill="url(#logo-grad)" text-anchor="middle" letter-spacing="0.5">ARJ</text>
            </svg>
          </div>

          <a href="#home" class="logo" id="nav-logo">Adrian Robles Jr<span>.</span></a>
        </div>

        <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Nav links + theme toggle grouped flush on the right -->
        <div class="nav-right">
          <ul class="nav-links" id="nav-links-list">
            <li class="nav-item"><a href="#home" class="nav-link active" id="link-home">Home</a></li>
            <li class="nav-item"><a href="#skills" class="nav-link" id="link-skills">Skills</a></li>
            <li class="nav-item"><a href="#projects" class="nav-link" id="link-projects">Projects</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link" id="link-contact">Contact</a></li>
          </ul>

          <!-- Theme selection dropdown / toggle -->
          <div class="theme-dropdown-wrapper" id="theme-dropdown-wrapper">
            <div class="theme-toggle-group">
              <button class="theme-toggle-icon-btn" id="theme-toggle-btn" aria-label="Toggle theme"></button>
              <button class="theme-toggle-arrow-btn" id="theme-dropdown-arrow-btn" aria-label="Theme options" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="dropdown-chevron">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <div class="theme-dropdown-menu" id="theme-dropdown-menu" role="menu" aria-hidden="true">
              <button class="theme-dropdown-item" data-theme-mode="light" role="menuitem">
                <span class="theme-item-text">Light</span>
                <span class="theme-item-indicator"></span>
              </button>
              <button class="theme-dropdown-item" data-theme-mode="dark" role="menuitem">
                <span class="theme-item-text">Dark</span>
                <span class="theme-item-indicator"></span>
              </button>
              <button class="theme-dropdown-item" data-theme-mode="auto" role="menuitem">
                <span class="theme-item-text">Automatic</span>
                <span class="theme-item-indicator"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
}


