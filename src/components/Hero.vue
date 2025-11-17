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
            We craft cutting-edge digital experiences with AI-powered solutions, 
            scalable cloud infrastructure, and innovative web technologies. 
            Transform your business with next-generation software.
          </p>
          
          <!-- CTA Buttons -->
          <div class="d-flex gap-3 flex-wrap hero-buttons mb-5">
            <a href="#contact" class="btn btn-custom shadow-lg">
              <span class="btn-text">Start Your Project</span>
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
          
          <!-- Stats Counter -->
          <div class="stats-row">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Client Satisfaction</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support Available</div>
            </div>
          </div>
        </div>
        
        <!-- Right Side - 3D Visual Elements -->
        <div class="col-lg-6 hero-visual-container">
          <div class="visual-wrapper">
            <!-- Floating Cards with Glassmorphism -->
            <div class="floating-card card-1">
              <div class="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-title">Web Development</div>
                <div class="card-status">
                  <div class="status-dot"></div>
                  <span>Active</span>
                </div>
              </div>
            </div>
            
            <div class="floating-card card-2">
              <div class="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-title">Cloud Solutions</div>
                <div class="card-status">
                  <div class="status-dot"></div>
                  <span>Deploying</span>
                </div>
              </div>
            </div>
            
            <div class="floating-card card-3">
              <div class="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-title">AI Integration</div>
                <div class="card-status">
                  <div class="status-dot"></div>
                  <span>Processing</span>
                </div>
              </div>
            </div>
            
            <!-- Central 3D Element -->
            <div class="central-visual">
              <div class="cube-container">
                <div class="cube">
                  <div class="cube-face front"></div>
                  <div class="cube-face back"></div>
                  <div class="cube-face right"></div>
                  <div class="cube-face left"></div>
                  <div class="cube-face top"></div>
                  <div class="cube-face bottom"></div>
                </div>
              </div>
              
              <!-- Orbiting Elements -->
              <div class="orbit-ring">
                <div class="orbit-item orbit-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="orbit-item orbit-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
                  </svg>
                </div>
                <div class="orbit-item orbit-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Tech Stack Badges -->
            <div class="tech-badge badge-1">
              <span class="tech-logo">⚡</span>
              <span class="tech-name">React</span>
            </div>
            <div class="tech-badge badge-2">
              <span class="tech-logo">🔷</span>
              <span class="tech-name">Node.js</span>
            </div>
            <div class="tech-badge badge-3">
              <span class="tech-logo">🎯</span>
              <span class="tech-name">Python</span>
            </div>
            <div class="tech-badge badge-4">
              <span class="tech-logo">☁️</span>
              <span class="tech-name">AWS</span>
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
  font-size: 1.5rem;
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
  min-width: 250px;
  display: inline-block;
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
  font-size: 1.15rem;
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
  animation: fadeInRight 1.2s ease-out 0.6s both;
  position: relative;
  z-index: 2;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.visual-wrapper {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Glassmorphic Floating Cards */
.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: floatCard 4s ease-in-out infinite;
  transition: all 0.4s ease;
  cursor: pointer;
}

.floating-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 25px 70px rgba(79, 124, 130, 0.4);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.card-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #b8c5d6;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  left: -5%;
  animation-delay: 0s;
  width: 260px;
}

.card-2 {
  top: 50%;
  right: -5%;
  animation-delay: 1.5s;
  width: 260px;
}

.card-3 {
  bottom: 10%;
  left: 10%;
  animation-delay: 3s;
  width: 260px;
}

@keyframes floatCard {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Central 3D Visual Element */
.central-visual {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 3D Rotating Cube */
.cube-container {
  width: 150px;
  height: 150px;
  perspective: 1000px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 20s infinite linear;
}

@keyframes rotateCube {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.cube-face {
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(79, 124, 130, 0.1);
  border: 2px solid rgba(79, 124, 130, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}

.front {
  transform: rotateY(0deg) translateZ(75px);
  background: linear-gradient(135deg, rgba(79, 124, 130, 0.2), rgba(106, 156, 163, 0.2));
}

.back {
  transform: rotateY(180deg) translateZ(75px);
  background: linear-gradient(135deg, rgba(106, 156, 163, 0.2), rgba(133, 177, 184, 0.2));
}

.right {
  transform: rotateY(90deg) translateZ(75px);
  background: linear-gradient(135deg, rgba(58, 101, 112, 0.2), rgba(79, 124, 130, 0.2));
}

.left {
  transform: rotateY(-90deg) translateZ(75px);
  background: linear-gradient(135deg, rgba(90, 140, 148, 0.2), rgba(106, 156, 163, 0.2));
}

.top {
  transform: rotateX(90deg) translateZ(75px);
  background: linear-gradient(135deg, rgba(79, 209, 197, 0.2), rgba(79, 124, 130, 0.2));
}

.bottom {
  transform: rotateX(-90deg) translateZ(75px);
  background: linear-gradient(135deg, rgba(79, 124, 130, 0.2), rgba(58, 101, 112, 0.2));
}

/* Orbit Ring with Icons */
.orbit-ring {
  position: absolute;
  width: 400px;
  height: 400px;
  border: 2px dashed rgba(79, 124, 130, 0.3);
  border-radius: 50%;
  animation: rotateOrbit 30s linear infinite;
}

@keyframes rotateOrbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.orbit-item {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(79, 124, 130, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(79, 124, 130, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #85b1b8;
  animation: counterRotate 30s linear infinite;
  box-shadow: 0 10px 30px rgba(79, 124, 130, 0.3);
}

@keyframes counterRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.orbit-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.orbit-2 {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.orbit-3 {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* Tech Stack Badges */
.tech-badge {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.25rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  animation: floatBadge 3s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px) scale(1.1);
}

.tech-logo {
  font-size: 1.3rem;
}

.tech-name {
  font-size: 0.9rem;
}

.badge-1 {
  top: 5%;
  left: 5%;
  animation-delay: 0s;
}

.badge-2 {
  top: 15%;
  right: 5%;
  animation-delay: 0.7s;
}

.badge-3 {
  bottom: 20%;
  left: 0%;
  animation-delay: 1.4s;
}

.badge-4 {
  bottom: 5%;
  right: 10%;
  animation-delay: 2.1s;
}

@keyframes floatBadge {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
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
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
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
  
  .tech-badge {
    position: relative;
    margin: 0.5rem;
  }
  
  .badge-1, .badge-2, .badge-3, .badge-4 {
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
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

