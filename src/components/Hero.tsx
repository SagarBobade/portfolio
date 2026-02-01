import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = [
    'I think about quality early, not late',
    'I focus on user journeys, not just tests',
    'I help teams release with confidence'
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = texts[currentIndex];
    
    if (currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex((currentIndex + 1) % texts.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <strong>Sagar Bobade</strong>
        </h1>
        <p className="subtitle">SDET | Quality Advocate | Automation Engineer</p>
        <p className="tagline">I help teams ship reliable software with confidence.</p>
        <div className="typing-container">
          <span className="typing-text">{currentText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
