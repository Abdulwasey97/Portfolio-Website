<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container-fluid px-4">
          <div class="row py-4">
            <!-- Logo Section -->
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="logo-section">
                <img src="/logo.png" alt="MyPortfolio Logo" class="footer-logo">
              </div>
            </div>

            <!-- Website Sections Column -->
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="footer-heading mb-3">Quick Links</h5>
              <ul class="footer-links list-unstyled">
                <li><router-link to="/">Home</router-link></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#skills">Skills</a></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>

            <!-- Legal Column -->
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="footer-heading mb-3">Legal</h5>
              <ul class="footer-links list-unstyled">
                <li><a href="#terms">Terms & Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>

            <!-- Contact Column -->
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="footer-heading mb-3">Contact Us</h5>
              <ul class="footer-links contact-info list-unstyled">
                <li class="contact-detail">
                  <strong>Email:</strong><br>
                  <a href="mailto:abdulwaseyjaved@yahoo.com" class="email-link">
                    abdulwaseyjaved@yahoo.com
                  </a>
                </li>
              </ul>
              <div class="social-icons mt-4">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

        <!-- Copyright Section -->
        <div class="footer-bottom">
          <div class="row">
            <div class="col-12 text-center py-3">
              <p class="copyright mb-0">
                <span class="logo-emoji">☁️</span>
                MyPortfolio © {{ currentYear }} - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/config/colors'

const currentYear = ref(new Date().getFullYear())
const primaryColor = computed(() => PRIMARY_COLOR)
const secondaryColor = computed(() => SECONDARY_COLOR)
</script>

<style scoped>
.footer {
  margin-top: auto;
  background-color: v-bind(secondaryColor);
  border-top: 1px solid #e5e7eb;
}

.footer-content {
  color: #1f2937;
}

.logo-section {
  display: flex;
  align-items: flex-start;
}

.footer-logo {
  max-width: 180px;
  height: auto;
  transition: opacity 0.3s;
}

.footer-logo:hover {
  opacity: 0.8;
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #4b5563;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
  display: inline-block;
}

.footer-links a:hover {
  color: v-bind(primaryColor);
}

.contact-info .contact-detail {
  color: #4b5563;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.email-link {
  color: v-bind(primaryColor);
  text-decoration: none;
  font-weight: 500;
  word-break: break-word;
}

.email-link:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: v-bind(primaryColor);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  opacity: 0.9;
}

.footer-bottom {
  border-top: 1px solid #e5e7eb;
  background-color: rgba(249, 250, 251, 0.5);
}

.copyright {
  color: #6b7280;
  font-size: 0.9rem;
}

.logo-emoji {
  font-size: 1.1rem;
  margin-right: 0.25rem;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .footer-content .row {
    text-align: left;
  }
  
  .logo-section {
    margin-bottom: 2rem;
  }
}

@media (max-width: 767px) {
  .footer-heading {
    margin-top: 1.5rem;
  }
  
  .footer-logo {
    max-width: 150px;
  }
}
</style>

