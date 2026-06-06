import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export interface ServiceItem {
    name: string;
    price: string;
}

export interface ServiceGroup {
    category: string;
    description: string;
    items: ServiceItem[];
}

interface ServicesAccordionProps {
    services: ServiceGroup[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
} as const;

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
    const [openCategories, setOpenCategories] = useState<number[]>([]);

    const toggleCategory = (index: number) => {
        setOpenCategories((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <motion.section
            className="space-y-8 lg:space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div variants={itemVariants} className="border-b border-zinc-300 pb-2 sm:pb-4">
                <h2 className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-zinc-500">Наші Послуги</h2>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-3 sm:space-y-4">
                {services.map((group, index) => {
                    const isOpen = openCategories.includes(index);
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="border border-zinc-200 bg-white overflow-hidden"
                        >
                            <button
                                onClick={() => toggleCategory(index)}
                                className="w-full flex flex-col p-4 sm:p-6 text-left hover:bg-zinc-50/50 transition-colors gap-2 sm:gap-4"
                            >
                                <div className="w-full flex items-center justify-between">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-medium tracking-wider uppercase text-zinc-950 flex items-center gap-2 sm:gap-4">
                                        {group.category}
                                    </h3>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="inline-block text-zinc-400 text-xs sm:text-sm shrink-0"
                                    >
                                        ▼
                                    </motion.span>
                                </div>
                                <p className="text-zinc-600 text-xs sm:text-sm mt-1 font-light pr-6">{group.description}</p>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-4 sm:p-6 pt-0 grid gap-3 sm:gap-4 md:grid-cols-2 border-t border-zinc-100 mt-2">
                                            {group.items.map((item, itemIdx) => (
                                                <Card key={itemIdx} className="bg-zinc-50/30 border-zinc-100 rounded-none p-2 sm:p-3 shadow-none">
                                                    <CardHeader className="flex flex-row items-baseline justify-between space-y-0 pb-0">
                                                        <CardTitle className="text-sm sm:text-base font-light text-zinc-900 pr-4">{item.name}</CardTitle>
                                                        <span className="text-xs sm:text-sm font-bold text-zinc-700 whitespace-nowrap ml-2 sm:ml-4">{item.price}</span>
                                                    </CardHeader>
                                                </Card>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
}