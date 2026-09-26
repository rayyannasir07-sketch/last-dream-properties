/*
  LAST DREAM PROPERTIES — SACRED SCROLL VIDEO & SLOGANS EXPERIENCE (FAST & SMOOTH)
  Features:
  - Studio Freight Lenis Smooth Momentum Scrolling
  - Instantaneous 60FPS Video Scrubbing with zero delay
  - Rapid, responsive GSAP Timeline transitions for all 11 slogans
*/

const sacredSlogans = [
  {
    tag: "Sacred Heritage & Mountain of Love",
    arabic: "أُحُدٌ جَبَلٌ يُحِبُّنَا وَنُحِبُّهُ",
    text: "“Uhud is a mountain that loves us and we love it.”",
    ref: "Prophet Muhammad ﷺ — Sahih al-Bukhari & Muslim",
    location: "Al-Madinah Al-Munawwarah"
  },
  {
    tag: "Divine Attachment to the City of Light",
    arabic: "اللَّهُمَّ حَبِّبْ إِلَيْنَا الْمَدِينَةَ كَحُبِّنَا مَكَّةَ أَوْ أَشَدَّ",
    text: "The Prophet ﷺ asked Allah to place a deep love for Madinah in the hearts of believers.",
    ref: "Sahih al-Bukhari 1889",
    location: "Al-Madinah Al-Munawwarah"
  },
  {
    tag: "The Eternal Sanctity of Baqi'",
    arabic: "السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ",
    text: "The Prophet ﷺ visited Al-Baqi‘ and made dua for the believers who were buried there.",
    ref: "Sahih Muslim 974",
    location: "Adjacent to Masjid An-Nabawi"
  },
  {
    tag: "Wisdom of Timeless Wealth",
    arabic: "حِكْمَةُ الاسْتِثْمَارِ الْخَالِد",
    text: "“Don’t wait to buy real estate. Buy real estate and wait.”",
    ref: "Time-tested Real Estate Investment Axiom",
    location: "Sacred City Real Estate"
  },
  {
    tag: "Finite Earth, Boundless Value",
    arabic: "اشْتَرِ الأَرْضَ، فَلَنْ يَصْنَعُوا مِنْهَا مَزِيداً",
    text: "“Buy land, they’re not making it anymore.”",
    ref: "Principle of Sacred Scarcity",
    location: "Makkah & Madinah Golden Terrains"
  },
  {
    tag: "The City of Heavenly Protection",
    arabic: "عَلَى أَنْقَابِ الْمَدِينَةِ مَلَائِكَةٌ لا يَدْخُلُهَا الطَّاعُونُ وَلا الدَّجَّالُ",
    text: "The Prophet ﷺ said: “There are angels guarding the entrances of Madinah; neither plague nor Ad-Dajjal will be able to enter it.”",
    ref: "Sahih al-Bukhari 1879",
    location: "The Guarded Sanctuary"
  },
  {
    tag: "Spiritual & Material Elevation",
    arabic: "الْمَدِينَةُ.. حَيْثُ لِكُلِّ اسْتِثْمَارٍ مَعْنَى وَأَثَر",
    text: "“Madina, where every investment holds meaning.”",
    ref: "Last Dream Properties Philosophy",
    location: "Al-Madinah Al-Munawwarah"
  },
  {
    tag: "The Foundation of All Creation",
    arabic: "أَفْضَلُ اسْتِثْمَارٍ عَلَى وَجْهِ الأَرْضِ هُوَ الأَرْض",
    text: "“The best investment on Earth is earth.”",
    ref: "Sovereign Wealth Principles",
    location: "Kingdom of Saudi Arabia"
  },
  {
    tag: "Double Blessings of the Beloved City",
    arabic: "اللَّهُمَّ اجْعَلْ بِالْمَدِينَةِ ضِعْفَيْ مَا جَعَلْتَ بِمَكَّةَ مِنَ الْبَرَكَةِ",
    text: "The Prophet ﷺ prayed: “O Allah! Grant on Madinah twice the blessings You granted on Makkah.”",
    ref: "Sahih al-Bukhari 1885",
    location: "Al-Haramain Al-Sharifain"
  },
  {
    tag: "Sacred Eternal Resting Place",
    arabic: "مَنِ اسْتَطَاعَ أَنْ يَمُوتَ بِالْمَدِينَةِ فَلْيَمُتْ بِهَا فَإِنِّي أَشْفَعُ لِمَنْ يَمُوتُ بِهَا",
    text: "“Whoever is able to die in Madinah, then let him die there, for I will intercede for those who die there.”",
    ref: "Sunan al-Tirmidhi 3917",
    location: "Al-Madinah Al-Munawwarah"
  },
  {
    tag: "Crown of Islamic Civilization",
    arabic: "طَيْبَةُ الطَّيِّبَةُ.. مَدِينَةٌ لا نَظِيرَ لَهَا",
    text: "“Madina, a city beyond comparison.”",
    ref: "Sacred Realm Vision",
    location: "The City of the Messenger ﷺ"
  }
];

