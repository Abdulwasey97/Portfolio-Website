<template>
  <section id="contact" class="contact-section py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 fw-bold">Get In Touch</h2>
          <p class="text-muted">Let's work together</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="row g-4 mb-5">
            <div class="col-md-4 text-center">
              <div class="contact-info p-4 bg-white rounded shadow-sm h-100">
                <div class="icon mb-3">
                  <i class="fs-2">📧</i>
                </div>
                <h5>Email</h5>
                <p class="text-muted">your.email@example.com</p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="contact-info p-4 bg-white rounded shadow-sm h-100">
                <div class="icon mb-3">
                  <i class="fs-2">📱</i>
                </div>
                <h5>Phone</h5>
                <p class="text-muted">+123 456 7890</p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="contact-info p-4 bg-white rounded shadow-sm h-100">
                <div class="icon mb-3">
                  <i class="fs-2">📍</i>
                </div>
                <h5>Location</h5>
                <p class="text-muted">Your City, Country</p>
              </div>
            </div>
          </div>
          
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <form @submit.prevent="submitForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name" 
                      v-model="formData.name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email" 
                      v-model="formData.email"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label">Subject</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="subject" 
                      v-model="formData.subject"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label">Message</label>
                    <textarea 
                      class="form-control" 
                      id="message" 
                      rows="5"
                      v-model="formData.message"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-lg w-100">
                      Send Message
                    </button>
                  </div>
                </div>
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
  subject: '',
  message: ''
})

const submitForm = () => {
  alert('Form submitted! (This is a demo)')
  console.log('Form data:', formData.value)
  // Reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-section {
  padding: 100px 0;
}

.contact-info {
  transition: transform 0.3s;
}

.contact-info:hover {
  transform: translateY(-5px);
}
</style>

