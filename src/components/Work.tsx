import './Work.css';

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="work-content">
        <h2>Work & Achievements</h2>
        
        <div className="project-card">
          <h3>Chrome Extension</h3>
          <h4>Software QA Quiz</h4>
          <p>A Chrome extension that helps QA professionals strengthen testing fundamentals through short MCQ-based quizzes.</p>
          <p className="project-label">Key points:</p>
          <ul>
            <li>Designed for quick learning sessions</li>
            <li>Covers practical QA concepts</li>
            <li>Built using JavaScript and Chrome APIs</li>
          </ul>
          <div className="project-links">
            <a href="#" className="project-link">GitHub Repository</a>
            <a href="#" className="project-link">Chrome Web Store</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Automation Project (Showcase)</h3>
          <h4>Web Automation Framework – Playwright</h4>
          <p>A sample automation framework demonstrating:</p>
          <ul>
            <li>Clean project structure</li>
            <li>Page Object Model</li>
            <li>Stable selectors and waits</li>
            <li>CI-ready execution</li>
          </ul>
          <p>Includes a detailed README explaining design decisions and execution steps.</p>
          <div className="project-links">
            <a href="#" className="project-link">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
