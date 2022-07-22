import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CardSection from "./components/CardSection.jsx";
import TechStack from "./components/TechStack.jsx";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu.jsx";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {mobileOpen && <MobileMenu toggleMenu={toggleMenu} />}
      <Navbar toggleMenu={toggleMenu} />
      <Hero />
      <section className="md:grid grid-cols-2">
        <About />
        <TechStack />
      </section>
      <CardSection />
    </>
  );
}

export default App;
