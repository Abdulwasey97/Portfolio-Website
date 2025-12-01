<template>
  <div class="not-found-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">Page Not Found</h1>
          <p class="hero-subtitle">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>
          <div class="title-underline"></div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="not-found-content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="info-illustration">
              <div class="orbit-circle orbit-circle-lg"></div>
              <div class="orbit-circle orbit-circle-md"></div>
              <div class="orbit-circle orbit-circle-sm"></div>
              <div class="orbit-center">
                <span class="orbit-code">404</span>
              </div>
            </div>

            <h2 class="section-heading">You’re a bit off‑track</h2>          

            <div class="cta-group">
              <router-link to="/" class="back-home-link">
                <span class="back-home-text">Back to Home</span>
                <span class="back-home-arrow-line"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Ensure we start at the top of the page
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.not-found-page {
  background: #ffffff;
  min-height: 100vh;
}

/* Page Hero */
.page-hero {
  padding: 120px 0 60px;
  position: relative;
}

.page-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f7c82' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.45;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #4f7c82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 640px;
  margin: 0 auto 2rem;
}

.title-underline {
  width: 90px;
  height: 4px;
  background: linear-gradient(90deg, #4f7c82 0%, #6a9ca3 100%);
  margin: 0 auto;
  border-radius: 2px;
}

/* Content */
.not-found-content {
  padding: 40px 0 80px;
}

.section-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2933;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #6b7280;
  max-width: 640px;
  margin: 0 auto 2rem;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* Back Home Text Link (match ProjectsPage) */
.back-home-link {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  color: #4f7c82;
  text-align: center;
  gap: 0.15rem;
}

.back-home-text {
  font-weight: 600;
  font-size: 1.05rem;
}

.back-home-arrow-line {
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #4f7c82;
}

.back-home-arrow-line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.6em;
  height: 0.6em;
  border-top: 2px solid #4f7c82;
  border-left: 2px solid #4f7c82;
  transform: translateY(-50%) rotate(-45deg);
}

.btn-primary,
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2.25rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.98rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #4f7c82, #6a9ca3);
  color: #ffffff;
  box-shadow: 0 12px 30px rgba(79, 124, 130, 0.35);
  border: 1px solid transparent;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 45px rgba(79, 124, 130, 0.45);
}

.btn-outline {
  background: #ffffff;
  color: #4f7c82;
  border: 1px solid rgba(79, 124, 130, 0.4);
}

.btn-outline:hover {
  background: #f2f7f8;
  border-color: #4f7c82;
}

/* Orbit Illustration */
.info-illustration {
  position: relative;
  width: 260px;
  height: 260px;
  margin: 0 auto;
}

.orbit-circle {
  position: absolute;
  border-radius: 999px;
  border: 1.5px dashed rgba(79, 124, 130, 0.25);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orbit-circle-lg {
  width: 260px;
  height: 260px;
}

.orbit-circle-md {
  width: 190px;
  height: 190px;
}

.orbit-circle-sm {
  width: 120px;
  height: 120px;
}

.orbit-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 20%, #ffffff 0%, #f2f7f8 40%, #d7e4e6 100%);
  box-shadow: 0 16px 35px rgba(79, 124, 130, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-code {
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #4f7c82;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-title {
    font-size: 2.6rem;
  }

  .page-hero {
    padding: 100px 0 50px;
  }
}

@media (max-width: 767px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .section-heading {
    font-size: 1.75rem;
  }

  .not-found-content {
    padding-bottom: 60px;
  }
}

@media (max-width: 575px) {
  .hero-title {
    font-size: 1.85rem;
  }

  .info-illustration {
    width: 220px;
    height: 220px;
  }
}
</style>


