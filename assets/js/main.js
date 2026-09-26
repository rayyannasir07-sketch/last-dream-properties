/*
  LAST DREAM PROPERTIES — MAIN CLIENT CONTROLLER
  Makkah Al-Mukarramah & Al-Madinah Al-Munawwarah
*/

// ==========================================
// 1. PROPERTY DATABASE (8 CATEGORIES - NO PRICES)
// ==========================================
const propertiesData = [
  {
    id: "prop-1",
    category: "plots",
    city: "madinah",
    title: "Al-Baqi' Prime Residential Plot",
    arabicTitle: "أرض سكنية راقية بجوار البقيع",
    location: "Central Haram Zone, Madinah (350m to Prophet's Mosque)",
    image: "assets/images/plots.jpg",
    area: "1,200 sqm",
    type: "Freehold / Investment",
    distance: "350m to Haram",
    description: "Exceptional commercial-residential zoned land parcel situated within walking distance of Al-Masjid An-Nabawi. Rare opportunity with pre-approved building permit up to 14 floors suitable for luxury pilgrim hospitality suites.",
    features: ["Pre-approved 14-story permit", "Direct pedestrian access to Haram", "Underground parking clearance", "Full Sukuk Electronic Title Deed"]
  },
  {
    id: "prop-2",
    category: "villas",
    city: "madinah",
    title: "The Royal Uhud Oasis Palace",
    arabicTitle: "قصر واحة أحد الملكي",
    location: "Uhud Mountain Boulevard, Madinah",
    image: "assets/images/villas.jpg",
    area: "2,450 sqm",
    type: "Private Sanctuary",
    distance: "5 min to Mount Uhud",
    description: "An architectural masterpiece nestled against the timeless backdrop of Mount Uhud. Features private date palm courtyards, subterranean wellness spa, Olympic lap pool, and panoramic terraces overlooking the blessed horizon.",
    features: ["8 En-suite Royal Suites", "Private Date Palm Courtyard", "Smart Home Automation", "Private Security Quarters", "Direct Uhud Mountain Views"]
  },
  {
    id: "prop-3",
    category: "hotels",
    city: "makkah",
    title: "The Grand Kaaba Vista 5-Star Hotel",
    arabicTitle: "فندق برج إطلالة الكعبة ٥ نجوم",
    location: "Ibrahim Al-Khalil Street, Makkah",
    image: "assets/images/hotels.jpg",
    area: "14,800 sqm Built-up",
    type: "Commercial Hospitality",
    distance: "Direct Front-Row Haram View",
    description: "World-class 5-star hospitality tower with 260 luxury suites overlooking the Holy Kaaba and the Grand Mosque plaza. Fully operational with turnkey international hotel management and peak occupancy during Hajj & Ramadan.",
    features: ["260 Panoramic Pilgrim Suites", "Executive Haram-view Lounge", "2 Fine Dining Banquet Halls", "Direct Shuttle & VIP Escalator access"]
  },
  {
    id: "prop-4",
    category: "resorts",
    city: "madinah",
    title: "Quba Heritage Palm Resort",
    arabicTitle: "منتجع واحة قباء التراثي الفاخر",
    location: "Quba Avenue, Madinah Al-Munawwarah",
    image: "assets/images/resorts.jpg",
    area: "8,500 sqm",
    type: "Eco-Luxury Retreat",
    distance: "600m to Quba Mosque",
    description: "A serene desert oasis resort blending traditional Hijazi heritage architecture with 21st-century ultra-luxury amenities. Includes private pool villas, wellness pavilions, date orchards, and tranquil contemplation gardens.",
    features: ["24 Private Pool Villas", "Authentic Hijazi Architecture", "Date Palm Bio-Gardens", "Equestrian & Wellness Facilities"]
  },
  {
    id: "prop-5",
    category: "restaurants",
    city: "makkah",
    title: "The Clock Tower Sky Restaurant & Lounge",
    arabicTitle: "مطعم ومقهى أبراج الساعة البانورامي",
    location: "Abraj Al Bait (Royal Clock Tower), Makkah",
    image: "assets/images/restaurants.jpg",
    area: "980 sqm",
    type: "Prime Commercial Asset",
    distance: "Direct Overlook onto Kaaba",
    description: "Iconic commercial restaurant space atop the world's most recognizable holy tower. Unrivaled 360-degree panoramic views of the Kaaba and Mataf plaza. Prime footfall from global elite delegations year-round.",
    features: ["Michelin-grade Commercial Kitchen", "360-degree Glass Curtain Wall", "Turnkey Triple-Net Long-term Lease", "VIP Private Dining Suites"]
  },
  {
    id: "prop-6",
    category: "apartments",
    city: "makkah",
    title: "Jabal Omar Celestial Penthouse Suite",
    arabicTitle: "بنتهاوس جبل عمر الفاخر",
    location: "Jabal Omar Development, Makkah",
    image: "assets/images/apartments.jpg",
    area: "420 sqm",
    type: "Sky Residence",
    distance: "2 min Walk to Haram Piazza",
    description: "Duplex penthouse apartment featuring Italian marble finishes, bespoke Islamic latticework (mashrabiya), floor-to-ceiling soundproof glass, and an unobstructed frontal vista of the Sacred Kaaba.",
    features: ["4 Master Bedrooms", "Private Haram Audio Relay System", "Concierge & Valet Service", "Exclusive Resident Prayer Lounge"]
  },
  {
    id: "prop-7",
    category: "ready_buildings",
    city: "madinah",
    title: "King Fahd Central Commercial Tower",
    arabicTitle: "برج تجاري وسكني جاهز - طريق الملك فهد",
    location: "King Fahd Road, Madinah",
    image: "assets/images/ready_buildings.jpg",
    area: "7,200 sqm Built-up",
    type: "Turnkey Tower",
    distance: "800m to Prophet's Mosque",
    description: "Newly completed 16-story mixed-use building featuring 4 levels of retail, 10 levels of fully furnished serviced apartments for pilgrims, and 2 subterranean parking levels with high-speed Otis elevators.",
    features: ["16 Floors Completely Ready", "Civil Defense & Baladiya Approved", "Fully Tenanted with Corporate Guarantee", "Instant Cash-Flow Generation"]
  },
  {
    id: "prop-8",
    category: "rental",
    city: "madinah",
    title: "The Al-Noor Presidential Haram-View Suite",
    arabicTitle: "جناح النور الرئاسي للإيجار الموسمي",
    location: "Northern Central Area, Madinah",
    image: "assets/images/rental.jpg",
    area: "280 sqm",
    type: "Luxury Annual / Ramadan Rental",
    distance: "100m to Green Dome",
    description: "Prestigious residence available for seasonal or long-term lease. Breathtaking direct view of the Green Dome (Al-Qubbah Al-Khadra') and the Prophet's Mosque courtyards. Butler service and private chef upon request.",
    features: ["Direct View of Green Dome", "Full Daily Housekeeping & Concierge", "Private Dining & Meeting Room", "VIP Chauffeur Transfer from Madinah Airport"]
  }
];

