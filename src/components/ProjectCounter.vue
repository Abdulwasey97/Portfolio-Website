<template>
  <section class="counter-section">
    <div class="container">
      <div class="counter-heading text-center">
        <h2 class="counter-title">
         You Convey the idea  <span>We deliver a refined interface</span>
        </h2>
      
      </div>

      <div class="counter-wrapper row g-4">
        <div class="col-md-4">
          <div class="counter-card">
            <h3 class="counter-number">
              2020
            </h3>
            <p class="counter-label">
              Working from
            </p>
            <p class="counter-helper">
              Building digital products since 2020
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="counter-card">
            <h3 class="counter-number">
              25+
            </h3>
            <p class="counter-label">
              Happy clients
            </p>
            <p class="counter-helper">
              Collaborating with brands across industries
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="counter-card">
            <h3 class="counter-number">
              60+
            </h3>
            <p class="counter-label">
              Projects completed
            </p>
            <p class="counter-helper">
              From MVPs to full-scale products successfully shipped
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.counter-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
}

.counter-wrapper {
  align-items: stretch;
}

.counter-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 24px;
  text-align: left;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.counter-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 0.35rem;
}

.counter-label {
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4f7c82;
  margin-bottom: 0.25rem;
}

.counter-helper {
  font-size: 0.9rem;
  color: #718096;
  margin: 0;
}

.counter-heading {
  margin-bottom: 40px;
}

.counter-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.counter-title span {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.counter-subtitle {
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.98rem;
  color: #718096;
}

@media (max-width: 991px) {
  .counter-section {
    padding: 60px 0;
  }

  .counter-card {
    padding: 24px 22px;
  }

  .counter-number {
    font-size: 2rem;
  }
}

@media (max-width: 767px) {
  .counter-section {
    padding: 50px 0;
  }

  .counter-card {
    text-align: center;
  }
}
</style>


