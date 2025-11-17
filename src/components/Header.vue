<template>
  <header 
    class="header-wrapper"
    :class="{ 'scrolled': isScrolled, 'over-hero': isOverHero }"
  >
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link class="navbar-brand fw-bold text-primary" to="/">CodeWorld360</router-link>
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
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#about" @click="navigateToSection($event, '#about')">About</a>
            </li>        
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact" @click="navigateToSection($event, '#contact')">Contact</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about-us">About Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const isOverHero = ref(true)

const handleScroll = () => {
  const scrollPosition = window.scrollY
  isScrolled.value = scrollPosition > 50
  
  // Check if we're still over the hero section
  // Hero section is min-vh-100, so we check against full viewport height
  // Add a small buffer to ensure we switch colors only when truly past the hero
  const heroHeight = window.innerHeight  - 40 // Full viewport minus small buffer
  isOverHero.value = scrollPosition < heroHeight
}

const navigateToSection = (event, sectionHash) => {
  event.preventDefault()
  
  // If we're not on the home page, navigate to home first
  if (route.path !== '/') {
    router.push('/').then(() => {
      // Wait for the navigation to complete, then scroll to the section
      setTimeout(() => {
        const element = document.querySelector(sectionHash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    })
  } else {
    // We're already on the home page, just scroll to the section
    const element = document.querySelector(sectionHash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(80px) saturate(150%) brightness(1.1);
  -webkit-backdrop-filter: blur(80px) saturate(150%) brightness(1.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border-radius: 0 0 20px 20px;
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: none;
}

.navbar {
  padding: 1rem 0;
}

.nav-link {
  font-weight: 600;
  color: #4f7c82;
  transition: color 0.3s ease, transform 0.2s ease, text-shadow 0.3s ease;
  position: relative;
}

/* White (secondary) color when over hero section */
.header-wrapper.over-hero .nav-link {
  color: #ffffff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.4);
}

/* Primary color when not over hero section */
.header-wrapper:not(.over-hero) .nav-link {
  color: #4f7c82;
  text-shadow: 0 1px 6px rgba(79, 124, 130, 0.2), 0 0 15px rgba(255, 255, 255, 0.2);
}

/* Hover states */
.nav-link:hover {
  transform: translateY(-2px);
}

.header-wrapper.over-hero .nav-link:hover {
  color: rgba(255, 255, 255, 0.85) !important;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 255, 255, 0.5);
}

.header-wrapper:not(.over-hero) .nav-link:hover {
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
  transition: width 0.3s ease, left 0.3s ease, background 0.3s ease;
}

/* White underline when over hero section */
.header-wrapper.over-hero .nav-link::after {
  background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.8));
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform 0.3s ease, filter 0.3s ease;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
  filter: drop-shadow(0 2px 8px rgba(79, 124, 130, 0.3)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
}

/* White brand when over hero section */
.header-wrapper.over-hero .navbar-brand {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
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

/* White toggler when over hero section */
.header-wrapper.over-hero .navbar-toggler {
  border-color: #ffffff;
}

/* Primary color toggler when not over hero */
.header-wrapper:not(.over-hero) .navbar-toggler {
  border-color: #4f7c82;
}

.navbar-toggler:hover {
  transform: scale(1.05);
}

.header-wrapper.over-hero .navbar-toggler:hover {
  background: rgba(255, 255, 255, 0.2);
}

.header-wrapper:not(.over-hero) .navbar-toggler:hover {
  background: rgba(79, 124, 130, 0.1);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(79, 124, 130, 0.25);
}

.header-wrapper.over-hero .navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.3);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%234f7c82' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.header-wrapper.over-hero .navbar-toggler-icon {
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
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(60px) saturate(150%) brightness(1.1);
    -webkit-backdrop-filter: blur(60px) saturate(150%) brightness(1.1);
    margin: 1rem -1rem -1rem;
    padding: 1rem;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  }
  
  .header-wrapper.scrolled .navbar-collapse {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(80px) saturate(150%) brightness(1.1);
    -webkit-backdrop-filter: blur(80px) saturate(150%) brightness(1.1);
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

