import { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="about-content">
        <h2>About</h2>
        <p>I’m a Software Development Engineer in Test who cares deeply about how users experience a product. I enjoy working close to the development process to surface risks early, improve reliability, and help teams make confident release decisions.</p>
        <p>For me, testing is not a phase at the end of development. It’s a continuous way of thinking that starts with understanding the problem we’re solving and continues until the software is in users’ hands.</p>
        <p>I focus on building test systems and feedback loops that teams can trust — so quality becomes a shared responsibility, not a last-minute checkpoint.</p>
      </div>
    </section>
  );
};

export default About;
