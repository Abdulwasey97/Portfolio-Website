<template>
  <section id="home" class="hero-section">
    <!-- Animated Particle Background -->
    <div class="hero-background">
      <div class="particles">
        <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    
    <div class="container position-relative">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-6 hero-content">
       
          <!-- Typing Animation Subtitle -->
          <div class="hero-subtitle mb-4">
            <span class="tech-stack">
              <span class="bracket">[</span>
              <span class="typing-text">{{ typedText }}</span>
              <span class="cursor">|</span>
              <span class="bracket">]</span>
            </span>
          </div>
          
          <!-- Description -->
          <p class="lead mb-5 hero-description">
            360° innovation—design, develop, deploy, scale
          </p>
          
          <!-- CTA Buttons -->
          <div class="d-flex gap-3 flex-wrap hero-buttons mb-5">
            <a href="#contact" class="btn btn-custom shadow-lg">
              <span class="btn-text">Get a Quote</span>
              <span class="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
            <a href="#projects" class="btn btn-outline-custom shadow">
              <span class="btn-text">View Our Work</span>
              <span class="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </span>
            </a>
          </div>       
        
        </div>
        
        <!-- Right Side - 3D Visual Elements -->
        <div class="col-lg-6 hero-visual-container">
          <div class="visual-wrapper">
            <!-- Holographic Systems Canvas -->
            <div class="holo-canvas">
              <div class="holo-core">
                <div class="core-glow"></div>
                <div class="core-shell"></div>
                <div class="core-pulse"></div>                
                <div class="core-grid"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
 
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const typedText = ref('');
const techStack = [
  'AI & Machine Learning',
  'Cloud Architecture',
  'Full-Stack Development',
  'DevOps & CI/CD',
  'Mobile Applications'
];
const orbitLabels = [
  'Cloud Mesh',
  'Zero Trust Layer',
  'Neural Insights'
];

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingInterval;

const typeEffect = () => {
  const currentWord = techStack[currentIndex];
  
  if (isDeleting) {
    typedText.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => { isDeleting = true; }, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % techStack.length;
  }
};

const getParticleStyle = (i) => {
  const random = (min, max) => Math.random() * (max - min) + min;
  return {
    left: `${random(0, 100)}%`,
    top: `${random(0, 100)}%`,
    animationDelay: `${random(0, 5)}s`,
    animationDuration: `${random(10, 20)}s`
  };
};

onMounted(() => {
  typingInterval = setInterval(typeEffect, 100);
});

onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval);
});
</script>

<style scoped>
/* Modern Tech Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0d1f23 0%, #1a3a3f 50%, #0f2428 100%);
  color: #ffffff;
}

/* Animated Background with Particles */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

/* Particles */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(79, 124, 130, 0.6);
  border-radius: 50%;
  animation: particleFloat 15s infinite ease-in-out;
  box-shadow: 0 0 10px rgba(79, 124, 130, 0.5);
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}

/* Grid Overlay */
.grid-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(79, 124, 130, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 124, 130, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Gradient Orbs */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  top: -15%;
  right: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #3a6570 0%, #4f7c82 100%);
  bottom: -15%;
  left: -10%;
  animation-delay: 7s;
}

