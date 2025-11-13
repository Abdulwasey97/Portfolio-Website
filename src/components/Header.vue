<template>
  <header 
    class="header-wrapper"
    :class="{ 'scrolled': isScrolled }"
  >
    <nav class="navbar navbar-expand-lg" :class="isScrolled ? 'navbar-light' : 'navbar-dark'">
      <div class="container">
        <a class="navbar-brand fw-bold" :class="isScrolled ? 'text-primary' : 'text-white'" href="#home">MyPortfolio</a>
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
  left: 0;
  right: 0;
  width: 100%;
  background-color: transparent;
  z-index: 1000;
  transition: all 0.4s ease-in-out;
  margin: 0 auto;
}

.header-wrapper.scrolled {
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 15px 15px;
  margin-top: 10px;
}

.navbar {
  padding: 1rem 0;
}

/* Add text shadow when transparent for better readability */
.header-wrapper:not(.scrolled) .navbar-brand,
.header-wrapper:not(.scrolled) .nav-link {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s, text-shadow 0.3s;
}

.nav-link:hover {
  color: var(--bs-primary) !important;
}

.navbar-brand {
  transition: color 0.3s, text-shadow 0.3s;
}

/* Adjust for mobile */
@media (max-width: 768px) {
  .header-wrapper.scrolled {
    width: 95%;
  }
}
</style>

