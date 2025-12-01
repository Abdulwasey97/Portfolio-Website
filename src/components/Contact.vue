<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <div class="row g-0">
          <!-- Left Column - Info Section -->
          <div class="col-lg-5">
            <div class="info-section">
             
              <h2 class="contact-title">
                Let's create something exceptional together                
              </h2>
              <p class="contact-description">
                Share the details of your project or ask us anything. Our team will respond within
                one business day.
              </p>
              <!-- <div class="contact-email">
                <i class="fas fa-envelope"></i>
                <span>support@myportfolio.com</span>
              </div> -->
            </div>
          </div>

          <!-- Right Column - Form Section -->
          <div class="col-lg-7">
            <div class="form-section">
              <form @submit.prevent="submitForm" novalidate>
                <div class="form-group">
                  <label for="name" class="form-label">Name</label>
                  <input 
                    type="text" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    id="name" 
                    v-model="formData.name"
                    placeholder="Enter your name"
                    @input="errors.name = ''"
                  />
                  <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    id="email" 
                    v-model="formData.email"
                    placeholder="Enter your email"
                    @input="errors.email = ''"
                  />
                  <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
                </div>

                <div class="form-group">
                  <label for="phone" class="form-label">Phone</label>
                  <input 
                    type="tel" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.phone }"
                    id="phone" 
                    v-model="formData.phone"
                    placeholder="Enter your phone number"
                    @input="errors.phone = ''"
                  />
                  <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">How can we help?</label>
                  <textarea 
                    class="form-control"
                    :class="{ 'is-invalid': errors.message }"
                    id="message" 
                    rows="5"
                    v-model="formData.message"
                    placeholder="Tell us about your project or question..."
                    @input="errors.message = ''"
                  ></textarea>
                  <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
                </div>

                <button type="submit" class="submit-btn" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal Component -->
    <SuccessModal
      :show="showSuccessModal"
      @close="showSuccessModal = false"
    />

    <!-- Error Modal Component -->
    <ErrorModal
      :show="showErrorModal"
      :message="errorMessage || 'We could not save your message. Please try again later.'"
      @close="showErrorModal = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SuccessModal from './SuccessModal.vue'
import ErrorModal from './ErrorModal.vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccessModal = ref(false)
const showErrorModal = ref(false)
const errorMessage = ref('')

const validateForm = () => {
  const newErrors = {}
  
  if (!formData.value.name.trim()) {
    newErrors.name = 'Name is required'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!emailRegex.test(formData.value.email)) {
    newErrors.email = 'Please enter a valid email address'
  }

  if (formData.value.phone && formData.value.phone.trim()) {
     // Basic phone validation: check if it has at least 7 digits
     const phoneDigits = formData.value.phone.replace(/\D/g, '')
     if (phoneDigits.length < 7) {
        newErrors.phone = 'Please enter a valid phone number'
     }
  }

  if (!formData.value.message.trim()) {
    newErrors.message = 'Message is required'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  showSuccessModal.value = false
  showErrorModal.value = false
  errorMessage.value = ''

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone,
        message: formData.value.message
      })
    })

    if (!response.ok) {
      throw new Error('Failed to submit form. Server responded with status ' + response.status)
    }

    showSuccessModal.value = true

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    errors.value = {}
  } catch (error) {
    console.error(error)

    // Handle network / connection errors (like ERR_CONNECTION_REFUSED)
    if (error instanceof TypeError || (error?.message && error.message.includes('Failed to fetch'))) {
      errorMessage.value =
        'Cannot reach the server. Please make sure the backend (npm run server) is running and try again.'
    } else {
      errorMessage.value = error?.message || 'An unexpected error occurred while saving your message.'
    }

    showErrorModal.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.contact-wrapper {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

/* Left Info Section */
.info-section {
  padding: 45px 40px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4f7c82;
  margin-bottom: 1rem;
}

.contact-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: #2d3748;
  line-height: 1.4;
  margin-bottom: 1.25rem;
}

.emoji {
  font-size: 1.85rem;
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

.contact-description {
  font-size: 0.95rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.contact-email {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4f7c82;
  font-size: 1rem;
  font-weight: 500;
}

.contact-email i {
  font-size: 1.1rem;
}

/* Right Form Section */
.form-section {
  padding: 45px 40px;
  background: #ffffff;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 0.95rem;
  color: #2d3748;
  background-color: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-control::placeholder {
  color: #a0aec0;
}

.form-control:focus {
  outline: none;
  background-color: #ffffff;
  border-color: #4f7c82;
  box-shadow: 0 0 0 3px rgba(79, 124, 130, 0.1);
}

.form-control:hover {
  border-color: #cbd5e0;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 124, 130, 0.3);
  margin-top: 0.5rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 124, 130, 0.4);
  background: linear-gradient(135deg, #3e6269 0%, #4f7c82 100%);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.error-message {
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.form-control.is-invalid {
  border-color: #e53e3e;
  background-color: #fff5f5;
}

.form-control.is-invalid:focus {
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
}

/* Responsive Design */
@media (max-width: 991px) {
  .info-section,
  .form-section {
    padding: 40px 35px;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .contact-wrapper {
    border-radius: 15px;
  }
}

@media (max-width: 767px) {
  .contact-section {
    padding: 60px 0;
  }

  .info-section,
  .form-section {
    padding: 30px 25px;
  }

  .contact-title {
    font-size: 1.5rem;
  }

  .contact-description {
    font-size: 0.95rem;
  }

  .contact-wrapper {
    border-radius: 12px;
    margin: 0 15px;
  }

  .form-control {
    padding: 0.75rem 0.875rem;
    font-size: 0.9rem;
  }

  .submit-btn {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 575px) {
  .emoji {
    display: block;
    margin-top: 0.5rem;
  }
}
</style>
