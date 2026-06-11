export default function Skills() {
  return `
    <h2 class="section-heading"><span>02.</span> Core Skills</h2>
    <div class="skills-grid">
      <!-- Software & AI Card -->
      <div class="glass-card skill-card">
        <div class="skill-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <h3>Software & AI</h3>
        <p>Translating programming logic and algorithms into secure, optimized applications.</p>
        <div class="skill-tags">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Java</span>
          <span class="skill-tag">C++</span>
          <span class="skill-tag">Machine Learning</span>
          <span class="skill-tag">Pandas/Scikit-learn</span>
          <span class="skill-tag">Algorithmic Problem Solving</span>
        </div>
      </div>

      <!-- Databases Card -->
      <div class="glass-card skill-card">
        <div class="skill-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        </div>
        <h3>Data & Databases</h3>
        <p>Designing relational database management systems and optimizing schema architectures.</p>
        <div class="skill-tags">
          <span class="skill-tag">RDBMS</span>
          <span class="skill-tag">SQL Query Design</span>
          <span class="skill-tag">Query Optimization</span>
          <span class="skill-tag">Data Manipulation</span>
          <span class="skill-tag">Schema Architecture</span>
        </div>
      </div>

      <!-- Infrastructure Card -->
      <div class="glass-card skill-card">
        <div class="skill-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </div>
        <h3>Infrastructure & OS</h3>
        <p>Managing system reliability, Active Directory controls, and shell script automation.</p>
        <div class="skill-tags">
          <span class="skill-tag">Linux Administration</span>
          <span class="skill-tag">Shell Scripting</span>
          <span class="skill-tag">Active Directory</span>
          <span class="skill-tag">System Troubleshooting</span>
          <span class="skill-tag">Network Reliability</span>
        </div>
      </div>

      <!-- Education Card -->
      <div class="glass-card skill-card">
        <div class="skill-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h3>Education & Certs</h3>
        <p>Rigorous CS training and active operational service certifications.</p>
        <div class="skill-tags">
          <span class="skill-tag">B.S. Computer Science</span>
          <span class="skill-tag">Linux Essentials (LPI)</span>
          <span class="skill-tag">ITIL 4 Foundation</span>
        </div>
      </div>
    </div>
  `;
}
