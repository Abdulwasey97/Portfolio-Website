<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">All Projects</h1>
          <p class="hero-subtitle">Explore my complete portfolio of creative solutions and innovative work</p>
          <div class="title-underline"></div>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-grid-section">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="project in allProjects" :key="project.id">
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
      :project="selectedProject"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectModal from '../components/ProjectModal.vue'

const allProjects = ref([
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
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media analytics platform with multi-platform integration, real-time metrics, and automated reporting features.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Angular', 'TypeScript', 'D3.js', 'Express'],
    demo: '#',
    code: '#'
  },
  {
    id: 5,
    title: 'Blog Content Management System',
    description: 'A powerful CMS with markdown support, media management, SEO optimization tools, and multi-user collaboration capabilities.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    technologies: ['Node.js', 'Express', 'MySQL', 'TinyMCE'],
    demo: '#',
    code: '#'
  },
  {
    id: 6,
    title: 'Real-Time Chat Application',
    description: 'A feature-rich messaging platform with private/group chats, file sharing, video calls, and end-to-end encryption.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
    technologies: ['Socket.io', 'React', 'Node.js', 'WebRTC'],
    demo: '#',
    code: '#'
  },
  {
    id: 7,
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness application with workout plans, nutrition tracking, progress visualization, and social features.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    demo: '#',
    code: '#'
  },
  {
    id: 8,
    title: 'Recipe Discovery Platform',
    description: 'A culinary platform featuring recipe search, meal planning, grocery list generation, and cooking video tutorials.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3'],
    demo: '#',
    code: '#'
  },
  {
    id: 9,
    title: 'AI Image Generator',
    description: 'An innovative tool powered by machine learning to generate unique images from text descriptions using advanced AI models.',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=600&fit=crop',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    demo: '#',
    code: '#'
  },
  {
    id: 10,
    title: 'Project Management Tool',
    description: 'An enterprise-grade project management solution with Gantt charts, resource allocation, time tracking, and reporting.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Celery'],
    demo: '#',
    code: '#'
  },
  {
    id: 11,
    title: 'Music Streaming Service',
    description: 'A modern music streaming platform with personalized playlists, offline mode, lyrics display, and social sharing features.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    demo: '#',
    code: '#'
  },
  {
    id: 12,
    title: 'Travel Booking System',
    description: 'A comprehensive travel platform for booking flights, hotels, and activities with real-time availability and pricing.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    technologies: ['Angular', 'Spring Boot', 'MongoDB', 'Stripe'],
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
.projects-page {
  background: #ffffff;
  min-height: 100vh;
}

/* Page Hero */
.page-hero {
  padding: 120px 0 80px;
  /* background: linear-gradient(135deg, rgba(79, 124, 130, 0.05) 0%, rgba(106, 156, 163, 0.05) 100%); */
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

/* Projects Grid Section */
.projects-grid-section {
  padding: 80px 0;
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

  .projects-grid-section {
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

  .projects-grid-section {
    padding: 40px 0;
  }

  .project-image-wrapper {
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

