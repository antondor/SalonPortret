import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceItem {
    name: string;
    price: string;
}

interface ServiceGroup {
    category: string;
    description: string;
    items: ServiceItem[];
}

interface ServicesAccordionProps {
    services: ServiceGroup[];
}

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
    const [openCategories, setOpenCategories] = useState<number[]>([]);

    const toggleCategory = (index: number) => {
        setOpenCategories((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <motion.section
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="border-b border-zinc-300 pb-4">
                <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500">Наші Послуги</h2>
            </div>

            <div className="space-y-4">
                {services.map((group, index) => {
                    const isOpen = openCategories.includes(index);
                    return (
                        <div key={index} className="border border-zinc-200 bg-white">
                            <button
                                onClick={() => toggleCategory(index)}
                                className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 text-left hover:bg-zinc-50/50 transition-colors gap-4"
                            >
                                <div>
                                    <h3 className="text-xl font-medium tracking-wider uppercase text-zinc-950 flex items-center gap-4">
                                        {group.category}
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="inline-block text-zinc-400 text-sm"
                                        >
                                            ▼
                                        </motion.span>
                                    </h3>
                                    <p className="text-zinc-600 text-sm mt-1 font-light">{group.description}</p>
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 grid gap-4 md:grid-cols-2 border-t border-zinc-100 mt-2">
                                            {group.items.map((item, itemIdx) => (
                                                <Card key={itemIdx} className="bg-zinc-50/30 border-zinc-100 rounded-none p-2 shadow-none">
                                                    <CardHeader className="flex flex-row items-baseline justify-between space-y-0 pb-0">
                                                        <CardTitle className="text-base font-light text-zinc-900">{item.name}</CardTitle>
                                                        <span className="text-sm font-bold text-zinc-700 whitespace-nowrap ml-4">{item.price}</span>
                                                    </CardHeader>
                                                </Card>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
}