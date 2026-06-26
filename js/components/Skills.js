export default function Skills() {
  return `
    <h2 class="section-heading"><span>02.</span> Technical Skills</h2>
    <div class="skills-dashboard">
      <!-- Tabs Navigation -->
      <div class="skills-tabs">
        <button class="skills-tab-btn active" data-tab="languages" aria-selected="true" role="tab">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          <span>Languages & Dev</span>
        </button>
        <button class="skills-tab-btn" data-tab="data" aria-selected="false" role="tab">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
          <span>Data & Persistence</span>
        </button>
        <button class="skills-tab-btn" data-tab="infrastructure" aria-selected="false" role="tab">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          <span>Infrastructure & Tools</span>
        </button>
        <button class="skills-tab-btn" data-tab="operations" aria-selected="false" role="tab">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span>Operations & Compliance</span>
        </button>
        <button class="skills-tab-btn" data-tab="education" aria-selected="false" role="tab">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span>Education & Certs</span>
        </button>
      </div>

      <!-- Display Panel -->
      <div class="skills-panel glass-card">
        <!-- Languages & Development Panel -->
        <div class="skills-panel-content active" id="pane-languages" role="tabpanel">
          <div class="panel-header">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>Languages & Development</h3>
          </div>
          <p class="panel-description">Designing backend architectures and clean, object-oriented software.</p>
          <div class="skill-tags">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">FastAPI</span>
            <span class="skill-tag">Streamlit</span>
            <span class="skill-tag">RESTful APIs</span>
            <span class="skill-tag">Pydantic</span>
            <span class="skill-tag">OOP</span>
          </div>
        </div>

        <!-- Data & Persistence Panel -->
        <div class="skills-panel-content" id="pane-data" role="tabpanel">
          <div class="panel-header">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            </div>
            <h3>Data & Persistence</h3>
          </div>
          <p class="panel-description">Designing relational database management systems and optimizing schema architectures.</p>
          <div class="skill-tags">
            <span class="skill-tag">RDBMS</span>
            <span class="skill-tag">SQL Query Design</span>
            <span class="skill-tag">SQLite</span>
            <span class="skill-tag">Schema Architecture</span>
            <span class="skill-tag">SQLAlchemy (ORM)</span>
          </div>
        </div>

        <!-- Infrastructure & Tools Panel -->
        <div class="skills-panel-content" id="pane-infrastructure" role="tabpanel">
          <div class="panel-header">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <h3>Infrastructure & Tools</h3>
          </div>
          <p class="panel-description">Automating build tasks, scaling cloud systems, and utilizing agentic AI frameworks.</p>
          <div class="skill-tags">
            <span class="skill-tag">Linux Administration</span>
            <span class="skill-tag">Shell Scripting (Bash)</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">AWS (EC2/RDS/S3)</span>
            <span class="skill-tag">Environment (venv)</span>
            <span class="skill-tag">Git / GitHub</span>
            <span class="skill-tag">Agentic AI Engineering</span>
          </div>
        </div>

        <!-- Operations & Compliance Panel -->
        <div class="skills-panel-content" id="pane-operations" role="tabpanel">
          <div class="panel-header">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Operations & Compliance</h3>
          </div>
          <p class="panel-description">Managing high-volume asset pipelines, HIPAA-governed records, and technical troubleshooting.</p>
          <div class="skill-tags">
            <span class="skill-tag">ITIL 4 Service Management</span>
            <span class="skill-tag">System Troubleshooting</span>
            <span class="skill-tag">PACS/RIS Networks</span>
            <span class="skill-tag">HIPAA Regulations</span>
            <span class="skill-tag">Identity (IAM)</span>
          </div>
        </div>

        <!-- Education & Certifications Panel -->
        <div class="skills-panel-content" id="pane-education" role="tabpanel">
          <div class="panel-header">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3>Education & Certs</h3>
          </div>
          <p class="panel-description">Academic degrees and certifications in systems and frameworks.</p>
          <div class="skill-tags">
            <span class="skill-tag">B.S. Computer Science</span>
            <span class="skill-tag">LPI Linux Essentials</span>
            <span class="skill-tag">ITIL 4 Foundation</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
