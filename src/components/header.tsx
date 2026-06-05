import React from 'react';

export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-zinc-950 uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src="/logo_small.jpg"
                        alt="Portret Logo Small"
                        className="object-cover"
                    />
                </span>

                <nav className="flex items-center gap-6 sm:gap-8 text-xs font-semibold tracking-widest uppercase text-zinc-600">
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