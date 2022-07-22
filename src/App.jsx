import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CardSection from "./components/CardSection.jsx";
import TechStack from "./components/TechStack.jsx";

function App() {
  return (
    <>
      <Navbar />
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
