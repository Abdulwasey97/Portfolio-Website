<template>
  <section class="services-section">
    <div class="container">
      <div class="row g-4 justify-content-center">
        <!-- Mobile App Development -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 class="service-title">Mobile App<br>Development</h3>
            <p class="service-description">
              We build high-performance mobile applications tailored to your business needs. Our experienced team delivers seamless, user-friendly apps for both Android and iOS using modern frameworks and best practices. From concept to launch, we ensure smooth performance, intuitive design, and scalable architecture.
            </p>
          </div>
        </div>

        <!-- Web App Development -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 class="service-title">Web App<br>Development</h3>
            <p class="service-description">
              Our team specializes in creating powerful, secure, and scalable web applications. Whether it's an e-commerce platform, admin dashboard, or custom business solution, we develop clean, efficient, and high-performing web apps that deliver real value. We focus on modern UI/UX, responsive layouts, and robust backend development.
            </p>
          </div>
        </div>

        <!-- AI-Based Application Development -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3 class="service-title">AI-Based Application<br>Development</h3>
            <p class="service-description">
              We build intelligent applications powered by AI and machine learning. Our expert team delivers solutions like chatbots, recommendation systems, automation tools, predictive analytics, and more. We help businesses integrate smart features that improve efficiency, decision-making, and customer experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PRIMARY_COLOR } from '../config/colors'
</script>

<style scoped>
.services-section {
  background: #ffffff;
  padding: 5rem 0;
  position: relative;
}

.service-card {
  background: transparent;
  padding: 2rem 1.5rem;
  height: 100%;
  transition: all 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  width: 90px;
  height: 90px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 2rem 0;
  transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
  background: #e8f0f1;
  box-shadow: 0 8px 20px rgba(79, 124, 130, 0.12);
}

.icon-wrapper svg {
  color: #6b6b6b;
  transition: color 0.3s ease;
}

.service-card:hover .icon-wrapper svg {
  color: #4f7c82;
}

.service-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
  text-align: left;
  line-height: 1.4;
}

.service-description {
  color: #6b6b6b;
  font-size: 0.95rem;
  line-height: 1.75;
  text-align: left;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .services-section {
    padding: 4rem 0;
  }

  .service-card {
    padding: 2rem 1.5rem;
    margin-bottom: 1.5rem;
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    margin-bottom: 1.75rem;
  }

  .icon-wrapper svg {
    width: 36px;
    height: 36px;
  }

  .service-title {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .service-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 3rem 0;
  }

  .service-card {
    padding: 2rem 1.25rem;
    margin-bottom: 2rem;
  }

  .icon-wrapper {
    width: 75px;
    height: 75px;
    margin-bottom: 1.5rem;
  }

  .icon-wrapper svg {
    width: 34px;
    height: 34px;
  }

  .service-title {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
  }

  .service-description {
    font-size: 0.9rem;
    line-height: 1.65;
  }
}

@media (max-width: 576px) {
  .services-section {
    padding: 2.5rem 0;
  }

  .service-card {
    padding: 1.5rem 1rem;
    margin-bottom: 2rem;
  }

  .icon-wrapper {
    width: 70px;
    height: 70px;
    margin-bottom: 1.25rem;
  }

  .icon-wrapper svg {
    width: 32px;
    height: 32px;
  }

  .service-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .service-description {
    font-size: 0.875rem;
    line-height: 1.6;
  }
}
</style>

