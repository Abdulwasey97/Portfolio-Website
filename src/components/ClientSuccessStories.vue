<template>
  <section class="success-stories-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center">
        <h2 class="section-title">
          Client <span class="highlight">Success Stories</span>
        </h2>
        <p class="section-subtitle">
          See how CodeWorld360's innovative solutions have empowered businesses to thrive
        </p>
        <div class="title-underline"></div>
      </div>

      <!-- Carousel Container -->
      <div class="carousel-wrapper">
        <Carousel 
          v-bind="carouselSettings"
          :breakpoints="breakpoints"
        >
          <Slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="carousel-slide">
              <div class="testimonial-card">
                <div class="stars">
                  <i v-for="star in 5" :key="star" class="fas fa-star"></i>
                </div>
                <p class="testimonial-text">
                  {{ testimonial.excerpt }}
                </p>
                <button class="read-more-btn" @click="openModal(testimonial)">Read More</button>
                
                <div class="client-info">
                  <div class="client-avatar">
                    <img :src="testimonial.avatar" :alt="testimonial.name" />
                  </div>
                  <div class="client-details">
                    <h4 class="client-name">{{ testimonial.name }}</h4>
                    <a :href="testimonial.website" class="client-link" target="_blank">
                      {{ testimonial.website }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>

    <!-- Modal Popup -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="modal-overlay" @click="closeModal">
          <div class="modal-container" @click.stop>
            <button class="modal-close" @click="closeModal" aria-label="Close testimonial modal">
              <span>&times;</span>
            </button>
            
            <div class="modal-content" v-if="selectedTestimonial">
              <div class="modal-header">
                <div class="modal-avatar">
                  <img :src="selectedTestimonial.avatar" :alt="selectedTestimonial.name" />
                </div>
                <div class="modal-client-info">
                  <h3 class="modal-client-name">{{ selectedTestimonial.name }}</h3>
                  <a :href="selectedTestimonial.website" class="modal-client-link" target="_blank">
                    {{ selectedTestimonial.website }}
                  </a>
                </div>
              </div>

              <div class="modal-stars">
                <i v-for="star in 5" :key="star" class="fas fa-star"></i>
              </div>

              <p class="modal-text">
                {{ selectedTestimonial.fullText }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>

  <!-- Project stats section directly below client success stories -->
  <ProjectCounter />
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ProjectCounter from './ProjectCounter.vue'
import clientSuccessStories from '../data/clientSuccessStories.json'

const testimonials = ref(clientSuccessStories.testimonials || [])

const showModal = ref(false)
const selectedTestimonial = ref(null)

// Carousel settings as per Vue3 Carousel documentation
const carouselSettings = {
  itemsToShow: 1, // default for mobile
  snapAlign: 'center',
  wrapAround: true,
  autoplay: 5000,
  transition: 600,
}

// Responsive breakpoints
const breakpoints = {
  // Medium screens (≥768px): show 2 cards
  768: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // Large screens (≥1200px): show 3 cards
  1200: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
}

const openModal = (testimonial) => {
  selectedTestimonial.value = testimonial
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedTestimonial.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4f7c82 0%, #6a9ca3 100%);
  margin: 0 auto;
  border-radius: 2px;
}
.success-stories-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

/* Decorative background elements */
.success-stories-section::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(79, 124, 130, 0.05) 0%, rgba(106, 156, 163, 0.05) 100%);
  border-radius: 50%;
  z-index: 0;
}

.success-stories-section::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(79, 124, 130, 0.03) 0%, rgba(106, 156, 163, 0.03) 100%);
  border-radius: 50%;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
}

/* Section Header */
.section-header {
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-title .highlight {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Carousel Styles */
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

/* Testimonial Cards */
.testimonial-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 35px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(79, 124, 130, 0.1);
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(79, 124, 130, 0.15);
}

/* Stars */
.stars {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
}

.stars i {
  color: #fbbf24;
  font-size: 1rem;
}

/* Testimonial Text */
.testimonial-text {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 15px;
  flex-grow: 1;
}

/* Read More Button */
.read-more-btn {
  background: none;
  border: none;
  color: #4f7c82;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-bottom: 25px;
  text-align: left;
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
}

.read-more-btn::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4f7c82 0%, #6a9ca3 100%);
  transition: width 0.3s ease;
}

