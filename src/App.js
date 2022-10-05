import Footer from "./footer/footer";
import Note from "./note/note";
import AboutMe from "./pages/about/aboutMe";
import ContactMe from "./pages/contact/contact";
import LandingPage from "./pages/landingPage/landingPage";
import ProjectPage from "./pages/projects/projectPage";
import NavBar from "./routes/navbar/navbar";

function App() {
  return (
    <div>
      <Note />
      <NavBar about="#about" projects="#projects" contact="#contact" />
      <LandingPage href="#projects" />
      <AboutMe name="about" />
      <ProjectPage name="projects" />
      <ContactMe name="contact" />
      <Footer />
    </div>
  );
}

export default App;