function initSmoothScrollAndVideoExperience() {
  const container = document.getElementById('sacredSlogansContainer');
  const dotsContainer = document.getElementById('hudDotsContainer');
  const hudIndex = document.getElementById('hudCurrentIndex');
  const hudTotal = document.getElementById('hudTotalCount');
  const hudLocation = document.getElementById('hudCurrentLocation');
  const video = document.getElementById('scrollExperienceVideo');

  if (!container || !video) return;

  // Ultra-smooth native video playback (ZERO seeking lag, pure 60fps)
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');
  video.setAttribute('autoplay', '');
  
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay fallback on user interaction
      const playOnInteract = () => {
        video.play().catch(() => {});
        window.removeEventListener('click', playOnInteract);
        window.removeEventListener('scroll', playOnInteract);
        window.removeEventListener('touchstart', playOnInteract);
      };
      window.addEventListener('click', playOnInteract, { once: true });
      window.addEventListener('scroll', playOnInteract, { once: true, passive: true });
      window.addEventListener('touchstart', playOnInteract, { once: true, passive: true });
    });
  }

  hudTotal.textContent = String(sacredSlogans.length).padStart(2, '0');

  // Render Slogan Cards
  container.innerHTML = '';
  dotsContainer.innerHTML = '';

  const cardElements = [];
  const dotElements = [];

  sacredSlogans.forEach((slogan, index) => {
    const card = document.createElement('div');
    card.className = `slogan-card ${index === 0 ? 'active' : ''}`;
    card.setAttribute('data-index', index);
    card.innerHTML = `
      <div class="slogan-arabic-ornament">${slogan.arabic}</div>
      <div class="slogan-tag">${slogan.tag}</div>
      <div class="slogan-quote-text">${slogan.text}</div>
      <div class="slogan-reference">✧ ${slogan.ref} ✧</div>
    `;
    container.appendChild(card);
    cardElements.push(card);

    const dot = document.createElement('div');
    dot.className = `hud-dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('data-dot-index', index);
    dot.setAttribute('title', `Go to slogan ${index + 1}`);
    dotsContainer.appendChild(dot);
    dotElements.push(dot);
  });

  // Add Left & Right Luxury Navigation Arrows
  const wrapper = document.querySelector('.scroll-video-pin-wrapper');
  if (wrapper && !document.getElementById('sloganPrevBtn')) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'slogan-nav-btn slogan-prev-btn';
    prevBtn.id = 'sloganPrevBtn';
    prevBtn.innerHTML = '‹';
    prevBtn.setAttribute('aria-label', 'Previous Slogan');

    const nextBtn = document.createElement('button');
    nextBtn.className = 'slogan-nav-btn slogan-next-btn';
    nextBtn.id = 'sloganNextBtn';
    nextBtn.innerHTML = '›';
    nextBtn.setAttribute('aria-label', 'Next Slogan');

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);
  }

  let activeIdx = 0;
  const totalSlogans = sacredSlogans.length;

  function updateSlogan(index) {
    if (index < 0) index = totalSlogans - 1;
    if (index >= totalSlogans) index = 0;
    activeIdx = index;

    cardElements.forEach((card, i) => {
      if (i === activeIdx) {
        card.classList.add('active');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
        card.style.pointerEvents = 'auto';
      } else {
        card.classList.remove('active');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.98)';
        card.style.pointerEvents = 'none';
      }
    });

    hudIndex.textContent = String(activeIdx + 1).padStart(2, '0');
    if (hudLocation) {
      hudLocation.textContent = sacredSlogans[activeIdx].location;
    }

    dotElements.forEach((d, i) => {
      if (i === activeIdx) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  // Interactive Buttons & Dot Listeners
  const prevBtn = document.getElementById('sloganPrevBtn');
  const nextBtn = document.getElementById('sloganNextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => updateSlogan(activeIdx - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlogan(activeIdx + 1));

  dotElements.forEach((dot, idx) => {
    dot.addEventListener('click', () => updateSlogan(idx));
  });

  const isMobile = window.innerWidth < 768;

  // On Mobile: ZERO PINNING (100% native smooth scroll + touch swipe & auto-rotation)
  if (isMobile) {
    // Touch swipe left/right for slogans
    let touchStartX = 0;
    let touchStartY = 0;
    if (wrapper) {
      wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      wrapper.addEventListener('touchend', (e) => {
        const diffX = touchStartX - e.changedTouches[0].clientX;
        const diffY = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) updateSlogan(activeIdx + 1);
          else updateSlogan(activeIdx - 1);
        }
      }, { passive: true });
    }

    // Auto-rotation every 4.5 seconds on mobile
    setInterval(() => {
      updateSlogan(activeIdx + 1);
    }, 4500);

  } else {
    // Desktop: Snappy GSAP ScrollTrigger without lag
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const distancePerSlogan = 160;
      const totalScrollDistance = totalSlogans * distancePerSlogan;

      gsap.timeline({
        scrollTrigger: {
          trigger: "#sacredJourneySection",
          start: "top top",
          end: `+=${totalScrollDistance}`,
          pin: true,
          scrub: 0.1,
          anticipatePin: 1,
          onUpdate: (self) => {
            let idx = Math.floor(self.progress * totalSlogans);
            if (idx >= totalSlogans) idx = totalSlogans - 1;
            if (idx !== activeIdx) {
              updateSlogan(idx);
            }
          }
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initSmoothScrollAndVideoExperience, 30);
});
