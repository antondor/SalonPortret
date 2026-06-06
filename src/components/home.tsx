import React from 'react';
import Header from './header';
import HeroImage from './hero-image';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import ServicesAccordion from './services-accordion';
import PortfolioSection from './portfolio-section';
import ContactsSection from './contacts-section';
import AboutCarousel from './about-carousel';
import Footer from './footer';
import servicesData from '../data/services.json';

export default function Home() {
    const portfolio = Array.from({ length: 9 }, (_, i) => `/carousel/${i + 1}.png`);

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans selection:bg-zinc-900 selection:text-zinc-50 antialiased scroll-smooth">
            <Header />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 space-y-20 lg:space-y-32 overflow-x-hidden">
                <HeroImage />
                <HeroSection />

                <div id="about_us" className="scroll-mt-32 space-y-8">
                    <AboutSection />
                    <AboutCarousel />
                </div>

                <div id="services" className="scroll-mt-32">
                    <ServicesAccordion services={servicesData.services} />
                </div>

                <div id="portfolio" className="scroll-mt-32">
                    <PortfolioSection portfolio={portfolio} />
                </div>

                <div id="contacts" className="scroll-mt-32">
                    <ContactsSection />
                </div>
            </main>

            <Footer />
        </div>
    );
}