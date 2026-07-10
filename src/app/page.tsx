import Hero from "@/components/Hero/Hero";
import FeaturedCompanies from "@/components/FeaturedCompanies/FeaturedCompanies";
import Cases from "@/components/Cases/Cases";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Hero />
      <FeaturedCompanies />
      <Cases />
    </div>
  );
}
