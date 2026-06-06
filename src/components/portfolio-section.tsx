import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface PortfolioSectionProps {
    portfolio: string[];
}

export default function PortfolioSection({ portfolio }: PortfolioSectionProps) {
    return (
        <motion.section
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="border-b border-zinc-300 pb-2 sm:pb-4">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-zinc-500">Наші роботи</span>
            </div>

            <div className="w-full px-8 sm:px-12 relative">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        watchDrag: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 sm:-ml-6">
                        {portfolio.map((src, index) => (
                            <CarouselItem key={index} className="pl-2 sm:pl-6 basis-full md:basis-1/2">
                                <motion.div
                                    className="w-full shadow-sm"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <AspectRatio ratio={1} className="bg-white border border-zinc-200 overflow-hidden group select-none">
                                        <img
                                            src={src}
                                            alt={`Приклад роботи ${index + 1}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                                        />
                                    </AspectRatio>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious
                        className="absolute -left-6 sm:left-0 top-1/2 rounded-none border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 active:bg-zinc-900 active:text-zinc-50 h-8 w-8 sm:h-10 sm:w-10 transition-colors !top-1/2 !translate-y-[-50%] active:scale-100 flex"
                        style={{ transform: 'translateY(-50%)', marginTop: 0 }}
                    />
                    <CarouselNext
                        className="absolute -right-6 sm:right-0 top-1/2 rounded-none border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 active:bg-zinc-900 active:text-zinc-50 h-8 w-8 sm:h-10 sm:w-10 transition-colors !top-1/2 !translate-y-[-50%] active:scale-100 flex"
                        style={{ transform: 'translateY(-50%)', marginTop: 0 }}
                    />
                </Carousel>
            </div>
        </motion.section>
    );
}