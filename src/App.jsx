import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CardSection from "./components/CardSection.jsx";
import TechStack from "./components/TechStack.jsx";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Transition } from "@headlessui/react";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Transition
        show={mobileOpen}
        enter="transition-opacity duration-250"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MobileMenu toggleMenu={toggleMenu} />
      </Transition>
      <Navbar toggleMenu={toggleMenu} />
      <Hero />
      <section>
        <About />
        <TechStack />
      </section>
      <CardSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
