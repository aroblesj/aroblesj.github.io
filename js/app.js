import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import { initThemeToggle } from './components/ThemeToggle.js';

const sectionIds = ['home', 'skills', 'projects', 'contact'];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mount Components into section containers
  document.getElementById('site-header').innerHTML = Header();
  document.getElementById('home').innerHTML = Hero();
  document.getElementById('skills').innerHTML = Skills();
  document.getElementById('projects').innerHTML = Projects();
  document.getElementById('contact').innerHTML = Contact();

  // 2. Initialize Interactive Functions
  initThemeToggle();
  initMobileMenu();
  initNavTabSwitching();
  initSectionScrollNavigation();
  initProjectLightbox();
  initSkillsDashboard();

  // 3. Initial hash routing
  const hash = window.location.hash;
  if (hash) {
    const targetId = hash.replace('#', '');
    if (sectionIds.includes(targetId)) {
      switchSection(targetId);
    }
  }
});

/**
 * Mobile responsive menu drawer toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links-list');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggleBtn.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('active');
      });
    });
  }
}

/**
 * Header navigation section tab switching (Zero page scrolling)
 */
function initNavTabSwitching() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href').replace('#', '');
    if (sectionIds.includes(targetId)) {
      e.preventDefault();
      switchSection(targetId);
    }
  });
}

function switchSection(sectionId) {
  // Update section container visibility
  const sections = document.querySelectorAll('.section-container');
  sections.forEach(sec => {
    if (sec.id === sectionId) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });

  // Update header nav link active styling
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.classList.add('active');
    }
  });

  // Update URL hash without jumping/scrolling
  if (window.history.replaceState) {
    window.history.replaceState(null, '', `#${sectionId}`);
  }
}

/**
 * Fullscreen Project Preview Lightbox Modal Manager
 */
function initProjectLightbox() {
  const lightbox = document.getElementById('project-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const projectImgs = document.querySelectorAll('.project-img');

  if (!lightbox || !lightboxImg) return;

  projectImgs.forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const cleanSrc = img.src.split('?')[0];
      lightboxImg.src = cleanSrc;
      lightbox.style.display = 'flex';
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.style.display = 'none';
  };

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/**
 * Interactive Tabbed Dashboard Manager for the Skills Section
 */
function initSkillsDashboard() {
  const tabs = document.querySelectorAll('.skills-tab-btn');
  const panels = document.querySelectorAll('.skills-panel-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const targetTab = tab.getAttribute('data-tab');

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach(panel => {
        if (panel.id === `pane-${targetTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Wheel, Touch Swipe, and Keyboard Section Scroll Navigation
 * Allows user to scroll through 100vh sections seamlessly.
 */
function initSectionScrollNavigation() {
  let isNavigating = false;
  const cooldownDuration = 600; // Balanced cooldown for deliberate section scrolling

  const getCurrentSectionIndex = () => {
    const activeSection = document.querySelector('.section-container.active');
    if (!activeSection) return 0;
    const index = sectionIds.indexOf(activeSection.id);
    return index >= 0 ? index : 0;
  };

  const navigateToSectionIndex = (index) => {
    if (index < 0 || index >= sectionIds.length || isNavigating) return;
    isNavigating = true;
    switchSection(sectionIds[index]);

    setTimeout(() => {
      isNavigating = false;
    }, cooldownDuration);
  };

  // 1. Balanced Mouse wheel / Trackpad scroll switching
  window.addEventListener('wheel', (e) => {
    // Don't intercept if lightbox modal is open
    const lightbox = document.getElementById('project-lightbox');
    if (lightbox && lightbox.classList.contains('active')) return;

    if (Math.abs(e.deltaY) < 12 || isNavigating) return;

    const currentIndex = getCurrentSectionIndex();
    if (e.deltaY > 0) {
      // Scroll Down -> Next Section
      if (currentIndex < sectionIds.length - 1) {
        e.preventDefault();
        navigateToSectionIndex(currentIndex + 1);
      }
    } else {
      // Scroll Up -> Previous Section
      if (currentIndex > 0) {
        e.preventDefault();
        navigateToSectionIndex(currentIndex - 1);
      }
    }
  }, { passive: false });

  // 2. Keyboard Arrow Key Navigation (Down, Up, PageDown, PageUp, Space)
  window.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('project-lightbox');
    if (lightbox && lightbox.classList.contains('active')) return;

    const currentIndex = getCurrentSectionIndex();
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
      if (currentIndex < sectionIds.length - 1) {
        e.preventDefault();
        navigateToSectionIndex(currentIndex + 1);
      }
    } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
      if (currentIndex > 0) {
        e.preventDefault();
        navigateToSectionIndex(currentIndex - 1);
      }
    }
  });

  // 3. Mobile Touch Swipe Navigation
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const lightbox = document.getElementById('project-lightbox');
    if (lightbox && lightbox.classList.contains('active')) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffY) > 50 && !isNavigating) {
      const currentIndex = getCurrentSectionIndex();
      if (diffY > 0 && currentIndex < sectionIds.length - 1) {
        navigateToSectionIndex(currentIndex + 1);
      } else if (diffY < 0 && currentIndex > 0) {
        navigateToSectionIndex(currentIndex - 1);
      }
    }
  }, { passive: true });
}

