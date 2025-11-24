<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">A showcase of my recent work and creative solutions</p>
        <div class="title-underline"></div>
      </div>

      <!-- Projects Grid (3 columns) -->
      <div class="row g-4 mb-5">
        <div class="col-lg-4 col-md-6" v-for="project in featuredProjects" :key="project.id">
          <div
            class="project-card"
            @click="openModal(project)"
            @keydown.enter.prevent="openModal(project)"
            @keydown.space.prevent="openModal(project)"
            role="button"
            tabindex="0"
          >
            <div class="project-image-wrapper">
              <img 
                :src="project.image" 
                class="project-image" 
                :alt="project.title"
              />
              <div class="project-overlay">
                <div class="overlay-buttons">
                  <a :href="project.demo" class="overlay-btn demo-btn" @click.stop>
                    <i class="fas fa-external-link-alt"></i> Demo
                  </a>
                  <a :href="project.code" class="overlay-btn code-btn" @click.stop>
                    <i class="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="tech-stack">
                <span class="tech-label">Tech Stack:</span>
                <div class="tech-tags">
                  <span 
                    v-for="tech in project.technologies" 
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
        <router-link to="/projects" class="see-more-btn">
          <span>See More Projects</span>
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>

    <ProjectModal
      :show="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectModal from './ProjectModal.vue'

// Featured projects - showing only 3 on home page
const featuredProjects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with secure payment integration, real-time inventory management, and an intuitive user interface.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    code: '#'
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A modern productivity application featuring real-time collaboration, drag-and-drop functionality, and comprehensive project tracking.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    demo: '#',
    code: '#'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'An elegant weather application with accurate forecasts, interactive maps, location-based updates, and beautiful data visualization.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Bootstrap'],
    demo: '#',
    code: '#'
  }
])

const selectedProject = ref(null)
const isModalOpen = ref(false)

const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
  background: #ffffff;
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

/* Project Card */
.project-card {
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

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(79, 124, 130, 0.15);
}

/* Project Image */
.project-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

/* Overlay */
.project-overlay {
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

.project-card:hover .project-overlay {
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

/* Project Content */
.project-content {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.project-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}

/* Tech Stack */
.tech-stack {
  margin-top: auto;
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

  .project-card {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 767px) {
  .projects-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .project-image-wrapper {
    height: 200px;
  }

  .overlay-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  .see-more-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>

