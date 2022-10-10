import Footer from "./footer/footer";
import AboutMe from "./pages/about/aboutMe";
import ContactMe from "./pages/contact/contact";
import LandingPage from "./pages/landingPage/landingPage";
import ProjectPage from "./pages/projects/projectPage";
import NavBar from "./routes/navbar/navbar";

function App() {
  return (
    <div>
      <NavBar about="#about" projects="#projects" contact="#contact" />
      <LandingPage href="#projects" tophref="#top" />
      <a name="about" />
      <AboutMe />
      <a name="projects" />
      <ProjectPage />
      <a name="contact" />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
