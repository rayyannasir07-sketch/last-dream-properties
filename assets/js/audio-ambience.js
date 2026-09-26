/*
  LAST DREAM PROPERTIES — LUXURY AMBIENT SOUND EXPERIENCE
  Uses Web Audio API to generate a subtle, meditative golden frequency drone
*/

class LuxuryAmbience {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Peaceful 432Hz harmonic chord (golden proportion)
    const baseFreq = 108; // Deep resonant root
    const ratios = [1, 1.5, 2, 2.667]; // Root, 5th, Octave, 4th

    this.oscillators = ratios.map((ratio, i) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(baseFreq * ratio, this.ctx.currentTime);

      // Subtle detune for rich warm resonance
      osc.detune.setValueAtTime((i % 2 === 0 ? 3 : -3) * (i + 1), this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.08 / (i + 1), this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      return osc;
    });

    // Fade in gracefully
    this.gainNode.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 3);
    this.isPlaying = true;
  }

  stop() {
    if (!this.ctx || !this.isPlaying) return;
    this.gainNode.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1600);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

window.luxuryAmbience = new LuxuryAmbience();
