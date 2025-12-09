<template>
  <section class="services-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">Comprehensive solutions tailored to your business needs</p>
        <div class="title-underline"></div>
      </div>

      <!-- Carousel Container -->
      <div class="carousel-wrapper">
        <Carousel 
          v-bind="carouselSettings"
          :breakpoints="breakpoints"
        >
          <Slide v-for="service in services" :key="service.id">
            <div class="carousel-slide">
              <div class="service-card">
                <div class="icon-wrapper">
                  <div v-html="service.icon"></div>
                </div>
                <h3 class="service-title" v-html="service.title"></h3>
                <p class="service-description">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import servicesData from '../data/services.json'

// Services data from JSON file
const services = ref(servicesData.services)

// Carousel settings
const carouselSettings = {
  itemsToShow: 1, // default for mobile
  snapAlign: 'start',
  wrapAround: true,
  autoplay: 7000, // Auto-advance every 20 seconds (20000ms)
  transition: 600,
}

// Responsive breakpoints
const breakpoints = {
  // Medium screens (≥768px): show 2 cards
  768: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // Large screens (≥992px): show 3 cards
  992: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
}
</script>

<style scoped>
.services-section {
  background: #ffffff;
  padding: 5rem 0;
  position: relative;
}

/* Section Header */
.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4f7c82 0%, #6a9ca3 100%);
  margin: 0 auto;
  border-radius: 2px;
}

/* Carousel Wrapper */
.carousel-wrapper {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

/* Override vue3-carousel default styles */
.carousel-wrapper :deep(.carousel__viewport) {
  overflow: hidden;
}

.carousel-wrapper :deep(.carousel__track) {
  align-items: stretch;
  display: flex;
}

.carousel-wrapper :deep(.carousel__slide) {
  padding: 0 15px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.carousel-slide {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Navigation Arrows */
.carousel-wrapper :deep(.carousel__prev),
.carousel-wrapper :deep(.carousel__next) {
  background: #ffffff;
  border: 2px solid #e8f0f1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #4f7c82;
  box-shadow: 0 4px 12px rgba(79, 124, 130, 0.1);
  transition: all 0.3s ease;
}

.carousel-wrapper :deep(.carousel__prev:hover),
.carousel-wrapper :deep(.carousel__next:hover) {
  background: #4f7c82;
  color: #ffffff;
  border-color: #4f7c82;
  box-shadow: 0 6px 20px rgba(79, 124, 130, 0.2);
  transform: scale(1.1);
}

.carousel-wrapper :deep(.carousel__prev) {
  left: -25px;
}

.carousel-wrapper :deep(.carousel__next) {
  right: -25px;
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
  margin: 0 auto 2rem auto;
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

  .section-title {
    font-size: 2.25rem;
  }

  .carousel-wrapper {
    padding: 0 10px;
  }

  .carousel-wrapper :deep(.carousel__prev),
  .carousel-wrapper :deep(.carousel__next) {
    width: 45px;
    height: 45px;
  }

  .carousel-wrapper :deep(.carousel__prev) {
    left: -15px;
  }

  .carousel-wrapper :deep(.carousel__next) {
    right: -15px;
  }

  .carousel-wrapper :deep(.carousel__slide) {
    padding: 0 10px;
  }

  .service-card {
    padding: 2rem 1.5rem;
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

  .section-title {
    font-size: 1.875rem;
  }

  .carousel-wrapper {
    padding: 0 5px;
  }

  .carousel-wrapper :deep(.carousel__prev),
  .carousel-wrapper :deep(.carousel__next) {
    width: 40px;
    height: 40px;
  }

  .carousel-wrapper :deep(.carousel__prev) {
    left: -10px;
  }

  .carousel-wrapper :deep(.carousel__next) {
    right: -10px;
  }

  .carousel-wrapper :deep(.carousel__slide) {
    padding: 0 8px;
  }

  .service-card {
    padding: 2rem 1.25rem;
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

  .section-title {
    font-size: 1.75rem;
  }

  .carousel-wrapper {
    padding: 0;
  }

  .carousel-wrapper :deep(.carousel__prev),
  .carousel-wrapper :deep(.carousel__next) {
    width: 35px;
    height: 35px;
    display: none; /* Hide arrows on very small screens, users can swipe */
  }

  .carousel-wrapper :deep(.carousel__slide) {
    padding: 0 10px;
  }

  .service-card {
    padding: 1.5rem 1rem;
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

