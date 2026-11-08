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

// Comprehensive Gallery & Lightbox Logic
let currentGalleryIndex = 0;
let visibleGalleryItems = [];

function updateVisibleGalleryItems() {
  const allCards = Array.from(document.querySelectorAll("#galleryGrid .gallery-card"));
  visibleGalleryItems = allCards.filter(card => !card.classList.contains("hidden"));
  if (visibleGalleryItems.length === 0) {
    visibleGalleryItems = allCards;
  }
}

function filterGallery(category, btn) {
  document.querySelectorAll(".gallery-filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const cards = document.querySelectorAll("#galleryGrid .gallery-card");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
  updateVisibleGalleryItems();
}

function openGalleryItem(index) {
  const cards = Array.from(document.querySelectorAll("#galleryGrid .gallery-card"));
  if (!cards[index]) return;
  
  updateVisibleGalleryItems();
  const targetCard = cards[index];
  currentGalleryIndex = visibleGalleryItems.indexOf(targetCard);
  if (currentGalleryIndex === -1) {
    currentGalleryIndex = 0;
  }
  showLightboxForCard(visibleGalleryItems[currentGalleryIndex]);
}

function showLightboxForCard(card) {
  if (!card) return;
  const imgEl = card.querySelector(".gallery-thumb");
  const titleEl = card.querySelector(".gallery-caption b");
  const descEl = card.querySelector(".gallery-caption small");
  
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const t = document.getElementById("lightboxTitle");
  const d = document.getElementById("lightboxDesc");
  const counter = document.getElementById("lightboxCounter");

  if (img && imgEl) img.src = imgEl.src;
  if (t && titleEl) t.textContent = titleEl.textContent;
  if (d && descEl) d.textContent = descEl.textContent;
  if (counter) {
    counter.textContent = `${currentGalleryIndex + 1} / ${visibleGalleryItems.length}`;
  }

  lb.classList.add("active");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function changeLightboxItem(delta) {
  if (visibleGalleryItems.length === 0) updateVisibleGalleryItems();
  if (visibleGalleryItems.length === 0) return;

  currentGalleryIndex = (currentGalleryIndex + delta + visibleGalleryItems.length) % visibleGalleryItems.length;
  showLightboxForCard(visibleGalleryItems[currentGalleryIndex]);
}

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
  if (!lb) return;
  lb.classList.remove("active");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

// Keyboard support: Close with Escape, Navigate with Arrow Left / Right
document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (lb && lb.classList.contains("active")) {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      changeLightboxItem(-1);
    } else if (e.key === "ArrowRight") {
      changeLightboxItem(1);
    }
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

