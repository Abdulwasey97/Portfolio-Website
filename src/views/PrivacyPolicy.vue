<template>
  <div class="legal-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">Privacy Policy</h1>
          <p class="hero-subtitle">
            Learn how we collect, use, and safeguard your information when you interact with this website.
          </p>
          <div class="title-underline"></div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="legal-content-section">
      <div class="container">
        <div class="legal-card">
          <div class="legal-section">
            <h2>1. Overview</h2>
            <p>
              This Privacy Policy explains what information we may collect when you visit this website, how we use 
              that information, and the choices you have. By using this site, you agree to the collection and use 
              of information in accordance with this policy.
            </p>
          </div>

          <div class="legal-section">
            <h2>2. Information We May Collect</h2>
            <p>
              We may collect information that you voluntarily provide via contact forms, such as your name, email 
              address, and any message content. We may also collect technical data such as IP address, browser type, 
              device information, and general usage data for analytics and performance monitoring.
            </p>
          </div>

          <div class="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>
              Information collected may be used to respond to your inquiries, improve the website, analyze usage 
              patterns, and showcase our work more effectively. We do not sell your personal information to third 
              parties.
            </p>
          </div>

          <div class="legal-section">
            <h2>4. Cookies &amp; Analytics</h2>
            <p>
              This website may use cookies or similar technologies to enhance user experience and gather basic 
              analytics. You can choose to disable cookies in your browser settings, but some parts of the site 
              may not function properly as a result.
            </p>
          </div>

          <div class="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We take reasonable measures to protect information from unauthorized access, alteration, or disclosure. 
              However, no method of transmission over the internet or method of electronic storage is 100% secure, and 
              we cannot guarantee absolute security.
            </p>
          </div>

          <div class="legal-section">
            <h2>6. Third-Party Services</h2>
            <p>
              We may use third-party tools or services (for example, analytics providers or hosting platforms) that 
              process data on our behalf. These providers are selected with care, but we encourage you to review their 
              respective privacy policies as well.
            </p>
          </div>

          <div class="legal-section">
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal data, such as the 
              right to access, update, or request deletion of your information. To exercise these rights, you can 
              contact us using the details provided on this website.
            </p>
          </div>

          <div class="legal-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an 
              updated &ldquo;Last updated&rdquo; date. Your continued use of the site after changes are posted 
              will signify your acceptance of the revised policy.
            </p>
          </div>

          <div class="legal-section">
            <h2>9. Contact</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please reach out via the contact 
              details provided on this website.
            </p>
          </div>

          <!-- Back to Home Text Link -->
          <div class="text-center mt-5">
            <router-link to="/" class="back-home-link">
              <span class="back-home-text">Back to Home</span>
              <span class="back-home-arrow-line"></span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.legal-page {
  background: #ffffff;
  min-height: 100vh;
}

/* Page Hero (re-used styling from CaseStudiesPage) */
.page-hero {
  padding: 120px 0 10px;
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

/* Legal Content */
.legal-content-section {
  padding: 0px 0;
}

.legal-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(79, 124, 130, 0.08);
  padding: 2.5rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.legal-section + .legal-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(79, 124, 130, 0.12);
}

.legal-section h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.legal-section p {
  font-size: 0.98rem;
  color: #555;
  line-height: 1.7;
}

/* Back Home Text Link (matches About/Case Studies pages) */
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

  .legal-content-section {
    padding: 60px 0;
  }

  .legal-card {
    padding: 2rem 1.5rem;
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

  .legal-content-section {
    padding: 40px 0;
  }

  .legal-card {
    padding: 1.75rem 1.25rem;
  }
}
</style>


