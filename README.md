# IMCG Korang Town, Islamabad — Web Portal

Official student-led web portal for **Islamabad Model College for Girls (IMCG), Korang Town, Islamabad**, operating under the **Federal Directorate of Education (FDE)** and affiliated with the **Federal Board of Intermediate and Secondary Education (FBISE)**.

---

## 🏛️ About the College

* **Location:** Korang Town, Islamabad, Pakistan
* **Leadership:** Dr. Munazza Faheem (Principal)
* **Education Model:** Double Shift System:
  * **Morning Shift:** College Section — HSSC / Intermediate (1st & 2nd Year)
    * *Disciplines:* Pre-Medical, Pre-Engineering, ICS (Computer Science), General Science, Humanities
  * **Evening Shift:** School Section — Classes 1 through 10
    * *Levels:* Primary, Middle, and Matriculation (Science & Arts)

---

## ✨ Features

* **Clean Responsive Architecture:** Fully decoupled structure separating HTML markup, CSS styling, and JavaScript logic.
* **Dual Theme Engine:** Dark / Light mode toggle with immediate state persistence via `localStorage`.
* **Mobile-First Navigation:** Responsive hamburger navigation drawer with smooth transitions and keyboard accessibility.
* **Interactive Campus Gallery:** High-resolution campus photo gallery with full-screen lightbox modal and Escape-key closure.
* **Shifts & Uniforms Guide:** Dedicated breakdown of morning/evening timings, assembly schedules, and seasonal uniform requirements.
* **Academic Directory:** Overview of school grades (1–10) and college intermediate streams.
* **FAQ Accordion:** Interactive collapsible FAQ section addressing admission criteria, shifts, and campus rules.
* **Feedback & Contact Form:** Front-end validated query form with auto-dismissing submission status.
* **Compact Back-to-Top Button:** Sleek, persistent floating button for effortless top-of-page navigation across desktop and mobile.

---

## 📁 Project Structure

```text
imcg-korang-town/
├── index.html          # Semantic HTML5 markup
├── style.css           # Complete styling, design system, responsive rules & dark theme
├── script.js           # Client-side JavaScript (theme, mobile menu, lightbox, FAQ, scroll)
├── README.md           # Documentation
└── images/             # Optimized web visual assets
    ├── campus_entrance_enhanced.webp    # Campus overview & main entrance
    ├── campus_entrance_zoomed.webp      # Entrance focus shot
    ├── campus_gate.webp                 # Formal entrance gate
    ├── college_building.jpeg            # Academic block exterior
    ├── college_gathering.jpeg           # Campus assembly & community view
    ├── crest.png                        # Official college insignia & favicon
    ├── principal_ceremony.jpeg          # Principal floral ceremony honors
    └── principal_office.jpeg            # Principal Dr. Munazza Faheem in office
```

---

## 🚀 Getting Started

No build tools, bundlers, or package managers are required.

### Quick Start:
1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/imcg-korang-town.git
   cd imcg-korang-town
   ```
2. Open `index.html` directly in any modern browser, or run a local lightweight HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000` in your web browser.

---

## 🎨 Design System

* **Primary Palette:**
  * Navy Blue: `#0e1b38` / Deep Navy: `#070e1e`
  * Academic Gold: `#d4af37` / Gold Light: `#e8cf82` / Gold Dark: `#b08d24`
  * Backgrounds: Cream `#f8fafc` (Light) / `#0a1120` (Dark)
* **Typography:**
  * Headings: *Playfair Display* (Serif)
  * Body Text: *DM Sans* (Sans-serif)

---

## 🌐 Browser Support

Compatible with all modern standards-compliant web browsers:
* Google Chrome (Desktop & Mobile)
* Mozilla Firefox
* Apple Safari (macOS & iOS)
* Microsoft Edge
