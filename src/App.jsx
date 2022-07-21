import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CardSection from "./components/CardSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CardSection />
    </>
  );
}

export default App;
