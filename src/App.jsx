//App component is the entire page (with all the below components imported):
import Navigation from "./assets/components/Navigation_Card";
import Banner from "./assets/components/Banner_Card";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects_Card";
import Expertise from "./assets/components/Expertise_Card";
import Contact from "./assets/components/Contact_Card";
import Footer from "./assets/components/Footer_Card";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
