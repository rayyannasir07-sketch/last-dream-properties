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
  // Initialize Lenis Smooth Scroll with brisk response
  let lenisInstance = null;
  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    });

    lenisInstance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    window.lenis = lenisInstance;
  }

  const container = document.getElementById('sacredSlogansContainer');
  const dotsContainer = document.getElementById('hudDotsContainer');
  const hudIndex = document.getElementById('hudCurrentIndex');
  const hudTotal = document.getElementById('hudTotalCount');
  const hudLocation = document.getElementById('hudCurrentLocation');
  const video = document.getElementById('scrollExperienceVideo');

  if (!container || !video) return;

  video.muted = true;
  video.playsInline = true;

  hudTotal.textContent = String(sacredSlogans.length).padStart(2, '0');

  // Render Slogan Cards
  container.innerHTML = '';
  dotsContainer.innerHTML = '';

  const cardElements = [];
  const dotElements = [];

  sacredSlogans.forEach((slogan, index) => {
    // Slogan Card
    const card = document.createElement('div');
    card.className = 'slogan-card';
    card.setAttribute('data-index', index);
    card.innerHTML = `
      <div class="slogan-arabic-ornament">${slogan.arabic}</div>
      <div class="slogan-tag">${slogan.tag}</div>
      <div class="slogan-quote-text">${slogan.text}</div>
      <div class="slogan-reference">✧ ${slogan.ref} ✧</div>
    `;
    container.appendChild(card);
    cardElements.push(card);

    // Indicator Dot
    const dot = document.createElement('div');
    dot.className = `hud-dot ${index === 0 ? 'active' : ''}`;
    dotsContainer.appendChild(dot);
    dotElements.push(dot);
  });

  // Fast & Smooth Video Scrubbing Setup
  let targetProgress = 0;
  let currentProgress = 0;
  const lerpSpeed = 0.16; // Fast responsive tracking
  let isSeeking = false;
  let seekSafetyTimer = null;

  video.addEventListener('seeked', () => {
    isSeeking = false;
  });

  function smoothVideoLoop() {
    if (video.duration && !isNaN(video.duration)) {
      currentProgress += (targetProgress - currentProgress) * lerpSpeed;
      const targetTime = currentProgress * video.duration;

      if (!isSeeking && Math.abs(video.currentTime - targetTime) > 0.02) {
        isSeeking = true;
        video.currentTime = targetTime;
        clearTimeout(seekSafetyTimer);
        seekSafetyTimer = setTimeout(() => { isSeeking = false; }, 60);
      }
    }
    requestAnimationFrame(smoothVideoLoop);
  }

  requestAnimationFrame(smoothVideoLoop);

  // GSAP Master ScrollTrigger Timeline (Tuned for brisk, fluid tempo)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const totalSlogans = sacredSlogans.length;
    // 380px per slogan = responsive, zero dragging or delay
    const totalScrollDistance = totalSlogans * 380;

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sacredJourneySection",
        start: "top top",
        end: `+=${totalScrollDistance}`,
        pin: true,
        scrub: 0.4, // Snappy & direct
        anticipatePin: 1,
        onUpdate: (self) => {
          targetProgress = self.progress;

          let activeIdx = Math.floor(self.progress * totalSlogans);
          if (activeIdx >= totalSlogans) activeIdx = totalSlogans - 1;

          hudIndex.textContent = String(activeIdx + 1).padStart(2, '0');
          if (hudLocation) {
            hudLocation.textContent = sacredSlogans[activeIdx].location;
          }

          dotElements.forEach((d, i) => {
            if (i === activeIdx) {
              d.classList.add('active');
            } else {
              d.classList.remove('active');
            }
          });
        }
      }
    });

    const stepDuration = 1.6;
    const overlap = 0.35;

    cardElements.forEach((card, i) => {
      gsap.set(card, {
        opacity: i === 0 ? 1 : 0,
        y: i === 0 ? 0 : 40,
        scale: i === 0 ? 1 : 0.95,
        filter: i === 0 ? "blur(0px)" : "blur(8px)",
        pointerEvents: i === 0 ? "auto" : "none"
      });

      const startTime = i * (stepDuration - overlap);

      if (i > 0) {
        masterTl.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
          onStart: () => { card.style.pointerEvents = "auto"; }
        }, startTime);
      }

      masterTl.to(card, {
        scale: 1.02,
        duration: 0.5,
        ease: "none"
      }, startTime + (i === 0 ? 0 : 0.5));

      masterTl.to(card, {
        opacity: 0,
        y: -40,
        scale: 1.04,
        filter: "blur(8px)",
        duration: 0.45,
        ease: "power2.in",
        onComplete: () => { card.style.pointerEvents = "none"; }
      }, startTime + 1.0);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initSmoothScrollAndVideoExperience, 80);
});
