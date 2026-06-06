import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 mt-12 sm:mt-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <p className="text-[10px] sm:text-xs text-zinc-500 tracking-wider font-medium">
                    &copy; {new Date().getFullYear()} Salon Portret. ВСІ ПРАВА ЗАХИЩЕНІ.
                </p>
                <div className="flex gap-6 sm:gap-8 text-[10px] sm:text-xs tracking-widest uppercase text-zinc-600 font-semibold justify-center">
                    <a href="https://www.instagram.com/salonportret/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors">Instagram</a>
                    <a href="https://www.facebook.com/salonportret" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
}