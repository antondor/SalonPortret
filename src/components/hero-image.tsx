import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} as const;

export default function HeroImage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="w-full overflow-hidden"
            >
                <AspectRatio ratio={2048 / 460}>
                    <img
                        src="/logo.png"
                        alt="Portret Logo"
                        className="w-full h-full object-cover"
                    />
                </AspectRatio>
            </motion.div>
        </div>
    );
}