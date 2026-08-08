export default function Projects() {
  return `
    <h2 class="section-heading"><span>03.</span> Featured Projects</h2>
    <div class="projects-list">
      
      <!-- Project 01: Fitness & Nutrition Application -->
      <div class="project-item">
        <div class="project-graphic project-graphic-image">
          <img src="assets/fitness_preview.png" alt="Fitness & Nutrition Application Preview" class="project-img" />
        </div>
        <div class="project-content">
          <span class="project-number">Project 01</span>
          <h3 class="project-title" id="p1-title">Fitness &amp; Nutrition Application</h3>
          <p class="project-tech-stack"><strong>Tech Stack:</strong> Python, FastAPI, Pydantic, SQLAlchemy, GCP, AWS, venv</p>
          <p class="project-description">
            Engineered a high-performance RESTful API using FastAPI and Pydantic validation schemas to sanitize and isolate data inputs at network boundaries. Designed a normalized RDBMS schema via SQLAlchemy (ORM) with strict foreign keys, configured cloud infrastructure on GCP/AWS, and managed isolated environments (venv).
          </p>
        </div>
      </div>

      <!-- Project 02: Real Estate Data Analysis & Predictive Modeling -->
      <div class="project-item">
        <div class="project-graphic project-graphic-image">
          <img src="assets/real_estate_preview.png" alt="Real Estate Data Analysis Preview" class="project-img" />
        </div>
        <div class="project-content">
          <span class="project-number">Project 02</span>
          <h3 class="project-title" id="p2-title">Real Estate Data Analysis &amp; Modeling</h3>
          <p class="project-tech-stack"><strong>Tech Stack:</strong> Python, Scikit-learn, Streamlit, Plotly, Joblib, Pandas</p>
          <p class="project-description">
            Engineered a CRISP-DM pipeline ingesting and deduplicating 1M+ national real estate records. Trained and tuned a Random Forest Regressor (80/20 split, R² = 0.6873, MAE ≈ $91k). Built an interactive Streamlit and Plotly dashboard utilizing serialized Joblib model binaries for real-time property valuations.
          </p>
        </div>
      </div>

    </div>
  `;
}
