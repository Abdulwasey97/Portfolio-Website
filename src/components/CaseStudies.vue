<template>
  <section id="case-studies" class="case-studies-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">Featured Case Studies</h2>
        <p class="section-subtitle">Real-world solutions and successful client implementations</p>
        <div class="title-underline"></div>
      </div>

      <!-- Case Studies Grid (3 columns) -->
      <div class="row g-4 mb-5">
        <div class="col-lg-4 col-md-6" v-for="caseStudy in featuredCaseStudies" :key="caseStudy.id">
          <div
            class="case-study-card"
            @click="openModal(caseStudy)"
            @keydown.enter.prevent="openModal(caseStudy)"
            @keydown.space.prevent="openModal(caseStudy)"
            role="button"
            tabindex="0"
          >
            <div class="case-study-image-wrapper">
              <img 
                :src="caseStudy.image" 
                class="case-study-image" 
                :alt="caseStudy.title"
              />
            </div>
            <div class="case-study-content">
              <h3 class="case-study-title">{{ caseStudy.title }}</h3>
              <p class="case-study-description">{{ caseStudy.description }}</p>
              <div class="tech-stack">
                <span class="tech-label">Tech Stack:</span>
                <div class="tech-tags">
                  <span 
                    v-for="tech in caseStudy.technologies" 
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <!-- See More Button -->
      <div class="text-center">
        <router-link to="/case-studies" class="see-more-btn">
          <span>See More Case Studies</span>
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>

    <ProjectModal
      :show="isModalOpen"
      :project="selectedCaseStudy"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectModal from './ProjectModal.vue'
import caseStudiesData from '../data/caseStudies.json'

// Featured case studies - showing only featured case studies on home page
const featuredCaseStudies = computed(() => {
  return caseStudiesData.caseStudies.filter(caseStudy => caseStudy.featured === true)
})

const selectedCaseStudy = ref(null)
const isModalOpen = ref(false)

const openModal = (caseStudy) => {
  selectedCaseStudy.value = caseStudy
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedCaseStudy.value = null
}
</script>

<style scoped>
.case-studies-section {
  padding: 100px 0;
  background: #f8f9fa;
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

/* Case Study Card */
.case-study-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(79, 124, 130, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.case-study-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(79, 124, 130, 0.15);
}

/* Case Study Image */
.case-study-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.case-study-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-study-card:hover .case-study-image {
  transform: scale(1.03);
}

/* Case Study Content */
.case-study-content {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-study-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.case-study-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}

/* Tech Stack */
.tech-stack {
  margin-bottom: 1rem;
}

.tech-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #4f7c82;
  display: block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  background: rgba(79, 124, 130, 0.08);
  color: #4f7c82;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(79, 124, 130, 0.15);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: #4f7c82;
  color: #ffffff;
  transform: translateY(-2px);
}

/* Client Info */
.case-study-client {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(79, 124, 130, 0.1);
}

.client-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  margin-right: 0.5rem;
}

.client-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #4f7c82;
}

/* See More Button */
.see-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 124, 130, 0.3);
}

.see-more-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(79, 124, 130, 0.4);
  color: #ffffff;
}

.see-more-btn i {
  transition: transform 0.3s ease;
}

.see-more-btn:hover i {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.25rem;
  }

  .case-study-card {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 767px) {
  .case-studies-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .case-study-image-wrapper {
    height: 200px;
  }

  .see-more-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>

