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
            <span class="close-icon">×</span>
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
  border-radius: 10px;
  width: min(1100px, 100%);
  max-height: 95vh;
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
  background: #4f7c82;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease;
}

.close-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.close-btn:hover {
  transform: rotate(90deg) scale(1.05);
  background: #3b6167;
}

.modal-image-wrapper {
  width: 100%;
  height: 65vh;
  overflow-y: auto;
  overflow-x: hidden;
  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #4f7c82 rgba(79, 124, 130, 0.1);
}

/* Webkit scrollbar (Chrome, Safari, Edge) */
.modal-image-wrapper::-webkit-scrollbar {
  width: 10px;
}

.modal-image-wrapper::-webkit-scrollbar-track {
  background: rgba(79, 124, 130, 0.08);
  border-radius: 10px;
}

.modal-image-wrapper::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #4f7c82 0%, #3b6167 100%);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.modal-image-wrapper::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #3b6167 0%, #2d4a4f 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(79, 124, 130, 0.3);
}

.modal-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.modal-content {
  padding: 2.5rem;
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
    border-radius: 10px;
    max-height: 95vh;
  }

  .modal-image-wrapper {
    height: 55vh;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }
}
</style>


