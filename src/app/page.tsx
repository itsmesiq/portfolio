import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import FeaturedCompanies from "@/components/FeaturedCompanies/FeaturedCompanies";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Hero />
      <FeaturedCompanies />
    </div>
  );
}
