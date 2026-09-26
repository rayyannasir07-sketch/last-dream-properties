/*
  LAST DREAM PROPERTIES — SACRED JOURNEY (FAST, LIGHTWEIGHT, ZERO VIDEO LAG)
  Prophetic Hadiths & Sovereign Real Estate Axioms
  Features:
  - 100% Zero Video CPU/GPU overhead
  - Silky smooth 60fps transitions
  - Touch-swipe support for mobile devices
  - Auto-advance carousel with pause on hover/touch
  - Interactive previous/next buttons and direct jump dots
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

function initSacredJourneyExperience() {
  const container = document.getElementById('sacredSlogansContainer');
  const dotsContainer = document.getElementById('hudDotsContainer');
  const hudIndex = document.getElementById('hudCurrentIndex');
  const hudTotal = document.getElementById('hudTotalCount');
  const hudLocation = document.getElementById('hudCurrentLocation');
  const prevBtn = document.getElementById('sloganPrevBtn');
  const nextBtn = document.getElementById('sloganNextBtn');
  const wrapper = document.querySelector('.slogans-stage-wrapper') || document.getElementById('sacredJourneySection');

  if (!container) return;

  if (hudTotal) {
    hudTotal.textContent = String(sacredSlogans.length).padStart(2, '0');
  }

  // Render cards
  container.innerHTML = '';
  if (dotsContainer) dotsContainer.innerHTML = '';

  const cardElements = [];
  const dotElements = [];

  sacredSlogans.forEach((slogan, index) => {
    const card = document.createElement('div');
    card.className = `slogan-card ${index === 0 ? 'active' : ''}`;
    card.setAttribute('data-index', index);
    card.innerHTML = `
      <div class="slogan-card-inner">
        <div class="slogan-arabic-ornament">${slogan.arabic}</div>
        <div class="slogan-tag">${slogan.tag}</div>
        <div class="slogan-quote-text">${slogan.text}</div>
        <div class="slogan-reference">✧ ${slogan.ref} ✧</div>
      </div>
    `;
    container.appendChild(card);
    cardElements.push(card);

    if (dotsContainer) {
      const dot = document.createElement('button');
      dot.className = `hud-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('data-dot-index', index);
      dot.setAttribute('aria-label', `Navigate to axiom ${index + 1}`);
      dotsContainer.appendChild(dot);
      dotElements.push(dot);

      dot.addEventListener('click', () => {
        updateSlogan(index);
        restartAutoPlay();
      });
    }
  });

  let activeIdx = 0;
  const totalSlogans = sacredSlogans.length;
  let autoPlayTimer = null;

  function updateSlogan(index) {
    if (index < 0) index = totalSlogans - 1;
    if (index >= totalSlogans) index = 0;
    activeIdx = index;

    cardElements.forEach((card, i) => {
      if (i === activeIdx) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    if (hudIndex) {
      hudIndex.textContent = String(activeIdx + 1).padStart(2, '0');
    }
    if (hudLocation) {
      hudLocation.textContent = sacredSlogans[activeIdx].location;
    }

    dotElements.forEach((d, i) => {
      if (i === activeIdx) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      updateSlogan(activeIdx + 1);
    }, 5500);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Button listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      updateSlogan(activeIdx - 1);
      restartAutoPlay();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      updateSlogan(activeIdx + 1);
      restartAutoPlay();
    });
  }

  // Pause on hover
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    // Touch Swipe Support for Mobile & Tablets
    let touchStartX = 0;
    let touchStartY = 0;
    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      stopAutoPlay();
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          updateSlogan(activeIdx + 1);
        } else {
          updateSlogan(activeIdx - 1);
        }
      }
      startAutoPlay();
    }, { passive: true });
  }

  // Start initial rotation
  updateSlogan(0);
  startAutoPlay();
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initSacredJourneyExperience, 20);
});
