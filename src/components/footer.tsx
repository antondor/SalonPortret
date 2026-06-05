import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 mt-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-xs text-zinc-500 tracking-wider font-medium">
                    &copy; {new Date().getFullYear()} Salon Portret. ВСІ ПРАВА ЗАХИЩЕНІ.
                </p>
                <div className="flex gap-8 text-xs tracking-widest uppercase text-zinc-600 font-semibold">
                    <a href="https://www.instagram.com/salonportret/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors">Instagram</a>
                    <a href="https://www.facebook.com/salonportret" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
}