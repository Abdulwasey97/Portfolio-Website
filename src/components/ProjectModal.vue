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
  background: rgba(10, 13, 22, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 0;
  backdrop-filter: blur(4px);
}

.project-modal {
  background: #ffffff;
  border-radius: 10px;
  width: 80%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: none;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(255, 255, 255, 0.2);
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
  max-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem;
  box-sizing: border-box;
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
  object-fit: contain;
  display: block;
  border: 2px solid rgba(79, 124, 130, 0.2);
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
    width: 80%;
  }
  
  .modal-image-wrapper {
    padding: 1rem;
    max-height: 90vh;
  }
  
  .close-btn {
    top: 0.75rem;
    right: 0.75rem;
    width: 36px;
    height: 36px;
  }
  
  .close-icon {
    font-size: 1.2rem;
  }
}
</style>


