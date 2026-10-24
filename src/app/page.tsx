import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';

export default function Home() {
    return (
        <div className="flex h-full w-full justify-end px-5 py-8 md:justify-end md:px-8 lg:px-16 lg:pt-20 lg:pl-32">
            <Navigation />
            <main className="w-full">
                <Hero />
            </main>
        </div>
    );
}
