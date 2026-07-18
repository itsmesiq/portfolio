import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import FeaturedCompanies from "@/components/FeaturedCompanies/FeaturedCompanies";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";
import Skills from "@/components/Skills/Skills";
import Cases from "@/components/Cases/Cases";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedCompanies />
      <Cases />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
