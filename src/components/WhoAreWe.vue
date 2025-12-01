<template>
  <section id="who-we-are" class="who-are-we-section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left side - Title -->
        <div class="col-lg-5 mb-4 mb-lg-0">
          <p class="section-subtitle">WHO ARE WE?</p>
          <h3 class="section-title">
            Empowering businesses with AI automation, custom software, <br>and web solutions to boost innovation and
            efficiency.<br>
          </h3>
        </div>

        <!-- Right side - Description -->
        <div class="col-lg-7">
          <div class="description-content">
            <p class="description-text">
              At <strong>CodeWorld360</strong>, we are a forward-thinking technology firm committed to transforming businesses
              with innovative digital solutions. Our team of skilled developers and designers specializes in crafting
              custom software, web applications, and mobile apps that drive growth and operational efficiency. We
              combine creativity with technical expertise to deliver excellence in every project, helping our clients
              stay ahead in the digital era. From startups to established enterprises, we partner with businesses to
              bring their vision to life.
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
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #2d2d2d;
  margin-bottom: 0;
  justify-content: left;
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

  .section-title {
    font-size: 2rem;
  }

  .weather-icons {
    font-size: 2rem;
  }

  .description-text {
    font-size: 0.95rem;
    text-align: left;
  }

  .btn-learn-more {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.75rem;
  }

  .weather-icons {
    font-size: 1.5rem;
  }

  .description-text {
    font-size: 0.9rem;
  }
}
</style>
