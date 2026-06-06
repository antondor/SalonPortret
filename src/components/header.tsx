import React from 'react';

export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-sm font-bold tracking-widest text-zinc-950 uppercase cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src="/logo_header.png"
                        alt="Portret Logo"
                        className="object-cover h-8"
                    />
                </span>

                <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-600">
                    <button
                        onClick={() => scrollToSection('about_us')}
                        className="hover:text-zinc-950 transition-colors uppercase"
                    >
                        Про нас
                    </button>
                    <button
                        onClick={() => scrollToSection('services')}
                        className="hover:text-zinc-950 transition-colors uppercase"
                    >
                        Послуги
                    </button>
                    <button
                        onClick={() => scrollToSection('portfolio')}
                        className="hover:text-zinc-950 transition-colors uppercase"
                    >
                        Роботи
                    </button>
                    <button
                        onClick={() => scrollToSection('contacts')}
                        className="hover:text-zinc-950 transition-colors uppercase"
                    >
                        Контакти
                    </button>
                    <span className="text-zinc-300 hidden sm:inline">|</span>
                    <a
                        href="https://www.instagram.com/salonportret/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-950 transition-colors uppercase"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.facebook.com/salonportret/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-950 transition-colors uppercase"
                    >
                        Facebook
                    </a>
                </nav>
            </div>
        </header>
    );
}