let activeCategoryFilter = 'all';
let activeCityFilter = 'all';

// ==========================================
// 2. ROYAL PRELOADER (SUPER SNAPPY COUNT 01 TO 10)
// ==========================================
function initPreloader() {
  const preloader = document.getElementById('royalPreloader');
  const countDisplay = document.getElementById('loaderNumber');
  const progressBar = document.getElementById('loaderProgressBar');
  const statusDisplay = document.getElementById('loaderStatus');

  if (!preloader || !countDisplay) return;

  const statusMilestones = [
    "Initiating Royal Sanctuary Protocol...",
    "Connecting to Sacred Haramain Network...",
    "Mapping Makkah & Madinah Golden Terrains...",
    "Harmonizing Islamic Geometric Motifs...",
    "Authenticating REGA Saudi Real Estate Sukuk...",
    "Loading Holy City Vision 2030 Assets...",
    "Calibrating Cinematic Experience...",
    "Rendering Ultra-Luxury Portfolios...",
    "Refining Sacred Slogans...",
    "Welcome to Last Dream Properties"
  ];

  let currentCount = 1;
  const targetCount = 10;
  // Snappy 45ms per step = less than 0.5s total load, ZERO delay!
  const intervalTime = 45;

  const counterInterval = setInterval(() => {
    countDisplay.textContent = String(currentCount).padStart(2, '0');
    if (progressBar) progressBar.style.width = `${(currentCount / targetCount) * 100}%`;
    if (statusDisplay && statusMilestones[currentCount - 1]) {
      statusDisplay.textContent = statusMilestones[currentCount - 1];
    }

    if (currentCount >= targetCount) {
      clearInterval(counterInterval);
      setTimeout(() => {
        preloader.classList.add('loaded');
        document.body.classList.add('page-ready');
        animateHeroEntrance();
      }, 150);
    } else {
      currentCount++;
    }
  }, intervalTime);
}

