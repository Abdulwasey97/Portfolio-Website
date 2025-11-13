<template>
  <section id="home" class="hero-section py-5 bg-light">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-6">
          <h1 class="display-3 fw-bold mb-3">Hi, I'm <span class="text-primary">Your Name</span></h1>
          <h2 class="h3 text-muted mb-4">Full Stack Developer</h2>
          <p class="lead mb-4">
            I create beautiful and functional websites and applications. 
            Passionate about clean code and great user experiences.
          </p>
          <div class="d-flex gap-3">
            <a href="#contact" class="btn btn-primary btn-lg">Get In Touch</a>
            <a href="#projects" class="btn btn-outline-primary btn-lg">View Work</a>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <div class="hero-image">
            <img 
              src="https://via.placeholder.com/400" 
              alt="Profile" 
              class="img-fluid rounded-circle shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-image img {
  max-width: 400px;
  width: 100%;
}
</style>

