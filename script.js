// Mobile navigation toggle
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}


// Dark Mode Toggle Logic with LocalStorage
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  const icon = document.getElementById('themeIcon');
  const text = document.getElementById('themeText');
  if (isDark) {
    icon.textContent = '☀️';
    text.textContent = 'Light';
    localStorage.setItem('imcg_theme', 'dark');
  } else {
    icon.textContent = '🌙';
    text.textContent = 'Dark';
    localStorage.setItem('imcg_theme', 'light');
  }
}

// Load saved theme preference
(function initTheme() {
  const savedTheme = localStorage.getItem('imcg_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (icon) icon.textContent = '☀️';
    if (text) text.textContent = 'Light';
  }
})();

// FAQ Accordion Toggle Logic
function toggleFaq(card) {
  const wasOpen = card.classList.contains('open');
  // Optional: close other open FAQs
  document.querySelectorAll('.faq-card').forEach(c => c.classList.remove('open'));
  if (!wasOpen) {
    card.classList.add('open');
  }
}

// Lightbox modal functionality
function openLightbox(src, title, desc) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const t = document.getElementById("lightboxTitle");
  const d = document.getElementById("lightboxDesc");
  img.src = src;
  t.textContent = title;
  d.textContent = desc;
  lb.classList.add("active");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox(e) {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("active");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

// Keyboard support: Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// Form submission feedback
function handleFormSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById("formSuccess");
  successMsg.style.display = "block";
  document.getElementById("submissionForm").reset();
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 5000);
}

// Persistent Back to Top scroll listener
const floatingBtn = document.getElementById("backToTopFloating");
window.addEventListener("scroll", () => {
  if (floatingBtn) {
    if (window.scrollY > 350) {
      floatingBtn.classList.add("visible");
    } else {
      floatingBtn.classList.remove("visible");
    }
  }
});