.orb-3 {
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, #5a8c94 0%, #85b1b8 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -50px) scale(1.2);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

/* Content Animation */
.hero-content {
  animation: fadeInUp 1.2s ease-out;
  position: relative;
  z-index: 2;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Greeting Badge with Pulse */
.greeting-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(79, 124, 130, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(79, 124, 130, 0.4);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  color: #85b1b8;
  font-weight: 600;
  animation: slideInLeft 1s ease-out;
  box-shadow: 0 8px 32px rgba(79, 124, 130, 0.2);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 255, 136, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 136, 0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hero Title with Glitch Effect */
.hero-title {
  color: #ffffff;
  line-height: 1.2;
  animation: fadeInUp 1.2s ease-out 0.3s both;
  text-shadow: 0 0 30px rgba(79, 124, 130, 0.4);
}

.hero-title .line-1 {
  display: block;
  color: #85b1b8;
  font-size: 0.5em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 50%, #85b1b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 5s ease infinite;
  background-size: 200% 200%;
  position: relative;
  display: inline-block;
}

.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 50%, #85b1b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.8;
}

.glitch::before {
  animation: glitch 3s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}

.glitch::after {
  animation: glitch 2s infinite reverse;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}

@keyframes glitch {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
}

@keyframes gradientShift {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
}

/* Subtitle with Code-Style Typing */
.hero-subtitle {
  font-family: 'Courier New', monospace;
  color: #6a9ca3;
  font-size: 1.65rem;
  animation: fadeInUp 1.2s ease-out 0.6s both;
  min-height: 50px;
}

.tech-stack {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.bracket {
  color: #85b1b8;
  font-size: 1.8rem;
  font-weight: bold;
}

.typing-text {
  color: #4fd1c5;
  font-weight: 600;
  display: inline-block;
  white-space: nowrap;
}

.cursor {
  color: #fff;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  from, to { 
    opacity: 1; 
  }
  50% { 
    opacity: 0; 
  }
}

/* Description */
.hero-description {
  color: #b8c5d6;
  font-size: 1.55rem;
  line-height: 1.8;
  animation: fadeInUp 1.2s ease-out 0.9s both;
}

/* Modern Buttons */
.hero-buttons {
  animation: fadeInUp 1.2s ease-out 1.2s both;
}

.btn-custom,
.btn-outline-custom {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-custom {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  border: none;
  color: white;
  box-shadow: 0 10px 40px rgba(79, 124, 130, 0.4);
}

.btn-custom::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6a9ca3 0%, #85b1b8 100%);
  transition: left 0.4s ease;
  z-index: 0;
}

.btn-custom:hover::before {
  left: 0;
}

.btn-custom:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 50px rgba(79, 124, 130, 0.5);
}

.btn-text,
.btn-icon {
  position: relative;
  z-index: 1;
}

.btn-icon {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.btn-custom:hover .btn-icon {
  transform: translateX(5px);
}

.btn-outline-custom {
  background: rgba(79, 124, 130, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(79, 124, 130, 0.4);
  color: #85b1b8;
}

.btn-outline-custom:hover {
  background: rgba(79, 124, 130, 0.25);
  border-color: #6a9ca3;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 50px rgba(79, 124, 130, 0.4);
}

.btn-outline-custom:hover .btn-icon {
  transform: rotate(45deg);
}

/* Stats Row */
.stats-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  animation: fadeInUp 1.2s ease-out 1.5s both;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 50%, #85b1b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #b8c5d6;
  font-weight: 500;
}

.stat-divider {
  width: 2px;
  height: 50px;
  background: linear-gradient(to bottom, transparent, rgba(79, 124, 130, 0.4), transparent);
}

/* Visual Container - Right Side */
.hero-visual-container {
  animation: systemReveal 1.6s cubic-bezier(0.19, 1, 0.22, 1) 0.35s both;
  position: relative;
  z-index: 2;
}

@keyframes systemReveal {
  0% {
    opacity: 0;
    transform: perspective(800px) translate3d(80px, 40px, -120px) rotateX(12deg) rotateY(-10deg) scale(0.8);
    filter: blur(18px);
  }
  60% {
    opacity: 1;
    transform: perspective(800px) translate3d(-10px, -8px, 0) rotateX(-3deg) rotateY(6deg) scale(1.04);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: perspective(800px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
    filter: blur(0);
  }
}

.visual-wrapper {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Holographic Canvas */
.holo-canvas {
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  margin-left:100px;
}

.holo-core {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 209, 197, 0.35), rgba(12, 34, 39, 0.8));
  box-shadow: 0 0 80px rgba(79, 209, 197, 0.3),
    inset 0 0 40px rgba(79, 124, 130, 0.5);
  animation: corePulse 6s ease-in-out infinite;
}

.core-glow,
.core-shell,
.core-pulse,
.core-beam,
.core-grid {
  position: absolute;
  inset: 0;
  border-radius: 50%;
}

.core-shell {
  border: 1px solid rgba(133, 177, 184, 0.4);
  animation: ringRotate 18s linear infinite;
}

.core-glow {
  filter: blur(40px);
  background: radial-gradient(circle, rgba(79, 209, 197, 0.6), transparent 70%);
  opacity: 0.7;
}

.core-pulse {
  border: 2px solid rgba(79, 209, 197, 0.4);
  animation: pulse 4s ease-in-out infinite;
}

.core-beam {
  background: linear-gradient(180deg, rgba(133, 177, 184, 0.15), transparent);
  mask-image: radial-gradient(circle at top, rgba(255, 255, 255, 0.9), transparent 70%);
  animation: beamSweep 6s linear infinite;
}

.core-grid {
  background-image: linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 20px 20px;
  mask-image: radial-gradient(circle, white, transparent 65%);
  opacity: 0.3;
  animation: gridMove 12s linear infinite;
}

@keyframes corePulse {
  0%, 100% {
    transform: scale(0.98);
  }
  40% {
    transform: scale(1.05);
  }
}

/* Orbital Field */
.orbital-field {
  position: absolute;
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbital-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px dashed rgba(79, 124, 130, 0.3);
  border-radius: 50%;
  animation: ringRotate 14s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbital-ring:nth-child(2) {
  width: 320px;
  height: 320px;
  animation-duration: 10s;
}

.orbital-ring:nth-child(3) {
  width: 240px;
  height: 240px;
  animation-duration: 8s;
}

.ring-label {
  position: absolute;
  top: -18px;
  padding: 0.2rem 0.8rem;
  border-radius: 999px;
  background: rgba(7, 28, 32, 0.8);
  border: 1px solid rgba(79, 209, 197, 0.4);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #bfe9ee;
}

@keyframes ringRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Signal Columns */
.signal-columns {
  position: absolute;
  right: 4%;
  top: 15%;
  width: 160px;
  height: 70%;
  display: flex;
  align-items: flex-end;
  gap: 12px;
}

.signal-bar {
  flex: 1;
  display: block;
  background: linear-gradient(180deg, rgba(133, 177, 184, 0.05), rgba(79, 209, 197, 0.8));
  border-radius: 999px;
  box-shadow: 0 0 20px rgba(79, 209, 197, 0.4);
  animation: signalDance 3s ease-in-out infinite;
  opacity: 0.8;
}

@keyframes signalDance {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* Status Pills */
.status-pill-grid {
  position: absolute;
  left: -5%;
  bottom: 8%;
  width: 260px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
}

.status-pill {
  padding: 0.75rem 1rem;
  border-radius: 14px;
  background: rgba(7, 28, 32, 0.85);
  border: 1px solid rgba(79, 124, 130, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  animation: pillGlow 4s ease-in-out infinite;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.status-pill:nth-child(odd) {
  animation-delay: 0.4s;
}

.pill-label {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7eced3;
}

.pill-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f0feff;
}

@keyframes pillGlow {
  0%, 100% {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }
  50% {
    box-shadow: 0 12px 40px rgba(79, 209, 197, 0.35);
  }
}

/* Decorative Grid */
.holo-grid {
  position: absolute;
  inset: 10%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  opacity: 0.35;
}

.grid-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(133, 177, 184, 0.4);
  justify-self: center;
  align-self: center;
  animation: dotBlink 3s linear infinite;
}

.grid-dot:nth-child(odd) {
  animation-delay: 0.6s;
}

@keyframes dotBlink {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}

/* AI Diagnostics Stream */
.ai-diagnostics {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  mix-blend-mode: screen;
}

.diagnostic-lines {
  position: absolute;
  right: -30px;
  top: 10%;
  width: 140px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.diag-line {
  display: block;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(133, 177, 184, 0.2), rgba(79, 209, 197, 0.9), rgba(133, 177, 184, 0.2), transparent);
  animation: dataFlow 2.8s linear infinite;
  opacity: 0;
}

@keyframes dataFlow {
  0% {
    transform: translateX(80px) scaleX(0.2);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateX(-40px) scaleX(1.05);
    opacity: 0;
  }
}

.diagnostic-feed {
  position: absolute;
  right: -5%;
  bottom: 5%;
  width: 240px;
  padding: 1.25rem;
  background: rgba(7, 28, 32, 0.75);
  border: 1px solid rgba(79, 124, 130, 0.4);
  border-radius: 16px;
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  animation: feedReveal 0.8s ease-out 1s both;
}

@keyframes feedReveal {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.feed-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #dfe9f1;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.feed-row:last-child {
  margin-bottom: 0;
}

.feed-label {
  font-weight: 600;
  color: #7eced3;
}

.feed-bar {
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: rgba(133, 177, 184, 0.15);
  overflow: hidden;
  position: relative;
}

.feed-progress {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(79, 124, 130, 0), rgba(79, 209, 197, 1), rgba(133, 177, 184, 0));
  animation: feedPulse 2.6s ease-in-out infinite;
}

@keyframes feedPulse {
  0% {
    transform: translateX(-80%) scaleX(0.2);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateX(60%) scaleX(1);
    opacity: 0;
  }
}

.feed-value {
  font-weight: 700;
  color: #8ffff6;
}

.scan-beam {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 45%, rgba(79, 209, 197, 0.12) 50%, transparent 55%);
  animation: beamSweep 4s linear infinite;
}

@keyframes beamSweep {
  0% {
    transform: translateX(-100%) skewX(-5deg);
  }
  50% {
    transform: translateX(0) skewX(0deg);
  }
  100% {
    transform: translateX(100%) skewX(5deg);
  }
}

.badge-1 {
  top: 8%;
  left: 5%;
  animation-delay: 0s;
}

.badge-2 {
  top: 18%;
  right: 5%;
  animation-delay: 0.7s;
}

.badge-3 {
  bottom: 22%;
  left: 3%;
  animation-delay: 1.4s;
}

.badge-4 {
  bottom: 8%;
  right: 10%;
  animation-delay: 2.1s;
}

@keyframes floatBadge {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #85b1b8;
  animation: fadeInUp 1.2s ease-out 1.8s both;
  z-index: 2;
}

.mouse {
  width: 28px;
  height: 45px;
  border: 2px solid rgba(79, 124, 130, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
  animation: bounce 2s infinite;
  background: rgba(79, 124, 130, 0.1);
  backdrop-filter: blur(10px);
}

.wheel {
  width: 3px;
  height: 8px;
  background: #85b1b8;
  border-radius: 2px;
  animation: scroll 2s infinite;
  box-shadow: 0 0 10px rgba(79, 124, 130, 0.5);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(18px);
  }
}

.scroll-indicator .text {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #b8c5d6;
}

/* Responsive Design */
@media (max-width: 1199px) {
  .floating-card {
    width: 220px !important;
    padding: 1.25rem;
  }
  
  .card-icon {
    width: 45px;
    height: 45px;
  }
  
  .tech-badge {
    font-size: 0.75rem;
    padding: 0.45rem 0.85rem;
  }
  
  .tech-logo {
    font-size: 1rem;
  }
  
  .badge-1 {
    top: 4%;
    left: 4%;
  }
  
  .badge-2 {
    top: 14%;
    right: 4%;
  }
  
  .badge-3 {
    bottom: 18%;
    left: 2%;
  }
  
  .badge-4 {
    bottom: 4%;
    right: 8%;
  }
  
  .orbit-ring {
    width: 350px;
    height: 350px;
  }
  
  .central-visual {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 991px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-title .line-1 {
    font-size: 0.9rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .typing-text {
    min-width: 200px;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
  
  .hero-visual-container {
    margin-top: 4rem;
  }
  
  .visual-wrapper {
    min-height: 500px;
  }
  
  .floating-card {
    width: 200px !important;
    padding: 1rem;
    font-size: 0.85rem;
  }
  
  .card-1 {
    top: 5%;
    left: 5%;
  }
  
  .card-2 {
    top: 40%;
    right: 5%;
  }
  
  .card-3 {
    bottom: 5%;
    left: 15%;
  }
  
  .tech-badge {
    font-size: 0.7rem;
    padding: 0.4rem 0.75rem;
  }
  
  .tech-logo {
    font-size: 0.95rem;
  }
  
  .badge-1 {
    top: 3%;
    left: 3%;
  }
  
  .badge-2 {
    top: 13%;
    right: 3%;
  }
  
  .badge-3 {
    bottom: 16%;
    left: 2%;
  }
  
  .badge-4 {
    bottom: 3%;
    right: 6%;
  }
  
  .orbit-ring {
    width: 300px;
    height: 300px;
  }
  
  .central-visual {
    width: 200px;
    height: 200px;
  }
  
  .cube-container {
    width: 120px;
    height: 120px;
  }
  
  .cube-face {
    width: 120px;
    height: 120px;
  }
  
  .front, .back {
    transform: rotateY(0deg) translateZ(60px);
  }
  
  .right {
    transform: rotateY(90deg) translateZ(60px);
  }
  
  .left {
    transform: rotateY(-90deg) translateZ(60px);
  }
  
  .top {
    transform: rotateX(90deg) translateZ(60px);
  }
  
  .bottom {
    transform: rotateX(-90deg) translateZ(60px);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-title .line-1 {
    font-size: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .typing-text {
    min-width: 150px;
  }
  
  .bracket {
    font-size: 1.3rem;
  }
  
  .orb-1, .orb-2, .orb-3 {
    width: 300px;
    height: 300px;
  }
  
  .stats-row {
    gap: 1rem;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
  
  .stat-divider {
    height: 40px;
  }
  
  .visual-wrapper {
    min-height: 400px;
  }
  
  .floating-card {
    position: relative !important;
    width: 100% !important;
    max-width: 280px;
    margin: 1rem auto;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
  }
  
  .central-visual {
    display: none;
  }
  
  .visual-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1rem;
  }
  
  .tech-badges-container {
    position: relative !important;
    width: auto !important;
    height: auto !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 0;
    top: auto !important;
    left: auto !important;
  }
  
  .tech-badge {
    position: relative !important;
    margin: 0;
    display: inline-flex;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    font-size: 0.7rem;
    padding: 0.4rem 0.75rem;
    animation: floatBadgeMobile 3s ease-in-out infinite;
  }
  
  .tech-logo {
    font-size: 0.9rem;
  }
  
  .badge-1 {
    animation-delay: 0s;
  }
  
  .badge-2 {
    animation-delay: 0.7s;
  }
  
  .badge-3 {
    animation-delay: 1.4s;
  }
  
  .badge-4 {
    animation-delay: 2.1s;
  }
  
  @keyframes floatBadgeMobile {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
  }
  
  .scroll-indicator {
    display: none;
  }
  
  .particle {
    width: 2px;
    height: 2px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.75rem;
  }
  
  .greeting-badge {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  .btn-custom,
  .btn-outline-custom {
    padding: 0.85rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-buttons a {
    width: 100%;
    justify-content: center;
  }
}
</style>


