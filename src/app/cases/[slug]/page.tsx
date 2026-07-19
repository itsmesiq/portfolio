import Header from "@/components/Header/Header";
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
        <div className="flex flex-col flex-1 items-center overflow-x-hidden">
            <Header />
        </div>
    );
}