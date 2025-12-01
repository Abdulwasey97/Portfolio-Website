<template>
  <Teleport to="body" v-if="show">
    <transition name="modal-fade">
      <div
        class="project-modal-overlay"
        @click.self="handleClose"
      >
        <div class="project-modal simple-modal error">
          <button class="close-btn" @click.stop="handleClose" aria-label="Close error message">
            <span class="close-icon">×</span>
          </button>

          <div class="modal-content">
            <p class="modal-label">Error</p>
            <h3 class="modal-title">Something went wrong</h3>
            <p class="modal-text">
              {{ message || 'We could not save your message. Please try again later.' }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
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
  width: min(600px, 100%);
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
  z-index: 10; /* Ensure button is on top */
}

.close-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.close-btn:hover {
  transform: rotate(90deg) scale(1.05);
  background: #3b6167;
}

.modal-content {
  padding: 2.5rem;
}

.modal-label {
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #f56565;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.modal-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.modal-text {
  color: #4d4d4d;
  font-size: 1rem;
  line-height: 1.8;
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

  .modal-content {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }
}
</style>
