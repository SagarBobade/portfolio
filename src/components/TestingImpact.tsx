import './TestingImpact.css';

const TestingImpact = () => {
  return (
    <section id="testing-impact" className="testing-impact">
      <div className="testing-impact-content">
        <h2>Testing Impact</h2>
        <ul>
          <li>Helped teams catch high-risk issues before they reached users</li>
          <li>Improved release confidence by making test feedback faster and clearer</li>
          <li>Reduced noise in CI by identifying and fixing flaky tests early</li>
          <li>Enabled faster iterations by focusing testing on real user flows</li>
        </ul>
      </div>
    </section>
  );
};

export default TestingImpact;
