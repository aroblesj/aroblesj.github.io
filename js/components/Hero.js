export default function Hero() {
  return `
    <div class="hero-wrapper">
      <!-- Left Column: Primary Headline & 3 Stacked Roles with Periods -->
      <div class="hero-content">
        <p class="hero-pretitle">01. Hi, my name is</p>
        <h1 class="hero-title">Adrian Robles</h1>
        <h2 class="hero-subtitle">
          Software Development.<br>
          Data Engineering.<br>
          Systems Administration.
        </h2>

        <p class="hero-tagline">
          Computer Science graduate with a decade of technical operations experience in high-throughput environments. 
          Grounded professional skilled across software development, data management, and systems infrastructure, 
          focused on building reliable, secure, and compliant digital solutions.
        </p>
        <a href="#projects" class="hero-btn" id="hero-cta-btn">Explore My Work</a>
      </div>
      
      <!-- Right Column: Integrated Summary & Core Domain Highlights -->
      <div class="hero-about-panel glass-card">
        <h3 class="hero-about-heading"><span>//</span> Professional Summary</h3>
        
        <div class="hero-about-bio">
          <p>
            Grounded professional with a 10-year background in clinical operations, applying systematic problem-solving 
            and analytical rigor across software engineering, database management, and infrastructure operations.
          </p>
          <p>
            Focused on building reliable, high-availability software systems and structured data workflows while ensuring strict operational efficiency and compliance (HIPAA, ITIL 4).
          </p>
        </div>
        
        <div class="hero-about-highlights">
          <div class="hero-highlight-card">
            <h4>Software &amp; Data</h4>
            <p>Object-oriented programming (Python, Java, C++), RESTful APIs, Pydantic, RDBMS schema design, SQL, &amp; SQLAlchemy (ORM).</p>
          </div>
          <div class="hero-highlight-card">
            <h4>Systems &amp; Operations</h4>
            <p>Linux administration, Bash scripting, Docker, Cloud (AWS, GCP), ITIL 4 service management, and enterprise PACS/RIS networks.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
