<template>
  <div class="about-us-page">
    <section class="about-hero">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="page-title">About Us</h1>
            <p class="page-subtitle">Learn more about WeatherWalay - Pakistan's first private weather company</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-content py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="section-heading">Our Mission</h2>
            <p class="section-text">
              At WeatherWalay, we aspire to become Pakistan's go-to and most reliable Digital 
              Weather service provider. We aim to provide our users with Accurate and Hyper Local 
              weather information through implementing Automated Weather Stations (AWS).
            </p>
            <p class="section-text">
              Our ambition is to provide you with 100% accuracy in weather nowcasts and 95% accuracy 
              in weather forecasts. We believe that accurate weather information is crucial for 
              daily planning, agriculture, transportation, and emergency preparedness.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="info-box">
              <div class="info-icon">🌤️</div>
              <h3 class="info-title">Hyper Local Weather</h3>
              <p class="info-text">
                Get precise weather information for your exact location using our network of 
                Automated Weather Stations across Pakistan.
              </p>
            </div>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0 order-lg-2">
            <h2 class="section-heading">Our Technology</h2>
            <p class="section-text">
              We utilize state-of-the-art Automated Weather Stations (AWS) deployed across 
              Pakistan to collect real-time weather data. Our advanced algorithms process this 
              data to provide you with the most accurate weather forecasts available.
            </p>
            <p class="section-text">
              Our infrastructure includes temperature sensors, humidity monitors, wind speed 
              detectors, rainfall gauges, and atmospheric pressure sensors, all working together 
              to give you comprehensive weather insights.
            </p>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="info-box">
              <div class="info-icon">📡</div>
              <h3 class="info-title">Advanced Monitoring</h3>
              <p class="info-text">
                Real-time data collection and processing from multiple weather stations ensures 
                the highest accuracy in our forecasts.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="stats-section">
              <h2 class="section-heading text-center mb-5">Why Choose WeatherWalay?</h2>
              <div class="row text-center">
                <div class="col-md-4 mb-4">
                  <div class="stat-card">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Nowcast Accuracy</div>
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="stat-card">
                    <div class="stat-number">95%</div>
                    <div class="stat-label">Forecast Accuracy</div>
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="stat-card">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Real-time Updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12 text-center">
            <h2 class="section-heading mb-4">Ready to Get Started?</h2>
            <p class="section-text mb-4">
              Join thousands of Pakistanis who trust WeatherWalay for their daily weather information.
            </p>
            <router-link to="/" class="btn-back-home">
              Back to Home
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Scroll to top when component is mounted
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.about-us-page {
  min-height: 100vh;
  background: #ffffff;
}

.about-hero {
  background: linear-gradient(135deg, #4f7c82 0%, #6a9ca3 100%);
  padding: 8rem 0 4rem;
  margin-top: 0;
  color: #ffffff;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.page-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
}

.about-content {
  padding: 4rem 0;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 1.5rem;
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666666;
  margin-bottom: 1.5rem;
}

.info-box {
  background: #f8f9fa;
  border-radius: 16px;
  padding: 3rem;
  height: 100%;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.info-box:hover {
  border-color: #4f7c82;
  box-shadow: 0 8px 24px rgba(79, 124, 130, 0.15);
  transform: translateY(-5px);
}

.info-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.info-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #4f7c82;
  margin-bottom: 1rem;
}

.info-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #666666;
}

.stats-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
  margin-top: 3rem;
}

.stat-card {
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(79, 124, 130, 0.2);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #4f7c82;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #666666;
  font-weight: 500;
}

.btn-back-home {
  display: inline-block;
  padding: 1rem 3rem;
  background: #4f7c82;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(79, 124, 130, 0.2);
}

.btn-back-home:hover {
  background: #3e6269;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 124, 130, 0.3);
  color: #ffffff;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .about-hero {
    padding: 6rem 0 3rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .section-heading {
    font-size: 2rem;
  }

  .info-box {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .about-hero {
    padding: 5rem 0 2.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .section-heading {
    font-size: 1.75rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .info-icon {
    font-size: 3rem;
  }

  .info-title {
    font-size: 1.5rem;
  }

  .stats-section {
    padding: 3rem 1.5rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 1.75rem;
  }

  .info-box {
    padding: 1.5rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>

