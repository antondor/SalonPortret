import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function HeroImage() {
    return (
        <div className="max-w-6xl mx-auto px-6 pt-6">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full overflow-hidden border border-zinc-200 bg-white shadow-sm"
            >
                <AspectRatio ratio={2048 / 1165}>
                    <img
                        src="/logo.jpg"
                        alt="Portret Logo"
                        className="w-full h-full object-cover"
                    />
                </AspectRatio>
            </motion.div>
        </div>
    );
}