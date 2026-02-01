import './Toolbelt.css';

const Toolbelt = () => {
  return (
    <section id="toolbelt" className="toolbelt">
      <div className="toolbelt-content">
        <h2>Toolbelt</h2>
        <div className="tool-group">
          <span className="tool-category">Automation:</span>
          <span className="tool-list">Playwright, Cypress, Selenium</span>
        </div>
        <div className="tool-group">
          <span className="tool-category">Languages:</span>
          <span className="tool-list">TypeScript, JavaScript</span>
        </div>
        <div className="tool-group">
          <span className="tool-category">Testing Types:</span>
          <span className="tool-list">UI, API, Regression, Exploratory</span>
        </div>
        <div className="tool-group">
          <span className="tool-category">CI/CD:</span>
          <span className="tool-list">GitHub Actions, Jenkins</span>
        </div>
        <div className="tool-group">
          <span className="tool-category">Others:</span>
          <span className="tool-list">Git, Postman, MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default Toolbelt;
