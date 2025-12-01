<template>
  <div class="legal-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">Terms &amp; Conditions</h1>
          <p class="hero-subtitle">
            Please read these terms carefully to understand how you can use our services and this website.
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to be bound by these Terms &amp; Conditions and any 
              additional terms that may apply to specific features or services. If you do not agree with any part 
              of these terms, you should discontinue use of the site.
            </p>
          </div>

          <div class="legal-section">
            <h2>2. Use of the Website</h2>
            <p>
              You agree to use this website for lawful purposes only and in a way that does not infringe the rights 
              of, restrict, or inhibit anyone else&rsquo;s use and enjoyment of the website. Prohibited behavior includes, 
              but is not limited to, harassing or causing distress to any person, transmitting obscene or offensive 
              content, or disrupting the normal flow of dialogue within the site.
            </p>
          </div>

          <div class="legal-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content, design, code, and assets on this website are owned by or licensed to us and are 
              protected by applicable copyright, trademark, and other intellectual property laws. You may not 
              reproduce, distribute, modify, or use any content without our prior written consent, except where 
              expressly permitted by law.
            </p>
          </div>

          <div class="legal-section">
            <h2>4. Portfolio &amp; Case Studies</h2>
            <p>
              Project descriptions, visuals, and client references are shared for portfolio and demonstration 
              purposes only. They may not represent current live implementations and should not be reused, 
              republished, or redistributed without permission.
            </p>
          </div>

          <div class="legal-section">
            <h2>5. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites or services that are not owned or controlled 
              by us. We have no control over, and assume no responsibility for, the content, privacy policies, or 
              practices of any third-party sites or services.
            </p>
          </div>

          <div class="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, 
              consequential, or special damages arising out of or in connection with your use of, or inability to 
              use, this website or any services referenced herein.
            </p>
          </div>

          <div class="legal-section">
            <h2>7. Changes to These Terms</h2>
            <p>
              We may update these Terms &amp; Conditions from time to time. Any changes will be posted on this page 
              with an updated &ldquo;Last updated&rdquo; date. Your continued use of the website after changes are posted 
              constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div class="legal-section">
            <h2>8. Contact</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, you can reach out via the contact 
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


