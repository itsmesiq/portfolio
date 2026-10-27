import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';

export default function Home() {
    return (
        <div className="relative flex h-full w-full justify-center px-5 pt-8 md:px-8 lg:px-16 lg:pt-20 lg:pl-32">
            <Navigation />

            <main className="flex w-fit flex-col items-center">
                <Hero />
                <Projects />
                <TechStack />
                <Footer />
            </main>
        </div>
    );
}
