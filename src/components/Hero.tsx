import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = [
    'I find bugs before users do',
    'I insist on quality, not shortcuts',
    'I help teams ship with confidence'
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
    <section className="hero">
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
