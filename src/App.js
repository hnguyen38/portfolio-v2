import Footer from "./footer/footer";
import AboutMe from "./pages/about/aboutMe";
import ContactMe from "./pages/contact/contact";
import LandingPage from "./pages/landingPage/landingPage";
import ProjectPage from "./pages/projects/projectPage";
import NavBar from "./routes/navbar/navbar";

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <AboutMe />
      <ProjectPage />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
