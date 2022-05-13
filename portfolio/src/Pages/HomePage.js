import Education from "../Components/Education/Education";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects/Projects";
import Technologies from "../Components/Technologies/Technologies";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="section-container">
        <Hero />
        <Projects />
        <Technologies />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
