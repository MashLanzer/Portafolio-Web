import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
