<template>
  <section id="about" class="about-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 fw-bold">About Me</h2>
          <p class="text-muted">Get to know me better</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4">
          <img 
            src="https://via.placeholder.com/500x400" 
            alt="About" 
            class="img-fluid rounded shadow"
          />
        </div>
        <div class="col-lg-6">
          <h3 class="h2 mb-4">I'm a passionate developer</h3>
          <p class="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris.
          </p>
          <p class="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div class="row">
            <div class="col-md-6 mb-3">
              <strong>Name:</strong> Your Name
            </div>
            <div class="col-md-6 mb-3">
              <strong>Email:</strong> your.email@example.com
            </div>
            <div class="col-md-6 mb-3">
              <strong>Location:</strong> Your City, Country
            </div>
            <div class="col-md-6 mb-3">
              <strong>Phone:</strong> +123 456 7890
            </div>
          </div>
          <a href="#" class="btn btn-primary mt-3">Download CV</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  padding: 100px 0;
}
</style>

