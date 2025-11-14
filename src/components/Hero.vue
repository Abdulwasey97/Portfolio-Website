<template>
  <section id="home" class="hero-section">
    <!-- Animated Background -->
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <div class="container position-relative">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-6 hero-content">
          <div class="greeting-badge mb-3">
            <span class="wave">👋</span> Welcome to my portfolio
          </div>
          <h1 class="display-2 fw-bold mb-3 hero-title">
            Hi, I'm <span class="gradient-text">Your Name</span>
          </h1>
          <h2 class="h2 mb-4 hero-subtitle">
            <span class="typing-text">Full Stack Developer</span>
          </h2>
          <p class="lead mb-5 hero-description">
            I create beautiful and functional websites and applications. 
            Passionate about clean code and great user experiences.
          </p>
          <div class="d-flex gap-3 flex-wrap hero-buttons">
            <a href="#contact" class="btn btn-primary btn-lg btn-custom shadow-lg">
              Get In Touch
              <span class="btn-icon">→</span>
            </a>
            <a href="#projects" class="btn btn-outline-custom btn-lg shadow">
              View Work
              <span class="btn-icon">↓</span>
            </a>
          </div>
          
          <!-- Social Links -->
          <div class="social-links mt-5">
            <a href="#" class="social-icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="social-icon" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="col-lg-6 text-center hero-image-container">
          <div class="hero-image">
            <!-- Decorative Elements -->
            <div class="floating-badge badge-1">
              <span class="icon">💻</span>
              <span class="text">Clean Code</span>
            </div>
            <div class="floating-badge badge-2">
              <span class="icon">🚀</span>
              <span class="text">Fast Performance</span>
            </div>
            <div class="floating-badge badge-3">
              <span class="icon">🎨</span>
              <span class="text">Modern Design</span>
            </div>
            
            <!-- Main Image with Gradient Border -->
            <div class="image-wrapper">
              <div class="gradient-border"></div>
              <img 
                src="https://via.placeholder.com/400" 
                alt="Profile" 
                class="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <span class="mouse">
        <span class="wheel"></span>
      </span>
      <span class="text">Scroll Down</span>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Hero Section with Gradient Background */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f8fcfd 50%, #e8f4f6 100%);
}

/* Animated Background Orbs */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  top: -10%;
  right: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #85b1b8 0%, #4f7c82 100%);
  bottom: -10%;
  left: -5%;
  animation-delay: 7s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #6a9ca3 0%, #85b1b8 100%);
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
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Content Animation */
.hero-content {
  animation: fadeInUp 1s ease-out;
  position: relative;
  z-index: 2;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Greeting Badge */
.greeting-badge {
  display: inline-block;
  background: rgba(79, 124, 130, 0.1);
  border: 1px solid rgba(79, 124, 130, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  color: #4f7c82;
  font-weight: 500;
  animation: slideInLeft 0.8s ease-out;
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40%, 100% { transform: rotate(0deg); }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hero Title */
.hero-title {
  color: #2d4a4e;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.gradient-text {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 50%, #85b1b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Subtitle with Typing Effect */
.hero-subtitle {
  color: #4f7c82;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.typing-text {
  display: inline-block;
  border-right: 3px solid #4f7c82;
  padding-right: 5px;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  from, to { border-color: transparent; }
  50% { border-color: #4f7c82; }
}

/* Description */
.hero-description {
  color: #3e6269;
  animation: fadeInUp 1s ease-out 0.6s both;
}

/* Custom Buttons */
.hero-buttons {
  animation: fadeInUp 1s ease-out 0.8s both;
}

.btn-custom {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  border: none;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-custom::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6a9ca3 0%, #85b1b8 100%);
  transition: left 0.3s ease;
  z-index: -1;
}

.btn-custom:hover::before {
  left: 0;
}

.btn-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(79, 124, 130, 0.3) !important;
}

.btn-outline-custom {
  background: transparent;
  border: 2px solid #4f7c82;
  color: #4f7c82;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-custom:hover {
  background: #4f7c82;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(79, 124, 130, 0.2);
}

.btn-icon {
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.btn-custom:hover .btn-icon,
.btn-outline-custom:hover .btn-icon {
  transform: translateX(5px);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  animation: fadeInUp 1s ease-out 1s both;
}

.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(79, 124, 130, 0.1);
  color: #4f7c82;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.social-icon:hover {
  background: #4f7c82;
  color: white;
  transform: translateY(-5px) rotate(5deg);
  border-color: #4f7c82;
  box-shadow: 0 5px 15px rgba(79, 124, 130, 0.3);
}

/* Hero Image Container */
.hero-image-container {
  animation: fadeInRight 1s ease-out 0.4s both;
  position: relative;
  z-index: 2;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-image {
  position: relative;
  display: inline-block;
}

/* Image Wrapper with Gradient Border */
.image-wrapper {
  position: relative;
  display: inline-block;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.gradient-border {
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f7c82, #6a9ca3, #85b1b8, #4f7c82);
  background-size: 300% 300%;
  animation: gradientRotate 4s ease infinite;
  z-index: -1;
}

@keyframes gradientRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.profile-img {
  max-width: 400px;
  width: 100%;
  border-radius: 50%;
  border: 8px solid white;
  box-shadow: 0 20px 60px rgba(79, 124, 130, 0.3);
  position: relative;
  z-index: 1;
}

/* Floating Badges */
.floating-badge {
  position: absolute;
  background: white;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(79, 124, 130, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4f7c82;
  border: 2px solid rgba(79, 124, 130, 0.1);
  animation: floatBadge 3s ease-in-out infinite;
}

.floating-badge .icon {
  font-size: 1.5rem;
}

.badge-1 {
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.badge-2 {
  top: 50%;
  right: -8%;
  animation-delay: 1s;
}

.badge-3 {
  bottom: 15%;
  left: 5%;
  animation-delay: 2s;
}

@keyframes floatBadge {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #4f7c82;
  animation: fadeInUp 1s ease-out 1.2s both;
  z-index: 2;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid #4f7c82;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
  animation: bounce 2s infinite;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #4f7c82;
  border-radius: 2px;
  animation: scroll 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

.scroll-indicator .text {
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive Design */
@media (max-width: 991px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .floating-badge {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
  
  .floating-badge .icon {
    font-size: 1.2rem;
  }
  
  .badge-1, .badge-2, .badge-3 {
    position: static;
    margin: 1rem auto;
    display: inline-flex;
  }
  
  .hero-image-container {
    margin-top: 3rem;
  }
  
  .profile-img {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .orb-1, .orb-2, .orb-3 {
    width: 250px;
    height: 250px;
  }
  
  .scroll-indicator {
    display: none;
  }
}
</style>

