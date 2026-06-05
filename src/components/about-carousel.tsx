import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function AboutCarousel() {
    const aboutImages = Array.from({ length: 6 }, (_, i) => `/about/about_us_${i + 1}.png`);

    return (
        <motion.section
            className="space-y-6 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="w-full">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        watchDrag: true,
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="-ml-4">
                        {aboutImages.map((src, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                                <motion.div
                                    className="w-full shadow-sm"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <AspectRatio ratio={4 / 3} className="bg-white border border-zinc-200 overflow-hidden group select-none">
                                        <img
                                            src={src}
                                            alt={`Атмосфера салону ${index + 1}`}
                                            className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                                        />
                                    </AspectRatio>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious
                        className="absolute left-0 top-1/2 rounded-none border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 active:bg-zinc-900 active:text-zinc-50 h-10 w-10 transition-colors !top-1/2 !translate-y-[-50%] active:scale-100"
                        style={{ transform: 'translateY(-50%)', marginTop: 0 }}
                    />
                    <CarouselNext
                        className="absolute right-0 top-1/2 rounded-none border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 active:bg-zinc-900 active:text-zinc-50 h-10 w-10 transition-colors !top-1/2 !translate-y-[-50%] active:scale-100"
                        style={{ transform: 'translateY(-50%)', marginTop: 0 }}
                    />
                </Carousel>
            </div>
        </motion.section>
    );
}