.read-more-btn:hover {
  color: #3e6269;
}

.read-more-btn:hover::after {
  width: 100%;
}

/* Client Info */
.client-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 25px;
  border-top: 1px solid #e2e8f0;
}

.client-avatar {
  flex-shrink: 0;
}

.client-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4f7c82;
  box-shadow: 0 4px 12px rgba(79, 124, 130, 0.2);
}

.client-details {
  flex-grow: 1;
}

.client-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 5px 0;
}

.client-link {
  font-size: 0.85rem;
  color: #4f7c82;
  text-decoration: none;
  word-break: break-all;
  transition: color 0.3s ease;
}

.client-link:hover {
  color: #3e6269;
  text-decoration: underline;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-container {
  background: #ffffff;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  z-index: 10;
  padding: 0;
}

.modal-close span {
  color: #2e6c70;
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  transition: color 0.3s ease;
}

.modal-close:hover {
  transform: rotate(8deg) scale(1.1);
}

.modal-close:hover span {
  color: #1f4d50;
}

.modal-content {
  padding: 50px 40px;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.modal-avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4f7c82;
  box-shadow: 0 6px 20px rgba(79, 124, 130, 0.3);
}

.modal-client-info {
  flex-grow: 1;
}

.modal-client-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 8px 0;
}

.modal-client-link {
  font-size: 0.95rem;
  color: #4f7c82;
  text-decoration: none;
  transition: color 0.3s ease;
}

.modal-client-link:hover {
  color: #3e6269;
  text-decoration: underline;
}

.modal-stars {
  display: flex;
  gap: 6px;
  margin-bottom: 25px;
}

.modal-stars i {
  color: #fbbf24;
  font-size: 1.25rem;
}

.modal-text {
  font-size: 1.05rem;
  color: #4a5568;
  line-height: 1.8;
  margin: 0;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9);
}

/* Responsive Design */
@media (max-width: 1199px) {
  .carousel-wrapper {
    padding: 0 15px;
  }
  
  .carousel-wrapper :deep(.carousel__slide) {
    padding: 0 10px;
  }
}

@media (max-width: 991px) {
  .carousel-wrapper {
    padding: 0 10px;
  }
  
  .carousel-wrapper :deep(.carousel__slide) {
    padding: 0 10px;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .testimonial-card {
    padding: 30px;
  }

  .modal-content {
    padding: 40px 30px;
  }

  .modal-avatar img {
    width: 70px;
    height: 70px;
  }

  .modal-client-name {
    font-size: 1.35rem;
  }
}

@media (max-width: 767px) {
  .carousel-wrapper {
    padding: 0 10px;
  }
  
  .carousel-wrapper :deep(.carousel__slide) {
    padding: 0 5px;
  }

  .success-stories-section {
    padding: 60px 0;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 1.85rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .testimonial-card {
    padding: 25px;
  }

  .client-avatar img {
    width: 50px;
    height: 50px;
  }

  .client-name {
    font-size: 1rem;
  }

  .client-link {
    font-size: 0.8rem;
  }

  .modal-content {
    padding: 35px 25px;
  }

  .modal-close {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }

  .modal-header {
    flex-direction: column;
    text-align: center;
  }

  .modal-avatar img {
    width: 60px;
    height: 60px;
  }

  .modal-client-name {
    font-size: 1.25rem;
  }

  .modal-stars {
    justify-content: center;
  }

  .modal-text {
    font-size: 0.95rem;
  }
}

@media (max-width: 575px) {
  .section-title {
    font-size: 1.5rem;
  }

  .stars i {
    font-size: 0.9rem;
  }

  .testimonial-text {
    font-size: 0.9rem;
  }

  .modal-overlay {
    padding: 15px;
  }

  .modal-content {
    padding: 30px 20px;
  }
}
</style>


