import HeroCases from "@/components/CasesPage/Hero";
import { Highlights } from "@/components/CasesPage/CaseInfo";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import { cases } from "@/data/cases";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
};

export default async function CasePage({ params }: Props) {
    const { slug } = await params;

    const project = cases.find(
        c => c.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <div className="relative flex flex-col flex-1 items-center overflow-x-hidden bg-background">
            <div className="absolute top-0 left-0 w-full h-225 pointer-events-none z-0">
                <BackgroundGlow />
            </div>

            <main className="z-10 w-full flex flex-col flex-1 items-center">
                <Header />
                <HeroCases project={project} />
                <Highlights project={project} />
                <Contact />
                <Footer />
            </main>

        </div>
    );
}