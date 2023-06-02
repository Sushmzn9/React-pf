import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Navigation } from "./Component/Navigation";
import { Hero } from "./Component/Hero";
import { Skills } from "./Component/Skills";
import { Projects } from "./Component/Projects";
import { Aboutme } from "./Component/Aboutme";
import { ContactMe } from "./Component/ContactMe";
import { Footer } from "./Component/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Aboutme />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