// Hero Entrance Animation
function animateHeroEntrance() {
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-badge-wrap', { y: -20, opacity: 0, duration: 0.6, ease: "power2.out" });
    gsap.from('.hero-arabic-title', { y: 15, opacity: 0, duration: 0.7, delay: 0.1, ease: "power2.out" });
    gsap.from('.hero-main-title', { y: 20, opacity: 0, duration: 0.8, delay: 0.2, ease: "power2.out" });
    gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.7, delay: 0.3, ease: "power2.out" });
    gsap.from('.hero-cta-group', { y: 20, opacity: 0, duration: 0.6, delay: 0.4, ease: "power2.out" });
    gsap.from('.hero-holy-stats', { y: 25, opacity: 0, duration: 0.6, delay: 0.5, ease: "power2.out" });
  }
}

// ==========================================
// 3. PROPERTY RENDERING (WITHOUT PRICES)
// ==========================================
function renderProperties() {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;

  const filtered = propertiesData.filter(prop => {
    const matchCategory = activeCategoryFilter === 'all' || prop.category === activeCategoryFilter;
    const matchCity = activeCityFilter === 'all' || prop.city === activeCityFilter;
    return matchCategory && matchCity;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <p style="color: var(--accent-gold); font-size: 1.2rem; font-family: var(--font-serif); margin-bottom: 0.5rem;">No properties found in this category</p>
        <p style="color: var(--text-muted); font-size: 0.85rem;">Contact our VIP concierge for bespoke off-market listings in Makkah & Madinah.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prop => {
    const categoryName = prop.category.replace('_', ' ').toUpperCase();
    const cityLabel = prop.city === 'makkah' ? 'Makkah Al-Mukarramah' : 'Al-Madinah Al-Munawwarah';
    const waText = encodeURIComponent(`Assalamu Alaikum Last Dream Properties. I am interested in inquiring about ${prop.title} in ${cityLabel}. Please share full portfolio details and brochure.`);

    return `
      <article class="property-card" data-category="${prop.category}" data-city="${prop.city}">
        <div class="property-img-wrap">
          <img src="${prop.image}" alt="${prop.title}" class="property-img" loading="lazy">
          <span class="property-badge-city">${cityLabel}</span>
          <span class="property-badge-category">${categoryName}</span>
        </div>
        <div class="property-info-wrap">
          <div class="property-arabic-name">${prop.arabicTitle}</div>
          <h3 class="property-title">${prop.title}</h3>
          <div class="property-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${prop.location}</span>
          </div>
          <div class="property-specs">
            <div class="spec-item">
              <div class="spec-val">${prop.area}</div>
              <div class="spec-key">Total Area</div>
            </div>
            <div class="spec-item">
              <div class="spec-val">${prop.distance}</div>
              <div class="spec-key">Proximity</div>
            </div>
            <div class="spec-item">
              <div class="spec-val">${prop.type}</div>
              <div class="spec-key">Asset Class</div>
            </div>
          </div>
          <div class="property-card-actions" style="grid-template-columns: 1fr 1fr; margin-top: auto;">
            <button class="btn-card-details" onclick="openPropertyModal('${prop.id}')">
              View Details
            </button>
            <a href="https://wa.me/966505596237?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.776-.877-2.051-.977-.275-.1-.476-.15-.676.15-.2.301-.776.977-.951 1.177-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.175-.301-.019-.464.131-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.628-.926-2.232-.244-.588-.492-.508-.676-.518l-.577-.01c-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.2 2.12 3.238 5.136 4.542.717.31 1.277.496 1.714.635.72.228 1.376.196 1.895.118.579-.087 1.776-.726 2.026-1.428.251-.702.251-1.303.175-1.428-.075-.125-.276-.2-.577-.35zM12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.98.58 3.82 1.58 5.37L2 22l4.78-1.54c1.5 1.03 3.32 1.63 5.26 1.63 5.52 0 10.01-4.49 10.01-10.01C22.05 6.49 17.56 2 12.04 2z"/></svg>
              Inquire VIP
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Category and City Filter Listeners
function initFilters() {
  const categoryButtons = document.querySelectorAll('.filter-tab-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.getAttribute('data-filter');
      renderProperties();
    });
  });

  const cityPills = document.querySelectorAll('.city-filter-pill');
  cityPills.forEach(pill => {
    pill.addEventListener('click', () => {
      cityPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCityFilter = pill.getAttribute('data-city');
      renderProperties();
    });
  });
}

// ==========================================
// 4. PROPERTY DETAIL MODAL (NO PRICES)
// ==========================================
function openPropertyModal(propId) {
  const prop = propertiesData.find(p => p.id === propId);
  if (!prop) return;

  const modal = document.getElementById('propertyDetailModal');
  const modalImg = document.getElementById('modalPropertyImage');
  const modalArabic = document.getElementById('modalPropertyArabic');
  const modalTitle = document.getElementById('modalPropertyTitle');
  const modalLocation = document.getElementById('modalPropertyLocation');
  const modalDescription = document.getElementById('modalPropertyDesc');
  const modalFeatures = document.getElementById('modalPropertyFeatures');
  const modalSpecs = document.getElementById('modalPropertySpecsGrid');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');

  modalImg.src = prop.image;
  modalImg.alt = prop.title;
  modalArabic.textContent = prop.arabicTitle;
  modalTitle.textContent = prop.title;
  modalLocation.textContent = prop.location;
  modalDescription.textContent = prop.description;

  modalFeatures.innerHTML = prop.features.map(f => `
    <li style="margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.6rem; color: #E0E0E0;">
      <span style="color: var(--accent-gold);">✧</span> ${f}
    </li>
  `).join('');

  modalSpecs.innerHTML = `
    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-gold); text-align: center;">
      <div style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 700;">${prop.area}</div>
      <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Area</div>
    </div>
    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-gold); text-align: center;">
      <div style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 700;">${prop.distance}</div>
      <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Haram Proximity</div>
    </div>
    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-gold); text-align: center;">
      <div style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 700;">${prop.type}</div>
      <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Classification</div>
    </div>
  `;

  const waText = encodeURIComponent(`Assalamu Alaikum. I would like to schedule a private VIP consultation for ${prop.title} located at ${prop.location}.`);
  modalWhatsAppBtn.href = `https://wa.me/966505596237?text=${waText}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePropertyModal() {
  const modal = document.getElementById('propertyDetailModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 5. HEADER SCROLL & AUDIO CONTROLS
// ==========================================
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (window.luxuryAmbience) {
      const isPlaying = window.luxuryAmbience.toggle();
      if (isPlaying) {
        soundBtn.classList.add('active');
        soundBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        `;
      } else {
        soundBtn.classList.remove('active');
        soundBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        `;
      }
    }
  });
}

