import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import FeaturedCompanies from "@/components/FeaturedCompanies/FeaturedCompanies";
import Cases from "@/components/Cases/Cases";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Header />
      <Hero />
      <FeaturedCompanies />
      <Cases />
      <Footer />
    </div>
  );
}
