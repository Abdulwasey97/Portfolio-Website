<template>
  <header 
    class="header-wrapper"
    :class="{ 'scrolled': isScrolled }"
  >
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#home">MyPortfolio</a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 100%;
  background: transparent;
  box-shadow: none;
  z-index: 1000;
  transition: width 0.4s ease-in-out, 
              background 0.4s ease-in-out, 
              box-shadow 0.4s ease-in-out, 
              border-radius 0.4s ease-in-out,
              margin-top 0.4s ease-in-out,
              backdrop-filter 0.4s ease-in-out;
}

.header-wrapper.scrolled {
  width: 80%;
  max-width: 1400px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 8px 32px rgba(79, 124, 130, 0.08);
  border-radius: 0 0 20px 20px;
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-top: none;
}

.navbar {
  padding: 1rem 0;
}

.nav-link {
  font-weight: 500;
  color: #4f7c82;
  transition: color 0.3s ease, transform 0.2s ease, text-shadow 0.3s ease;
  position: relative;
}

/* Primary color when not scrolled */
.header-wrapper:not(.scrolled) .nav-link {
  color: #4f7c82;
  text-shadow: 0 2px 8px rgba(79, 124, 130, 0.3);
}

/* Primary color when scrolled */
.header-wrapper.scrolled .nav-link {
  color: #4f7c82;
  text-shadow: 0 1px 3px rgba(79, 124, 130, 0.1);
}

.nav-link:hover {
  color: #3e6269 !important;
  text-shadow: 0 2px 8px rgba(79, 124, 130, 0.5);
  transform: translateY(-2px);
}

.header-wrapper:not(.scrolled) .nav-link:hover {
  color: #3e6269 !important;
  text-shadow: 0 2px 10px rgba(79, 124, 130, 0.6);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4f7c82, #6a9ca3);
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.navbar-brand {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.navbar-brand:hover {
  transform: scale(1.05);
}

/* Navbar toggler customization */
.navbar-toggler {
  border: 2px solid #4f7c82;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s ease;
}

.header-wrapper:not(.scrolled) .navbar-toggler {
  border-color: #ffffff;
}

.navbar-toggler:hover {
  background: rgba(79, 124, 130, 0.1);
  transform: scale(1.05);
}

.header-wrapper:not(.scrolled) .navbar-toggler:hover {
  background: rgba(255, 255, 255, 0.2);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(79, 124, 130, 0.25);
}

.header-wrapper:not(.scrolled) .navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.3);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%234f7c82' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.header-wrapper:not(.scrolled) .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Adjust for mobile */
@media (max-width: 768px) {
  .header-wrapper.scrolled {
    width: 95%;
  }
  
  .navbar-brand {
    font-size: 1.25rem;
  }
}

/* Enhanced mobile menu */
@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    margin: 1rem -1rem -1rem;
    padding: 1rem;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .header-wrapper.scrolled .navbar-collapse {
    background: rgba(255, 255, 255, 0.95);
  }
  
  .nav-item {
    text-align: center;
    padding: 0.5rem 0;
  }
  
  .nav-link::after {
    bottom: 5px;
  }
}
</style>

