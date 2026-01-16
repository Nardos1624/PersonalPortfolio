import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyStory from "@/components/mystory"
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* <Hero /> */}
      <MyStory/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
