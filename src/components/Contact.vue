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
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name" class="form-label">Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    v-model="formData.name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="formData.email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="phone" class="form-label">Phone</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="phone" 
                    v-model="formData.phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">How can we help?</label>
                  <textarea 
                    class="form-control" 
                    id="message" 
                    rows="5"
                    v-model="formData.message"
                    placeholder="Tell us about your project or question..."
                    required
                  ></textarea>
                </div>

                <button type="submit" class="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  const to = 'abdulwasayjaved@gmail.com,hassanofficial525@gmail.com'
  const subject = `New contact form message from ${formData.value.name || 'Portfolio Website'}`
  const bodyLines = [
    `Name: ${formData.value.name}`,
    `Email: ${formData.value.email}`,
    `Phone: ${formData.value.phone || 'N/A'}`,
    '',
    'Message:',
    formData.value.message
  ]

  const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`

  window.location.href = mailtoLink

  alert('Opening your email client to send the message.')

  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
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

