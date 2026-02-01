import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <div className="contact-links">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:bobadesagarwd@gmail.com" className="contact-link">bobadesagarwd@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/sagar-bobade/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/sagar-bobade/</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub:</span>
            <a href="https://github.com/SagarBobade" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/SagarBobade</a>
          </div>
          {/* <div className="contact-item">
            <span className="contact-label">Resume:</span>
            <a href="#" className="contact-link">Download PDF</a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
