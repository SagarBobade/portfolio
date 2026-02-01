import './TestingPhilosophy.css';

const TestingPhilosophy = () => {
  return (
    <section id="testing-philosophy" className="testing-philosophy">
      <div className="testing-philosophy-content">
        <h2>How I Think About Testing</h2>
        <ul>
          <li>Automate what is repeatable, critical, and high-risk</li>
          <li>Prefer fewer meaningful tests over many fragile ones</li>
          <li>Treat flaky tests as production bugs</li>
          <li>Focus on user journeys, not just UI elements</li>
          <li>Write bug reports developers respect and act on</li>
        </ul>
      </div>
    </section>
  );
};

export default TestingPhilosophy;
