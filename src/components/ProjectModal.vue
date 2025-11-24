<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="show && project"
        class="project-modal-overlay"
        @click.self="handleClose"
      >
        <div class="project-modal">
          <button class="close-btn" @click="handleClose" aria-label="Close project details">
            <i class="fas fa-times"></i>
          </button>

          <div class="modal-image-wrapper">
            <img
              :src="project.image"
              class="modal-image"
              :alt="project.title"
            />
          </div>

          <div class="modal-content">
            <p class="modal-label">Project Spotlight</p>
            <h3 class="modal-title">{{ project.title }}</h3>
            <p class="modal-description">{{ project.description }}</p>

            <div class="modal-tech-stack" v-if="project.technologies?.length">
              <span class="tech-label">Tech Stack</span>
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
    </transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<style scoped>
.project-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 13, 22, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1.5rem;
  backdrop-filter: blur(4px);
}

.project-modal {
  background: #ffffff;
  border-radius: 24px;
  width: min(900px, 100%);
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(11, 31, 53, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #4f7c82;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease;
}

.close-btn:hover {
  transform: rotate(90deg) scale(1.05);
  background: #f4f6f8;
}

.modal-image-wrapper {
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.modal-content {
  padding: 2.5rem;
  overflow-y: auto;
}

.modal-label {
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #8aa4a9;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.modal-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.modal-description {
  color: #4d4d4d;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.75rem;
}

.modal-tech-stack {
  border-top: 1px solid rgba(79, 124, 130, 0.15);
  padding-top: 1.5rem;
}

.tech-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #4f7c82;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  display: block;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  background: rgba(79, 124, 130, 0.08);
  color: #4f7c82;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(79, 124, 130, 0.15);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .project-modal {
    border-radius: 18px;
  }

  .modal-image-wrapper {
    height: 220px;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }
}
</style>


