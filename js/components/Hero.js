export default function Hero() {
  return `
    <div class="hero-wrapper">
      <!-- Left Column: Dynamic Greetings -->
      <div class="hero-content">
        <p class="hero-pretitle">Hi, my name is</p>
        <h1 class="hero-title">Adrian Robles Jr.</h1>
        <h2 class="hero-subtitle">I build secure, high-availability software and data systems.</h2>
        <p class="hero-tagline">
          I am a Computer Science graduate transitioning from clinical operations into systems and data infrastructure. 
          I specialize in software design, relational database schemas, and structured data validation.
        </p>
        <a href="#projects" class="hero-btn" id="hero-cta-btn">Explore My Work</a>
      </div>
      
      <!-- Right Column: Integrated About Me Bio & Philosophy Highlights -->
      <div class="hero-about-panel glass-card">
        <h3 class="hero-about-heading"><span>//</span> About Me</h3>
        
        <div class="hero-about-bio">
          <p>
            I am a versatile systems and software professional. Transitioning from a decade in clinical operations, 
            I combine a strong academic CS foundation in object-oriented design and relational databases with deep real-world 
            experience in security compliance, troubleshooting operational bottlenecks, and managing high-volume digital assets.
          </p>
          <p>
            Highly adaptable and detail-oriented, I focus on engineering secure, compliant data pipelines and reliable 
            infrastructure. I excel at troubleshooting faults, optimizing systemic workflows, and managing critical pipelines 
            under rapid-throughput, regulated environments.
          </p>
        </div>
        
        <div class="hero-about-highlights">
          <div class="hero-highlight-card">
            <h4>Software & Data</h4>
            <p>Object-oriented programming, clean RESTful APIs, relational schema design, and structured data validation pipelines.</p>
          </div>
          <div class="hero-highlight-card">
            <h4>Infrastructure & Ops</h4>
            <p>Linux system administration, cloud networking boundaries, HIPAA/identity compliance (IAM), and ITIL 4 service frameworks.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
