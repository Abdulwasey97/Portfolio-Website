<template>
  <div class="about-us-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">About Us</h1>
        
          <div class="title-underline"></div>
        </div>
      </div>
    </section>

    <!-- About Content Section -->
    <section class="about-content-section">
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

       

        <!-- Leadership Section -->
        <section class="leadership-section">
          <div class="text-center mb-5">
            <h2 class="leadership-title">
              Our <span>Leadership</span>
            </h2>
         
          </div>

          <div class="row justify-content-center g-4">
            <div class="col-lg-5 col-md-6">
              <div class="leader-card">
                <div class="leader-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Leadership profile"
                    class="leader-image"
                  />
                </div>
                <div class="leader-card-body">
                  <h3 class="leader-name">Abullah Riaz</h3>
                  <p class="leader-role">Co‑Founder / CEO</p>
                  <p class="leader-text">
                    Umair brings extensive experience in research, automation, and applied data science.
                    He is dedicated to making hyper local and highly accurate weather information accessible
                    for individuals, businesses, and public services across Pakistan.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-5 col-md-6">
              <div class="leader-card">
                <div class="leader-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Leadership profile"
                    class="leader-image"
                  />
                </div>
                <div class="leader-card-body">
                  <h3 class="leader-name">Hassan Ali Shoaib</h3>
                  <p class="leader-role">Co‑Founder / CTO</p>
                  <p class="leader-text">
                    Usama leads the technology vision at WeatherWalay, building scalable platforms,
                    real‑time data pipelines, and intuitive user experiences that turn complex
                    meteorological data into everyday decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Back to Home Text Link -->
        <div class="text-center mt-5">
          <router-link to="/" class="back-home-link">
            <span class="back-home-text">Back to Home</span>
            <span class="back-home-arrow-line"></span>
          </router-link>
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
  background: #ffffff;
  min-height: 100vh;
}

/* Page Hero */
.page-hero {
  padding: 120px 0 80px;
  position: relative;
}

.page-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f7c82' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #4f7c82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #4f7c82 0%, #6a9ca3 100%);
  margin: 0 auto;
  border-radius: 2px;
}

/* About Content Section */
.about-content-section {
  padding: 80px 0;
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

/* Leadership */
.leadership-section {
  margin-top: 5rem;
  margin-bottom: 2rem;
  position: relative;
}

.leadership-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.leadership-title span {
  background: linear-gradient(135deg, #1a1a1a 0%, #4f7c82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.leadership-subtitle {
  max-width: 700px;
  margin: 0 auto;
  color: #6b7280;
  font-size: 1.05rem;
}

.leader-card {
  background: #f8fbfc;
  border-radius: 24px;
  padding: 3.5rem 2.5rem 2.5rem;
  position: relative;
  box-shadow: 0 18px 45px rgba(79, 124, 130, 0.12);
  border: 1px solid #d7e4e6;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease,
    background-color 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 55px rgba(79, 124, 130, 0.28);
  border-color: #4f7c82;
  background: #f2f8f9;
}

.leader-image-wrapper {
  position: absolute;
  top: -72px;
  left: 50%;
  transform: translateX(-50%);
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f7c82, #6a9ca3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.leader-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffffff;
}

.leader-card-body {
  margin-top: 3rem;
}

.leader-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.leader-role {
  font-size: 0.95rem;
  font-weight: 500;
  color: #4f7c82;
  margin-bottom: 1.25rem;
}

.leader-text {
  font-size: 0.98rem;
  line-height: 1.7;
  color: #4b5563;
}

/* Story Cards */
.story-row {
  margin-top: 1rem;
}

.story-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.story-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 35px rgba(79, 124, 130, 0.25);
}

.story-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
}

.story-image-one {
  background-image: linear-gradient(135deg, rgba(79, 124, 130, 0.15), rgba(106, 156, 163, 0.45)),
    url("https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200");
}

.story-image-two {
  background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(79, 124, 130, 0.5)),
    url("https://images.pexels.com/photos/1112648/pexels-photo-1112648.jpeg?auto=compress&cs=tinysrgb&w=1200");
}

.story-content {
  padding: 1.75rem 1.75rem 2rem;
}

.story-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 0.75rem;
}

.story-text {
  font-size: 1.02rem;
  line-height: 1.7;
  color: #666666;
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

/* Back Home Text Link */
.back-home-link {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  color: #4f7c82;
  text-align: center;
  gap: 0.15rem;
}

.back-home-text {
  font-weight: 600;
  font-size: 1.05rem;
}

.back-home-arrow-line {
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #4f7c82;
}

.back-home-arrow-line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.6em;
  height: 0.6em;
  border-top: 2px solid #4f7c82;
  border-left: 2px solid #4f7c82;
  transform: translateY(-50%) rotate(-45deg);
}

.back-home-link:hover {
  color: #2f555a;
}

/* Responsive Design */
@media (max-width: 991px) {
  .hero-title {
    font-size: 2.75rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .about-content-section {
    padding: 60px 0;
  }

  .section-heading {
    font-size: 2rem;
  }

  .info-box {
    padding: 2rem;
  }
}

@media (max-width: 767px) {
  .page-hero {
    padding: 100px 0 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .about-content-section {
    padding: 40px 0;
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

  .back-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
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

