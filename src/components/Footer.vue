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
                <li>
                  <a href="/#who-we-are" @click="navigateToSection($event, '#who-we-are')">About Us</a>
                </li>
                <li>
                  <a href="/#projects" @click="navigateToSection($event, '#projects')">Projects</a>
                </li>
                <li>
                  <a href="/#case-studies" @click="navigateToSection($event, '#case-studies')">Case Studies</a>
                </li>
                <li>
                  <a href="/#contact" @click="navigateToSection($event, '#contact')">Contact</a>
                </li>
              </ul>
            </div>

            <!-- Legal Column -->
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="footer-heading mb-3">Legal</h5>
              <ul class="footer-links list-unstyled">
                <li>
                  <router-link to="/terms-and-conditions">Terms &amp; Conditions</router-link>
                </li>
                <li>
                  <router-link to="/privacy-policy">Privacy Policy</router-link>
                </li>
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
                  <div class="social-icons mt-3" aria-label="Follow on social media">
                    <a
                      v-for="link in socialLinks"
                      :key="link.name"
                      :href="link.url"
                      target="_blank"
                      rel="noopener"
                      class="social-icon"
                      :aria-label="link.name"
                    >
                      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path :d="iconPaths[link.icon]" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        <!-- Copyright Section -->
        <div class="footer-bottom">
          <div class="row">
            <div class="col-12 text-center py-3">
              <p class="copyright mb-0">
              
              CodeWorld360 © {{ currentYear }} - All Rights Reserved
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
import { useRouter, useRoute } from 'vue-router'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/config/colors'

const currentYear = ref(new Date().getFullYear())
const primaryColor = computed(() => PRIMARY_COLOR)
const secondaryColor = computed(() => SECONDARY_COLOR)

const router = useRouter()
const route = useRoute()

const navigateToSection = (event, sectionHash) => {
  event.preventDefault()

  // If we're not on the home page, navigate to home first
  if (route.path !== '/') {
    router.push('/').then(() => {
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

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com', icon: 'instagram' },
  { name: 'X (Twitter)', url: 'https://twitter.com', icon: 'x' },
  { name: 'Facebook', url: 'https://www.facebook.com', icon: 'facebook' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'linkedin' }
]

const iconPaths = {
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403.61.224 1.045.49 1.503.95.46.457.726.892.95 1.502.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427-.224.61-.49 1.045-.95 1.503-.457.46-.892.726-1.502.95-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403-.61-.224-1.045-.49-1.503-.95-.46-.457-.726-.892-.95-1.502-.163-.457-.347-1.257-.403-2.427C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427.224-.61.49-1.045.95-1.503.457-.46.892-.726 1.502-.95.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.62c-3.162 0-3.532.012-4.777.07-1.026.047-1.58.218-1.948.363-.49.19-.84.417-1.207.785-.368.367-.596.717-.785 1.206-.145.369-.316.923-.363 1.949-.058 1.245-.07 1.615-.07 4.777s.012 3.532.07 4.777c.047 1.026.218 1.58.363 1.948.19.49.417.84.785 1.207.367.368.717.596 1.206.785.369.145.923.316 1.949.363 1.245.058 1.615.07 4.777.07s3.532-.012 4.777-.07c1.026-.047 1.58-.218 1.948-.363.49-.19.84-.417 1.207-.785.368-.367.596-.717.785-1.206.145-.369.316-.923.363-1.949.058-1.245.07-1.615.07-4.777s-.012-3.532-.07-4.777c-.047-1.026-.218-1.58-.363-1.948-.19-.49-.417-.84-.785-1.207-.367-.368-.717-.596-1.206-.785-.369-.145-.923-.316-1.949-.363-1.245-.058-1.615-.07-4.777-.07zm0 3.905a5.332 5.332 0 110 10.664 5.332 5.332 0 010-10.664zm0 1.62a3.712 3.712 0 100 7.424 3.712 3.712 0 000-7.424zm5.406-3.905a1.248 1.248 0 110 2.496 1.248 1.248 0 010-2.496z',
  x: 'M4 4h4.313l3.286 4.463L14.286 4H20l-6.571 7.457L20 20h-4.313l-3.286-4.463L9.714 20H4l6.571-7.543z',
  facebook:
    'M13.5 9H16l.5-3h-3V4.5c0-.866.202-1.5 1.5-1.5H16V0h-2.5C10.57 0 9 1.57 9 4.5V6H7v3h2v9h4V9z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.53 4.78 5.82V21H18v-5.18c0-1.24-.02-2.84-1.73-2.84-1.73 0-1.99 1.35-1.99 2.75V21h-4z'
}
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
  color: #4b5563;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
}

.social-icon svg {
  width: 24px;
  height: 24px;
}

.social-icon:hover {
  color: v-bind(primaryColor);
  transform: translateY(-2px);
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

