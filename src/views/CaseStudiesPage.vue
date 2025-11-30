<template>
  <div class="case-studies-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">All Case Studies</h1>
          <p class="hero-subtitle">Explore real-world solutions and successful client implementations</p>
          <div class="title-underline"></div>
        </div>
      </div>
    </section>

    <!-- Case Studies Grid Section -->
    <section class="case-studies-grid-section">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="caseStudy in allCaseStudies" :key="caseStudy.id">
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
                <div class="case-study-overlay">
                  <div class="overlay-buttons">
                    <a :href="caseStudy.demo" class="overlay-btn demo-btn" @click.stop>
                      <i class="fas fa-external-link-alt"></i> View Case
                    </a>
                    <a :href="caseStudy.code" class="overlay-btn code-btn" @click.stop>
                      <i class="fas fa-file-alt"></i> Details
                    </a>
                  </div>
                </div>
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
                <div v-if="caseStudy.client" class="case-study-client">
                  <span class="client-label">Client:</span>
                  <span class="client-name">{{ caseStudy.client }}</span>
                </div>
                <div v-if="caseStudy.results" class="case-study-results">
                  <span class="results-label">Results:</span>
                  <span class="results-text">{{ caseStudy.results }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Back to Home Button -->
        <div class="text-center mt-5">
          <router-link to="/" class="back-btn">
            <i class="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </router-link>
        </div>
      </div>
    </section>

    <ProjectModal
      :show="isModalOpen"
      :project="selectedCaseStudy"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectModal from '../components/ProjectModal.vue'
import caseStudiesData from '../data/caseStudies.json'

const allCaseStudies = ref(caseStudiesData.caseStudies)

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
.case-studies-page {
  background: #ffffff;
  min-height: 100vh;
}

/* Page Hero */
.page-hero {
  padding: 120px 0 80px;
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
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #4f7c82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #4f7c82 0%, #6a9ca3 100%);
  margin: 0 auto;
  border-radius: 2px;
}

/* Case Studies Grid Section */
.case-studies-grid-section {
  padding: 80px 0;
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
  transform: scale(1.1);
}

/* Overlay */
.case-study-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(79, 124, 130, 0.95), rgba(106, 156, 163, 0.95));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.case-study-card:hover .case-study-overlay {
  opacity: 1;
}

.overlay-buttons {
  display: flex;
  gap: 1rem;
}

.overlay-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-btn {
  background: #ffffff;
  color: #4f7c82;
}

.demo-btn:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.code-btn {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.code-btn:hover {
  background: #ffffff;
  color: #4f7c82;
  transform: translateY(-2px);
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
  margin-bottom: 0.75rem;
  padding-top: 0.75rem;
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

/* Results Info */
.case-study-results {
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(79, 124, 130, 0.1);
}

.results-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  margin-right: 0.5rem;
}

.results-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4f7c82;
}

/* Back Button */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: #4f7c82;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: 50px;
  border: 2px solid #4f7c82;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(79, 124, 130, 0.3);
}

.back-btn i {
  transition: transform 0.3s ease;
}

.back-btn:hover i {
  transform: translateX(-5px);
}

/* Responsive Design */
@media (max-width: 991px) {
  .hero-title {
    font-size: 2.75rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .case-studies-grid-section {
    padding: 60px 0;
  }
}

@media (max-width: 767px) {
  .page-hero {
    padding: 100px 0 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .case-studies-grid-section {
    padding: 40px 0;
  }

  .case-study-image-wrapper {
    height: 200px;
  }

  .overlay-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  .back-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>

