import "./App.css";
import "./Common.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Skills from "./Components/SkillsSection/Skills";
import Experience from "./Components/ExperienceSection/Experience";
import ContactMe from "./Components/ContactMeSection/ContactMe";
import Aboutme from "./Components/AboutMeSection/Aboutme";
import Projects from "./Components/ProjectsSection/Projects";
import Footer from "./Components/FooterSection/Footer";
import { BrowserRouter} from "react-router-dom";
import {  useState } from "react";
import Loader from "./Components/Loader/Loader";
import Toaster from "./Components/Toaster/Toaster";

function App() {

  const [viewCollapse,setViewCollapse] = useState(false);
  const [viewLoader, setViewLoader] = useState(false)
  const [viewToaster,setViewToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState("Something went wrong...❗, Contact me on email or phone instead");

  const activateToaster = async() =>{
    setViewToaster(true)
    setTimeout(() => {
      setViewToaster(false)
    }, 5000);
  }

  return (
    <BrowserRouter>
      <div id="app">
        {viewLoader && <Loader />}
        {viewToaster && <Toaster setViewToaster={setViewToaster} toasterMessage={toasterMessage} />}
        <Navbar viewCollapse={viewCollapse} setViewCollapse={setViewCollapse} />
        <Hero />
        <Skills />
        <Experience />
        <Aboutme />
        <Projects />
        <ContactMe setViewLoader={setViewLoader} activateToaster={activateToaster} setToasterMessage={setToasterMessage}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
