import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';

export default function Home() {
    return (
        <div className="flex h-full w-full justify-center px-5 py-8 md:justify-end md:px-8 lg:px-16 lg:pt-20">
            <Navigation />
            <main>
                <Hero />
            </main>
        </div>
    );
}
