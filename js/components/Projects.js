export default function Projects() {
  return `
    <h2 class="section-heading"><span>03.</span> Featured Projects</h2>
    <div class="projects-list">
      
      <!-- Project 01 -->
      <div class="project-item">
        <div class="project-graphic project-graphic-image">
          <img src="assets/real_estate_preview.png" alt="Real Estate Price Estimator Preview" class="project-img" />
        </div>
        <div class="project-content">
          <span class="project-number">Project 01</span>
          <h3 class="project-title" id="p1-title">Real Estate Price Estimator</h3>
          <p class="project-description">
            Engineered a CRISP-DM data pipeline to ingest, clean, and deduplicate a dataset of 1M+ real estate records, capping outliers and executing Target Mean Encoding. Trained a Random Forest Regressor (R-squared of 0.6873, MAE of ~$91,260) and deployed it via an interactive Streamlit dashboard using Plotly and serialized Joblib model binaries.
          </p>

        </div>
      </div>

      <!-- Project 02 -->
      <div class="project-item">
        <div class="project-graphic project-graphic-image" style="aspect-ratio: 2560/2270 !important;">
          <img src="assets/fitness_preview.png" alt="Modular Fitness Application Preview" class="project-img" />
          <div class="project-badge-container">
            <div class="project-badge-ribbon">Under Development</div>
          </div>
        </div>
        <div class="project-content">
          <span class="project-number">Project 02</span>
          <h3 class="project-title" id="p2-title">Modular Fitness Application</h3>
          <p class="project-description">
            Designed a normalized relational database schema utilizing SQLAlchemy (ORM) to enforce strict constraints and safely track state. Built a high-performance RESTful API using FastAPI and Pydantic validation schemas to sanitize network data inputs, and deployed the containerized infrastructure to AWS (EC2).
          </p>

        </div>
      </div>

    </div>
  `;
}
