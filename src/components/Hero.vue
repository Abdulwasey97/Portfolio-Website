<template>
  <section id="home" class="hero-section">
    <!-- Animated Particle Background -->
    <div class="hero-background">
      <div class="particles">
        <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    
    <div class="container position-relative">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-6 hero-content">
          <!-- Main Title -->
          <h1 class="hero-title-main mb-4">
            <span class="title-line-1">Complete</span>
            <span class="title-line-2 gradient-text">360° Innovation</span>
            <span class="title-line-3">Solutions</span>
          </h1>
       
          <!-- Typing Animation Subtitle -->
          <div class="hero-subtitle mb-4">
            <span class="tech-stack">
              <span class="bracket">[</span>
              <span class="typing-text">{{ typedText }}</span>
              <span class="cursor">|</span>
              <span class="bracket">]</span>
            </span>
          </div>
          
          <!-- Animated Workflow Pipeline: Design → Develop → Deploy → Scale -->
          <div class="workflow-pipeline mb-5">
            <div class="workflow-container">
              <!-- Design Stage -->
              <div class="workflow-stage" data-stage="design">
                <div class="stage-node">
                  <div class="node-icon design-node">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div class="node-pulse"></div>
                </div>
                <div class="stage-label">
                  <span class="stage-title">Design</span>
                  <span class="stage-desc">Creative Vision</span>
                </div>
                <div class="stage-connector">
                  <div class="connector-line"></div>
                  <div class="connector-flow"></div>
                </div>
              </div>

              <!-- Develop Stage -->
              <div class="workflow-stage" data-stage="develop">
                <div class="stage-node">
                  <div class="node-icon develop-node">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div class="node-pulse"></div>
                </div>
                <div class="stage-label">
                  <span class="stage-title">Develop</span>
                  <span class="stage-desc">Build & Code</span>
                </div>
                <div class="stage-connector">
                  <div class="connector-line"></div>
                  <div class="connector-flow"></div>
                </div>
              </div>

              <!-- Deploy Stage -->
              <div class="workflow-stage" data-stage="deploy">
                <div class="stage-node">
                  <div class="node-icon deploy-node">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div class="node-pulse"></div>
                </div>
                <div class="stage-label">
                  <span class="stage-title">Deploy</span>
                  <span class="stage-desc">Launch Live</span>
                </div>
                <div class="stage-connector">
                  <div class="connector-line"></div>
                  <div class="connector-flow"></div>
                </div>
              </div>

              <!-- Scale Stage -->
              <div class="workflow-stage" data-stage="scale">
                <div class="stage-node">
                  <div class="node-icon scale-node">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                      <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                      <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div class="node-pulse"></div>
                </div>
                <div class="stage-label">
                  <span class="stage-title">Scale</span>
                  <span class="stage-desc">Grow & Optimize</span>
                </div>
              </div>
            </div>
          </div>
          
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
        <div class="col-lg-6 hero-visual-container d-none d-lg-block">
          <div class="visual-wrapper">
            <!-- Holographic Systems Canvas -->
            <div class="holo-canvas">
              <!-- 360 Innovation Circle Visual -->
              <div class="innovation-circle-wrapper">
                <div class="innovation-circle">
                  <div class="circle-ring ring-1"></div>
                  <div class="circle-ring ring-2"></div>
                  <div class="circle-ring ring-3"></div>
                  <div class="circle-center">
                    <span class="innovation-number">360°</span>
                    <span class="innovation-label">Innovation</span>
                  </div>
                </div>
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
 
  'WordPress Development',
  'AI & Machine Learning',
  'Cloud Architecture',
  'Full-Stack Development',
  'DevOps & CI/CD',
  'Custom Development',
  'E-commerce Solutions',
  'SEO & Digital Marketing',
  'UI/UX Design',
  'Database Management',
  'API Integration',
  'Performance Optimization',
  'Security & Compliance',
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

.orb-3 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #5a8c94 0%, #85b1b8 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 14s;
  opacity: 0.25;
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
  padding-left: 2rem;
  margin-top: 4rem;
}

