import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import { initThemeToggle } from './components/ThemeToggle.js';


// Modern Presentation Slide Deck State variables
let activeSectionIndex = 0;
const sectionIds = ['home', 'skills', 'projects', 'contact'];
const numSections = sectionIds.length;

// Strict Scroll Snapping Deck Config
const PHYSICS = {
  cardTriggerDelta: 50,        // Cumulative slow scroll pixels to trigger a card slide
  cardScrollCooldown: 250,     // Snapping cooldown in milliseconds to allow rapid successive card scrolling
  cardEasingSpeed: 0.14        // Easing speed for programmatic transition (increased from 0.085 for crispness)
};

// Physics Engine State
let y = 0;                 // Current position (pixels)
let targetSnapY = null;     // Target lock position (pixels)
let wheelIdleTimeout = null;
let lastTransitionTime = 0; // Timestamp of the last programmatic transition start

// Card Deck State
let slowScrollDelta = 0;   // Cumulative slow scroll accumulator

// Start the continuous physics simulation loop immediately
startPhysicsLoop();

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mount Components to DOM Elements
  document.getElementById('site-header').innerHTML = Header();
  document.getElementById('home').innerHTML = Hero();
  document.getElementById('skills').innerHTML = Skills();
  document.getElementById('projects').innerHTML = Projects();
  document.getElementById('contact').innerHTML = Contact();

  // 2. Initialize Interactive Functions — theme first to avoid flash
  initThemeToggle();
  initMobileMenu();
  initSmoothScroll();
  initScrollIndicator();
  initProjectLightbox();

  // 3. Handle initial hash routing
  const hash = window.location.hash;
  if (hash) {
    const targetIndex = sectionIds.indexOf(hash.replace('#', ''));
    if (targetIndex !== -1) {
      goToSection(targetIndex);
      // Fast-forward initial scroll position to prevent slide-in transition on page load
      y = activeSectionIndex * window.innerHeight;
      targetSnapY = null;
      const main = document.getElementById('site-main');
      if (main) {
        main.style.transform = `translateY(-${y}px)`;
      }
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

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('active');
      });
    });
  }
}

/**
 * Custom smooth scroll overrides for navigation links and CTAs
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetIndex = sectionIds.indexOf(targetId.replace('#', ''));
      if (targetIndex !== -1) {
        goToSection(targetIndex);
      }
    });
  });
}



/**
 * Custom High-Performance Presentation Slide Transition Controller
 * Hooks directly to physical trackpads, scroll wheels, touch events, and keyboard keys
 */
function initScrollIndicator() {
  const arrowTop = document.getElementById('scroll-arrow-top');
  const arrowBottom = document.getElementById('scroll-arrow-bottom');
  if (!arrowTop && !arrowBottom) return;

  // 1. Physics Scroll & Swipe Force Injection
  window.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 1024) return; // Allow natural browser scrolling on mobile/tablet
    e.preventDefault();

    // Prevent double-triggering during the initial snap phase (cooldown)
    const now = Date.now();
    if (targetSnapY !== null && (now - lastTransitionTime) < PHYSICS.cardScrollCooldown) {
      return;
    }

    if (wheelIdleTimeout) clearTimeout(wheelIdleTimeout);

    const delta = e.deltaY;
    slowScrollDelta += delta;

    if (Math.abs(slowScrollDelta) > PHYSICS.cardTriggerDelta) {
      const direction = Math.sign(slowScrollDelta);
      const targetIndex = Math.max(0, Math.min(activeSectionIndex + direction, numSections - 1));
      
      if (targetIndex !== activeSectionIndex) {
        goToSection(targetIndex);
      }
      slowScrollDelta = 0; // Reset accumulator
    }

    // Reset slow accumulator when scroll gestures stop
    wheelIdleTimeout = setTimeout(() => {
      slowScrollDelta = 0;
    }, 200);
  }, { passive: false }); // MUST be passive: false to allow e.preventDefault()!

  // 2. Mobile Swipe Gesture Snapping
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    if (window.innerWidth <= 1024) return; // Allow natural touch swiping on mobile/tablet
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (window.innerWidth <= 1024) return; // Allow natural touch swiping on mobile/tablet
    const touchEndY = e.touches[0].clientY;
    const diffY = touchStartY - touchEndY;

    // Trigger slide transition if swipe exceeds 50px threshold
    if (Math.abs(diffY) > 50) {
      const direction = diffY > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(activeSectionIndex + direction, numSections - 1));
      if (nextIndex !== activeSectionIndex) {
        goToSection(nextIndex);
      }
      touchStartY = touchEndY; // Reset swipe baseline
    }
  }, { passive: true });

  // 3. Accessibility Keyboard Snapping
  window.addEventListener('keydown', (e) => {
    if (window.innerWidth <= 1024) return; // Allow natural key navigation on mobile/tablet
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      goToSection(activeSectionIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      goToSection(activeSectionIndex - 1);
    }
  });

  // 4. Update navbar highlight dynamically on manual mobile/tablet scroll
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 1024) return;
    const scrollPosition = window.scrollY + 100; // Offset for sticky navbar height

    for (let i = 0; i < sectionIds.length; i++) {
      const element = document.getElementById(sectionIds[i]);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          if (activeSectionIndex !== i) {
            activeSectionIndex = i;
            updateUIForSection(i);
          }
          break;
        }
      }
    }
  });

  // Make sure arrows are set correctly on initial load
  updateArrowsForIndex(0);
}

