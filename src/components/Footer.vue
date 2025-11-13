<template>
  <footer class="footer bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <h5 class="fw-bold mb-3">MyPortfolio</h5>
          <p class="text-muted">
            Building amazing web experiences with modern technologies. 
            Let's create something great together.
          </p>
        </div>
        <div class="col-lg-4 mb-4">
          <h5 class="fw-bold mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#home" class="text-muted text-decoration-none">Home</a>
            </li>
            <li class="mb-2">
              <a href="#about" class="text-muted text-decoration-none">About</a>
            </li>
            <li class="mb-2">
              <a href="#skills" class="text-muted text-decoration-none">Skills</a>
            </li>
            <li class="mb-2">
              <a href="#projects" class="text-muted text-decoration-none">Projects</a>
            </li>
            <li class="mb-2">
              <a href="#contact" class="text-muted text-decoration-none">Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 mb-4">
          <h5 class="fw-bold mb-3">Follow Me</h5>
          <div class="social-links">
            <a href="#" class="btn btn-outline-light btn-sm me-2 mb-2">
              <i>👤</i> LinkedIn
            </a>
            <a href="#" class="btn btn-outline-light btn-sm me-2 mb-2">
              <i>💻</i> GitHub
            </a>
            <a href="#" class="btn btn-outline-light btn-sm me-2 mb-2">
              <i>🐦</i> Twitter
            </a>
            <a href="#" class="btn btn-outline-light btn-sm me-2 mb-2">
              <i>📷</i> Instagram
            </a>
          </div>
        </div>
      </div>
      <hr class="my-4 bg-secondary" />
      <div class="row">
        <div class="col-12 text-center">
          <p class="text-muted mb-0">
            © {{ currentYear }} MyPortfolio. All rights reserved. Made with ❤️
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.footer a:hover {
  color: white !important;
}

.social-links .btn:hover {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
</style>