/* 360 Innovation Circle */
.innovation-circle-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: fadeInUp 1.2s ease-out 0.2s both;
}

.holo-canvas .innovation-circle-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  width: auto;
  height: auto;
  pointer-events: none;
  animation: fadeInUpCentered 1.2s ease-out 0.2s both;
}

.holo-canvas .innovation-circle {
  pointer-events: auto;
}

.innovation-circle {
  position: relative;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  opacity: 0.6;
}

.ring-1 {
  width: 100%;
  height: 100%;
  border-color: rgba(79, 209, 197, 0.4);
  animation: rotate360 20s linear infinite;
  border-style: dashed;
}

.ring-2 {
  width: 85%;
  height: 85%;
  border-color: rgba(133, 177, 184, 0.5);
  animation: rotate360 15s linear infinite reverse;
  border-style: solid;
}

.ring-3 {
  width: 70%;
  height: 70%;
  border-color: rgba(79, 124, 130, 0.6);
  animation: rotate360 10s linear infinite;
  border-style: dotted;
}

.circle-center {
  position: relative;
  z-index: 1;
  text-align: center;
  background: radial-gradient(circle, rgba(79, 209, 197, 0.3), rgba(12, 34, 39, 0.9));
  border-radius: 50%;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(79, 209, 197, 0.5);
  box-shadow: 0 0 60px rgba(79, 209, 197, 0.6);
}

.innovation-number {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #4fd1c5 0%, #85b1b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.innovation-label {
  font-size: 0.75rem;
  color: #85b1b8;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-top: 0.3rem;
}

@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Main Hero Title */
.hero-title-main {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1.2s ease-out 0.4s both;
}

.title-line-1 {
  display: block;
  color: #b8c5d6;
  font-size: 0.5em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 0.3rem;
}

.title-line-2 {
  display: block;
  font-size: 1em;
  margin: 0.2rem 0;
}

.title-line-3 {
  display: block;
  color: #85b1b8;
  font-size: 0.45em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 0.3rem;
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

@keyframes fadeInUpCentered {
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 40px));
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
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

/* Animated Workflow Pipeline: Design → Develop → Deploy → Scale */
.workflow-pipeline {
  margin-bottom: 2rem;
  animation: fadeInUp 1.2s ease-out 0.7s both;
}

.workflow-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  position: relative;
}

.workflow-stage {
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.stage-node {
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.node-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(79, 209, 197, 0.15), rgba(79, 124, 130, 0.1));
  border: 2px solid rgba(79, 209, 197, 0.3);
  border-radius: 50%;
  color: #4fd1c5;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(79, 209, 197, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 2;
}

.node-icon svg {
  filter: drop-shadow(0 0 6px rgba(79, 209, 197, 0.4));
  transition: all 0.5s ease;
}

.node-pulse {
  position: absolute;
  inset: -8px;
  border: 2px solid rgba(79, 209, 197, 0.4);
  border-radius: 50%;
  opacity: 0;
  animation: nodePulse 2s ease-in-out infinite;
}

@keyframes nodePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
}

.workflow-stage:hover .node-icon {
  background: linear-gradient(135deg, rgba(79, 209, 197, 0.3), rgba(133, 177, 184, 0.2));
  border-color: rgba(79, 209, 197, 0.6);
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 30px rgba(79, 209, 197, 0.3),
              0 0 20px rgba(79, 209, 197, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.workflow-stage:hover .node-icon svg {
  filter: drop-shadow(0 0 12px rgba(79, 209, 197, 0.6));
  transform: scale(1.1);
}

.workflow-stage:hover .node-pulse {
  animation: nodePulseActive 1.5s ease-in-out infinite;
}

@keyframes nodePulseActive {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.3;
  }
}

.stage-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
}

.stage-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ffffff 0%, #b8c5d6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.4s ease;
}

.stage-desc {
  font-size: 0.75rem;
  color: rgba(79, 209, 197, 0.7);
  font-weight: 500;
  transition: all 0.4s ease;
}

