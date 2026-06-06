import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export default function HeroSection() {
    const scrollToContacts = () => {
        const element = document.getElementById('contacts');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
                className="lg:col-span-7 space-y-6 sm:space-y-8"
                initial="initial"
                animate="animate"
                variants={{
                    animate: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.span variants={fadeInUp} className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-zinc-500 block">
                    Філософія простору
                </motion.span>
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]">
                    Чекаємо на Вас!
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-zinc-700 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                    Ваша стрижка може бути довгою і романтичною або короткою і зухвалою, але волосся має бути міцним і здоровим.
                </motion.p>
                <motion.div variants={fadeInUp} className="pt-2 sm:pt-4">
                    <Button
                        onClick={scrollToContacts}
                        size="lg"
                        className="bg-zinc-950 text-zinc-50 hover:bg-zinc-800 rounded-none uppercase tracking-widest text-xs font-semibold px-8 sm:px-10 h-12 sm:h-14 transition-all duration-300 shadow-md w-full sm:w-auto"
                    >
                        Контакти
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                className="lg:col-span-5 flex flex-col justify-center border-t-2 lg:border-t-0 lg:border-l-2 border-zinc-300 pt-6 lg:pt-0 lg:pl-12 py-2 lg:py-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <p className="text-lg sm:text-xl lg:text-2xl font-light text-zinc-800 italic leading-relaxed">
                    «Кожна зачіска повинна бути зручною на кожен день.»
                </p>
            </motion.div>
        </section>
    );
}