/**
 * Slide programmatically to a target section
 */
function goToSection(index) {
  if (index < 0 || index >= numSections) return;

  activeSectionIndex = index;
  lastTransitionTime = Date.now();
  
  updateUIForSection(activeSectionIndex);

  if (window.innerWidth <= 1024) {
    const element = document.getElementById(sectionIds[index]);
    if (element) {
      // Offset scrolling slightly to account for the sticky navbar
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    return;
  }

  const vh = window.innerHeight;
  targetSnapY = activeSectionIndex * vh;
}

/**
 * Recalculate coordinates and adjust views on browser window resize
 */
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1024) {
    const main = document.getElementById('site-main');
    if (main) {
      main.style.transform = 'none';
    }
    return;
  }
  
  // Reset scroll position when returning to desktop mode
  if (window.scrollY !== 0) {
    window.scrollTo(0, 0);
  }
  
  const vh = window.innerHeight;
  y = activeSectionIndex * vh;
  targetSnapY = null;
  const main = document.getElementById('site-main');
  if (main) {
    main.style.transform = `translateY(-${y}px)`;
  }
});

/**
 * Helper to update navbar indicators and arrow configurations
 */
function updateUIForSection(index) {
  // Toggle scrolled visual states on navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (index > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Update Header Nav Link Highlight states
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${sectionIds[index]}`) {
      link.classList.add('active');
    }
  });

  // Update dynamic Top & Bottom Arrow destinations
  updateArrowsForIndex(index);
}

/**
 * Helper to update dynamic arrow indicator href elements and visibility
 */
function updateArrowsForIndex(index) {
  const arrowTop = document.getElementById('scroll-arrow-top');
  const arrowBottom = document.getElementById('scroll-arrow-bottom');

  if (arrowTop && arrowBottom) {
    if (index === 0) {
      // Home: only bottom arrow
      arrowTop.classList.add('hidden');
      arrowBottom.classList.remove('hidden');
      arrowBottom.setAttribute('href', '#skills');
      arrowBottom.setAttribute('aria-label', 'Scroll down to Skills');
    } else if (index === 1) {
      // Skills: top and bottom
      arrowTop.classList.remove('hidden');
      arrowTop.setAttribute('href', '#home');
      arrowTop.setAttribute('aria-label', 'Scroll up to Home');

      arrowBottom.classList.remove('hidden');
      arrowBottom.setAttribute('href', '#projects');
      arrowBottom.setAttribute('aria-label', 'Scroll down to Projects');
    } else if (index === 2) {
      // Projects: top and bottom
      arrowTop.classList.remove('hidden');
      arrowTop.setAttribute('href', '#skills');
      arrowTop.setAttribute('aria-label', 'Scroll up to Skills');

      arrowBottom.classList.remove('hidden');
      arrowBottom.setAttribute('href', '#contact');
      arrowBottom.setAttribute('aria-label', 'Scroll down to Contact');
    } else if (index === 3) {
      // Contact: only top arrow
      arrowTop.classList.remove('hidden');
      arrowTop.setAttribute('href', '#projects');
      arrowTop.setAttribute('aria-label', 'Scroll up to Projects');

      arrowBottom.classList.add('hidden');
    }
  }
}

/**
 * Newtonian Physics Simulation Loop (60fps/120fps synchronized)
 * Combines mass momentum, friction damping, and mechanical bistable card snaps
 */
function startPhysicsLoop() {
  function animate() {
    if (window.innerWidth <= 1024) {
      const main = document.getElementById('site-main');
      if (main && main.style.transform !== 'none') {
        main.style.transform = 'none';
      }
      requestAnimationFrame(animate);
      return;
    }

    const vh = window.innerHeight;

    if (targetSnapY !== null) {
      // Smooth programmatic card transition ease
      const diff = targetSnapY - y;
      if (Math.abs(diff) > 0.5) {
        y += diff * PHYSICS.cardEasingSpeed;
      } else {
        y = targetSnapY;
        targetSnapY = null;
      }
    }

    // Apply the computed physics transform to the DOM viewport
    const main = document.getElementById('site-main');
    if (main) {
      main.style.transform = `translateY(-${y}px)`;
    }

    // Dynamic arrow indicator fade based on movement
    const isMoving = targetSnapY !== null;
    const arrowTop = document.getElementById('scroll-arrow-top');
    const arrowBottom = document.getElementById('scroll-arrow-bottom');

    if (isMoving) {
      if (arrowTop) arrowTop.classList.add('scrolling');
      if (arrowBottom) arrowBottom.classList.add('scrolling');
    } else {
      if (arrowTop) arrowTop.classList.remove('scrolling');
      if (arrowBottom) arrowBottom.classList.remove('scrolling');
    }

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/**
 * Fullscreen Project Preview Lightbox Modal Manager
 */
function initProjectLightbox() {
  const lightbox = document.getElementById('project-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  const projectImgs = document.querySelectorAll('.project-img');

  if (!lightbox || !lightboxImg) return;

  projectImgs.forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering document snaps
      const cleanSrc = img.src.split('?')[0]; // Strip cache bust parameters for full size
      lightboxImg.src = cleanSrc;
      lightbox.style.display = 'flex';
      
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  // Helper function to handle instant close
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.style.display = 'none';
  };

  // Clicking outside the image or on the close button closes the overlay
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });

  // Close lightbox on pressing Escape key (globally handles any image)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
