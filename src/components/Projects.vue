<template>
  <section id="projects" class="projects-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 fw-bold">My Projects</h2>
          <p class="text-muted">Recent work I'm proud of</p>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
          <div class="card h-100 border-0 shadow-sm">
            <img 
              :src="project.image" 
              class="card-img-top" 
              :alt="project.title"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ project.title }}</h5>
              <p class="card-text text-muted">{{ project.description }}</p>
              <div class="mb-3">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="badge bg-primary me-1 mb-1"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="d-flex gap-2">
                <a :href="project.demo" class="btn btn-primary btn-sm">View Demo</a>
                <a :href="project.code" class="btn btn-outline-primary btn-sm">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A full-featured e-commerce platform with shopping cart and payment integration.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    demo: '#',
    code: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app to manage tasks and projects with real-time updates.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Firebase', 'CSS'],
    demo: '#',
    code: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with forecasts and location tracking.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['JavaScript', 'API', 'Bootstrap'],
    demo: '#',
    code: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Vue.js', 'Bootstrap', 'Vite'],
    demo: '#',
    code: '#'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A blogging platform with user authentication and content management.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Node.js', 'Express', 'MySQL'],
    demo: '#',
    code: '#'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with private and group messaging features.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Socket.io', 'React', 'Node.js'],
    demo: '#',
    code: '#'
  }
])
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
}

.card {
  transition: transform 0.3s;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>

