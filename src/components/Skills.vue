<template>
  <section id="skills" class="skills-section py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 fw-bold">My Skills</h2>
          <p class="text-muted">Technologies I work with</p>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="skill in skills" :key="skill.name">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="skill-icon me-3">
                  <i :class="skill.icon"></i>
                </div>
                <h5 class="card-title mb-0">{{ skill.name }}</h5>
              </div>
              <div class="progress" style="height: 10px;">
                <div 
                  class="progress-bar" 
                  role="progressbar" 
                  :style="{ width: skill.level + '%' }"
                  :aria-valuenow="skill.level" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="text-muted mt-2 small">{{ skill.level }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'HTML/CSS', level: 90, icon: '🎨' },
  { name: 'JavaScript', level: 85, icon: '⚡' },
  { name: 'Vue.js', level: 80, icon: '💚' },
  { name: 'React', level: 75, icon: '⚛️' },
  { name: 'Node.js', level: 70, icon: '🟢' },
  { name: 'Database', level: 75, icon: '🗄️' }
])
</script>

<style scoped>
.skills-section {
  padding: 100px 0;
}

.skill-icon {
  font-size: 2rem;
}

.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}
</style>

