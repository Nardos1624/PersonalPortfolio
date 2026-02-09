import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import MyStory from "@/components/mystory"
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <MyStory/>
      <Skills />
      <Projects />
      <Contact />
     
    </main>
  );
};

export default Index;