.workflow-stage:hover .stage-title {
  background: linear-gradient(135deg, #4fd1c5 0%, #85b1b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: scale(1.05);
}

.workflow-stage:hover .stage-desc {
  color: rgba(79, 209, 197, 1);
  transform: translateY(-2px);
}

.stage-connector {
  position: absolute;
  top: 35px;
  left: calc(50% + 35px);
  width: calc(100% - 70px);
  height: 2px;
  z-index: 1;
  pointer-events: none;
}

.connector-line {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(79, 209, 197, 0.2) 0%, 
    rgba(79, 209, 197, 0.1) 50%, 
    rgba(79, 209, 197, 0.2) 100%
  );
  position: relative;
  overflow: hidden;
}

.connector-flow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(79, 209, 197, 0.6), 
    transparent
  );
  animation: flowAnimation 3s ease-in-out infinite;
}

@keyframes flowAnimation {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes flowAnimationVertical {
  0% {
    top: -100%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}

.workflow-stage:last-child .stage-connector {
  display: none;
}

/* Stage-specific colors */
.design-node {
  border-color: rgba(79, 209, 197, 0.3);
}

.develop-node {
  border-color: rgba(79, 209, 197, 0.3);
}

.deploy-node {
  border-color: rgba(79, 209, 197, 0.3);
}

.scale-node {
  border-color: rgba(79, 209, 197, 0.3);
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 209, 197, 0.35), rgba(12, 34, 39, 0.8));
  box-shadow: 0 0 80px rgba(79, 209, 197, 0.3),
    inset 0 0 40px rgba(79, 124, 130, 0.5);
  animation: corePulse 6s ease-in-out infinite;
  z-index: 1;
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
/* Extra Large Screens (1400px+) */
@media (min-width: 1400px) {
  .hero-content {
    padding-left: 3rem;
  }

  .hero-title-main {
    font-size: 4rem;
  }

  .hero-subtitle {
    font-size: 1.8rem;
  }

  .bracket {
    font-size: 2rem;
  }

  .workflow-stage {
    min-width: 140px;
  }

  .stage-node {
    width: 75px;
    height: 75px;
  }

  .node-icon svg {
    width: 30px;
    height: 30px;
  }

  .btn-custom,
  .btn-outline-custom {
    padding: 1.1rem 2.25rem;
    font-size: 1.05rem;
  }
}

@media (max-width: 1399px) and (min-width: 1200px) {
  .hero-content {
    padding-left: 2.5rem;
  }

  .hero-title-main {
    font-size: 3.25rem;
  }

  .hero-subtitle {
    font-size: 1.6rem;
  }
}

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

@media (min-width: 992px) and (max-width: 1200px) {
  .hero-content {
    padding-left: 1.5rem;
  }

  .hero-title-main {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }

  .title-line-1 {
    font-size: 0.48em;
    letter-spacing: 3px;
  }

  .title-line-3 {
    font-size: 0.42em;
    letter-spacing: 2.5px;
  }

  .hero-subtitle {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  .bracket {
    font-size: 1.6rem;
  }

  .typing-text {
    font-size: 1.4rem;
  }

  .workflow-pipeline {
    margin-bottom: 2rem;
  }

  .workflow-container {
    gap: 0.25rem;
    flex-wrap: nowrap;
  }

  .workflow-stage {
    min-width: auto;
    flex: 1;
    gap: 0.5rem;
  }

  .stage-node {
    width: 55px;
    height: 55px;
  }

  .node-icon svg {
    width: 20px;
    height: 20px;
  }

  .stage-title {
    font-size: 0.8rem;
  }

  .stage-desc {
    font-size: 0.65rem;
  }

  .stage-connector {
    top: 27.5px;
    left: calc(50% + 27.5px);
    width: calc(100% - 55px);
  }

  .hero-buttons {
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .btn-custom,
  .btn-outline-custom {
    padding: 0.9rem 1.75rem;
    font-size: 0.95rem;
  }

  .btn-icon svg {
    width: 18px;
    height: 18px;
  }

  .innovation-circle {
    width: 200px;
    height: 200px;
  }

  .circle-center {
    width: 140px;
    height: 140px;
  }

  .innovation-number {
    font-size: 2rem;
  }

  .innovation-label {
    font-size: 0.7rem;
  }
}

@media (max-width: 991px) {
  .hero-section .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .hero-content {
    padding-left: 0;
    text-align: center;
  }

  .hero-title-main {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }

  .title-line-1 {
    font-size: 0.45em;
    letter-spacing: 3px;
  }

  .title-line-3 {
    font-size: 0.4em;
    letter-spacing: 2.5px;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .bracket {
    font-size: 1.4rem;
  }

  .typing-text {
    font-size: 1.2rem;
    min-width: 200px;
  }

  .workflow-pipeline {
    margin-bottom: 2rem;
  }

  .workflow-container {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .workflow-stage {
    min-width: 100px;
    flex: 0 1 auto;
  }

  .stage-node {
    width: 60px;
    height: 60px;
  }

  .node-icon svg {
    width: 24px;
    height: 24px;
  }

  .stage-title {
    font-size: 0.9rem;
  }

  .stage-desc {
    font-size: 0.7rem;
  }

  .stage-connector {
    top: 30px;
    left: calc(50% + 30px);
    width: calc(100% - 60px);
  }

  .hero-buttons {
    margin-bottom: 2rem;
    gap: 0.75rem;
    justify-content: center;
  }

  .btn-custom,
  .btn-outline-custom {
    padding: 0.9rem 1.75rem;
    font-size: 0.95rem;
  }

  .btn-icon svg {
    width: 18px;
    height: 18px;
  }

  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-title .line-1 {
    font-size: 0.9rem;
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

  .innovation-circle-wrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .innovation-circle {
    width: 180px;
    height: 180px;
  }

  .circle-center {
    width: 120px;
    height: 120px;
  }

  .innovation-number {
    font-size: 2rem;
  }

  .innovation-label {
    font-size: 0.7rem;
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
  /* Center hero content and buttons on tablets and small screens */
  .hero-section .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .hero-content {
    text-align: center;
    align-items: center;
    padding-left: 0;
  }

  .innovation-circle-wrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .innovation-circle {
    width: 160px;
    height: 160px;
  }

  .circle-center {
    width: 110px;
    height: 110px;
  }

  .innovation-number {
    font-size: 1.8rem;
  }

  .innovation-label {
    font-size: 0.65rem;
  }

  .hero-title-main {
    font-size: 2rem;
    text-align: center;
  }

  .title-line-1 {
    font-size: 0.45em;
  }

  .title-line-3 {
    font-size: 0.4em;
  }

  .workflow-container {
    flex-direction: column;
    gap: 2rem;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  .workflow-stage {
    min-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    position: relative;
  }

  .stage-node {
    width: 55px;
    height: 55px;
    flex-shrink: 0;
    position: relative;
  }

  .node-icon svg {
    width: 22px;
    height: 22px;
  }

  .stage-label {
    align-items: center;
    text-align: center;
  }

  .stage-title {
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }

  .stage-desc {
    display: none;
  }

  .stage-connector {
    display: block;
    position: absolute;
    top: calc(55px + 1.5rem);
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 2rem;
    z-index: 1;
    pointer-events: none;
  }

  .connector-line {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, 
      rgba(79, 209, 197, 0.2) 0%, 
      rgba(79, 209, 197, 0.1) 50%, 
      rgba(79, 209, 197, 0.2) 100%
    );
    position: relative;
    overflow: hidden;
  }

  .connector-flow {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, 
      transparent, 
      rgba(79, 209, 197, 0.6), 
      transparent
    );
    animation: flowAnimationVertical 3s ease-in-out infinite;
  }

  .hero-buttons {
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .btn-custom,
  .btn-outline-custom {
    padding: 0.85rem 1.5rem;
    font-size: 0.9rem;
  }

  .btn-icon svg {
    width: 16px;
    height: 16px;
  }

  .hero-title {
    font-size: 2rem;
  }
  
  .hero-title .line-1 {
    font-size: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
  
  .typing-text {
    min-width: 150px;
    font-size: 1rem;
  }
  
  .bracket {
    font-size: 1.3rem;
  }

  .workflow-pipeline {
    margin-bottom: 1.75rem;
  }
  
  .orb-1, .orb-3 {
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
  /* Vertically center hero content on small screens */
  .hero-section .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 140px); /* account for fixed header */
    text-align: center;
    padding-left: 0;
  }

  .innovation-circle-wrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .innovation-circle {
    width: 140px;
    height: 140px;
  }

  .circle-center {
    width: 90px;
    height: 90px;
  }

  .innovation-number {
    font-size: 1.1rem;
  }

  .innovation-label {
    font-size: 0.45rem;
    letter-spacing: 1px;
  }

  .hero-title-main {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .title-line-1 {
    font-size: 0.4em;
    letter-spacing: 2px;
  }

  .title-line-3 {
    font-size: 0.35em;
    letter-spacing: 2px;
  }

  .workflow-pipeline {
    margin-bottom: 1.5rem;
  }

  .workflow-container {
    flex-direction: column;
    gap: 1.5rem;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  .workflow-stage {
    min-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    position: relative;
  }

  .stage-node {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    position: relative;
  }

  .node-icon svg {
    width: 20px;
    height: 20px;
  }

  .stage-label {
    align-items: center;
    text-align: center;
  }

  .stage-title {
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }

  .stage-desc {
    display: none;
  }

  .stage-connector {
    display: block;
    position: absolute;
    top: calc(50px + 1.25rem);
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 1.5rem;
    z-index: 1;
    pointer-events: none;
  }

  .connector-line {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, 
      rgba(79, 209, 197, 0.2) 0%, 
      rgba(79, 209, 197, 0.1) 50%, 
      rgba(79, 209, 197, 0.2) 100%
    );
    position: relative;
    overflow: hidden;
  }

  .connector-flow {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, 
      transparent, 
      rgba(79, 209, 197, 0.6), 
      transparent
    );
    animation: flowAnimationVertical 3s ease-in-out infinite;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .bracket {
    font-size: 1.1rem;
  }

  .typing-text {
    font-size: 0.9rem;
    min-width: 120px;
  }
  
  .greeting-badge {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  .btn-custom,
  .btn-outline-custom {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
  }

  .btn-icon svg {
    width: 14px;
    height: 14px;
  }

  /* Keep buttons in one row on small screens */
  .hero-buttons {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .hero-buttons a {
    width: auto;
    flex: 0 1 auto;
    justify-content: center;
    min-width: 140px;
  }
}

/* Very Small Phones (< 400px) */
@media (max-width: 400px) {
  .hero-section .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .hero-title-main {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .title-line-1 {
    font-size: 0.38em;
    letter-spacing: 1.5px;
  }

  .title-line-3 {
    font-size: 0.33em;
    letter-spacing: 1.5px;
  }

  .hero-subtitle {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }

  .bracket {
    font-size: 1rem;
  }

  .typing-text {
    font-size: 0.8rem;
    min-width: 100px;
  }

  .workflow-container {
    max-width: 160px;
    gap: 1.25rem;
  }

  .stage-node {
    width: 45px;
    height: 45px;
  }

  .node-icon svg {
    width: 18px;
    height: 18px;
  }

  .stage-title {
    font-size: 0.75rem;
  }

  .stage-connector {
    top: calc(45px + 1rem);
    height: 1.25rem;
  }

  .btn-custom,
  .btn-outline-custom {
    padding: 0.7rem 1rem;
    font-size: 0.8rem;
  }

  .btn-icon svg {
    width: 12px;
    height: 12px;
  }

  .hero-buttons {
    gap: 0.5rem;
  }

  .hero-buttons a {
    min-width: 120px;
  }

  .innovation-circle {
    width: 120px;
    height: 120px;
  }

  .circle-center {
    width: 80px;
    height: 80px;
  }

  .innovation-number {
    font-size: 1rem;
  }

  .innovation-label {
    font-size: 0.4rem;
  }
}
</style>


