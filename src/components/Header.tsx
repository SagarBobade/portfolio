import './Header.css';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <button onClick={() => scrollToSection('home')} className="nav-button">Home</button>
        <button onClick={() => scrollToSection('about')} className="nav-button">About</button>
        {/* <button onClick={() => scrollToSection('testing-philosophy')} className="nav-button">Philosophy</button>
        <button onClick={() => scrollToSection('testing-impact')} className="nav-button">Impact</button>
        <button onClick={() => scrollToSection('work')} className="nav-button">Work</button>
        <button onClick={() => scrollToSection('toolbelt')} className="nav-button">Toolbelt</button>
        <button onClick={() => scrollToSection('collaboration')} className="nav-button">Collaboration</button> */}
        <button onClick={() => scrollToSection('contact')} className="nav-button">Contact</button>
      </nav>
    </header>
  );
};

export default Header;
