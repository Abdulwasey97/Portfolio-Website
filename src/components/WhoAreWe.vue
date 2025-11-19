<template>
  <section class="who-are-we-section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left side - Title -->
        <div class="col-12 col-lg-5 mb-4 mb-lg-0">
          <p class="section-subtitle">WHO ARE WE?</p>
          <h2 class="section-title">
            Innovative tech<br>
            solutions for<br>
            tomorrow <span class="weather-icons">💡</span>
          </h2>
        </div>
        
        <!-- Right side - Description -->
        <div class="col-12 col-lg-7">
          <div class="description-content">
            <p class="description-text">
              We are a cutting-edge technology company dedicated to transforming businesses 
              through innovative digital solutions. Our team of expert developers and designers 
              specialize in creating custom software, web applications, and mobile apps that 
              drive growth and efficiency. We believe in delivering <strong>excellence</strong> 
              through every project, combining creativity with technical expertise to help our 
              clients stay ahead in the digital age. From startups to enterprises, we partner 
              with businesses to turn their vision into reality.
            </p>
            <router-link to="/about-us" class="btn-learn-more">
              Learn More 
              <span class="arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PRIMARY_COLOR } from '../config/colors'
</script>

<style scoped>
.who-are-we-section {
  background: #ffffff;
  padding: 6rem 0;
  position: relative;
}

.section-subtitle {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #999999;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #2d2d2d;
  margin-bottom: 0;
}

.weather-icons {
  font-size: 2.5rem;
  vertical-align: middle;
  display: inline-block;
  margin-left: 0.5rem;
}

.description-content {
  background: transparent;
  padding-left: 2rem;
}

.description-text {
  color: #666666;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: justify;
}

.description-text strong {
  color: #4f7c82;
  font-weight: 700;
}

.btn-learn-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.575rem 2rem;
  background: #4f7c82;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(79, 124, 130, 0.2);
}

.btn-learn-more:hover {
  background: #3e6269;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 124, 130, 0.3);
  color: #ffffff;
}

.btn-learn-more .arrow {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.btn-learn-more:hover .arrow {
  transform: translateX(5px);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .who-are-we-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .description-content {
    padding-left: 0;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .who-are-we-section {
    padding: 3rem 0;
  }
  
  .row.align-items-center {
    text-align: center;
  }
  
  .section-subtitle {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin-bottom: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 2rem;
    text-align: left;
  }
  
  .weather-icons {
    font-size: 2rem;
    margin-left: 0.25rem;
  }
  
  .description-content {
    padding-left: 0;
    margin-top: 0;
    text-align: left;
  }
  
  .description-text {
    font-size: 0.95rem;
    line-height: 1.7;
    text-align: left;
    margin-bottom: 2rem;
  }
  
  .btn-learn-more {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
    width: auto;
    display: inline-flex;
  }
}

@media (max-width: 576px) {
  .who-are-we-section {
    padding: 2.5rem 0;
  }
  
  .section-subtitle {
    font-size: 0.75rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
  
  .weather-icons {
    font-size: 1.5rem;
    margin-left: 0.25rem;
  }
  
  .description-content {
    padding-left: 0;
  }
  
  .description-text {
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .btn-learn-more {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
}
</style>

