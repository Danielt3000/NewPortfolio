import "./portfolio.css";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Projects from "./components/ProjectsApi/Projects.jsx";
import ALittleAboutMe from "./components/A Little About Me/ALittleAboutMe.jsx";
import "animate.css";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div className="App inconsolata">
      <div className="back">
        <Nav />
        <About />
      </div>

      <ALittleAboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
