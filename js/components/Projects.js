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
            Built and deployed a Streamlit web application to analyze housing market trends and provide automated property valuations. 
            Utilized Pandas for cleaning, preprocessing, and feature engineering, and trained a Scikit-learn Random Forest regression model 
            for real-time price predictions.
          </p>

        </div>
      </div>

      <!-- Project 02 -->
      <div class="project-item">
        <div class="project-graphic">
          <div class="project-graphic-placeholder" id="p2-graphic">
            &lt; Modular Fitness Application /&gt;
          </div>
          <div class="project-badge-container">
            <div class="project-badge-ribbon">Under Development</div>
          </div>
        </div>
        <div class="project-content">
          <span class="project-number">Project 02</span>
          <h3 class="project-title" id="p2-title">Modular Fitness Application</h3>
          <p class="project-description">
            A centralized fitness engine designed to calculate custom nutritional requirements (calories and macronutrient splits), 
            compute 1RM (one-rep max) percentages, and suggest training protocols. Built with a Python FastAPI backend and SQL database 
            integrated with a decoupled frontend architecture.
          </p>

        </div>
      </div>

    </div>
  `;
}
