export default function Hero() {
  return `
    <div class="hero-wrapper">
      <!-- Left Column: Dynamic Greetings -->
      <div class="hero-content">
        <p class="hero-pretitle">Hi, my name is</p>
        <h1 class="hero-title">Adrian Robles Jr.</h1>
        <h2 class="hero-subtitle">I translate complex logic into secure systems.</h2>
        <p class="hero-tagline">
          I am a Computer Science graduate and certified systems professional. 
          I specialize in software development, database management, and robust infrastructure design.
        </p>
        <a href="#projects" class="hero-btn" id="hero-cta-btn">Explore My Work</a>
      </div>
      
      <!-- Right Column: Integrated About Me Bio & Philosophy Highlights -->
      <div class="hero-about-panel glass-card">
        <h3 class="hero-about-heading"><span>//</span> About Me</h3>
        
        <div class="hero-about-bio">
          <p>
            I am a versatile systems professional experienced in software development, database management, 
            and systems infrastructure. I have a proven ability to translate programming logic into secure, 
            compliant, and high-performance data environments.
          </p>
          <p>
            A highly adaptable communicator, I excel at troubleshooting operational bottlenecks and managing critical 
            workflows under high-volume, regulated conditions, bringing technical growth and engineering precision to every project.
          </p>
        </div>
        
        <div class="hero-about-highlights">
          <div class="hero-highlight-card">
            <h4>Software & AI</h4>
            <p>Algorithmic problem solving, Python development, predictive models, and data pre-processing.</p>
          </div>
          <div class="hero-highlight-card">
            <h4>Data & Systems</h4>
            <p>Relational Database Management Systems, schema design, Linux administration, and network reliability.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
