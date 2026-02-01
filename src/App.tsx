import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TestingPhilosophy from './components/TestingPhilosophy';
import TestingImpact from './components/TestingImpact';
import Work from './components/Work';
import Toolbelt from './components/Toolbelt';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      {/* <TestingPhilosophy /> */}
      {/* <TestingImpact /> */}
      {/* <Work />
      <Toolbelt /> */}
      {/* <Collaboration /> */}
      <Contact />
    </div>
  );
}

export default App;