// ==========================================
// 6. GOLD PARTICLES CANVAS (DESKTOP ONLY FOR MAX PERFORMANCE)
// ==========================================
function initParticlesCanvas() {
  const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 768);
  const canvas = document.getElementById('particles-canvas');
  if (!canvas || isTouch) {
    if (canvas) canvas.style.display = 'none';
    return;
  }
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particleCount = 20;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.8,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.1,
      alpha: Math.random() * 0.4 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201, 164, 92, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// ==========================================
// 7. CUSTOM CURSOR (DESKTOP MOUSE ONLY)
// ==========================================
function initCustomCursor() {
  const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 992);
  const cursor = document.querySelector('.custom-cursor');
  const dot = document.querySelector('.custom-cursor-dot');
  if (!cursor || !dot || isTouch) {
    if (cursor) cursor.style.display = 'none';
    if (dot) dot.style.display = 'none';
    return;
  }

  window.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }, { passive: true });

  const interactives = document.querySelectorAll('a, button, input, select, textarea, .property-card, .filter-tab-btn');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// Copy Email Utility
function copyEmailAddress() {
  const email = "info@lastdreamproperties";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied: " + email);
  }).catch(() => {
    window.location.href = "mailto:" + email;
  });
}

window.copyEmailAddress = copyEmailAddress;
window.openPropertyModal = openPropertyModal;
window.closePropertyModal = closePropertyModal;

// Initialize All Components on Load
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  renderProperties();
  initFilters();
  initHeaderScroll();
  initSoundToggle();
  initParticlesCanvas();
  initCustomCursor();
});
