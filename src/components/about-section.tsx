import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} as const;

export default function AboutSection() {
    return (
        <motion.section
            id="about"
            className="space-y-8 lg:space-y-12 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div variants={fadeInUp} className="border-b border-zinc-300 pb-2 sm:pb-4">
                <h2 className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-zinc-500">Про нас</h2>
            </motion.div>

            <Card className="border-zinc-200 bg-white rounded-none shadow-sm overflow-hidden">
                <CardContent className="p-6 sm:p-8 lg:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-5 space-y-3 sm:space-y-4"
                    >
                        <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-400 block">Наша історія</span>
                        <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900 leading-tight">
                            Салон краси <br className="hidden sm:block lg:hidden" /> з 1958 року
                        </h3>
                        <p className="text-zinc-600 font-light text-xs sm:text-sm leading-relaxed pt-1 sm:pt-2">
                            Салон «Портрет» відкрив свої двері у 1997 році. Ми пишаємося можливістю продовжувати нести у світ красу, бо ще з 1958 року в будівлі нашого салону працювала перша перукарня Відрадного.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                        <motion.div
                            variants={fadeInUp}
                            className="space-y-3 sm:space-y-4"
                        >
                            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-400 block">Для всієї родини</span>
                            <p className="text-lg sm:text-xl font-light text-zinc-900 leading-relaxed">
                                Це ваш простір для всієї родини: чоловічий та жіночий перукарські зали, нігтьовий сервіс, косметологія, солярій та масаж.
                            </p>
                            <p className="text-zinc-600 font-light text-xs sm:text-sm leading-relaxed">
                                Ми стежимо за тенденціями, цінуємо кожного клієнта та сумлінно виконуємо улюблену роботу. Наша мета — давати якісний результат, тому ми регулярно вчимося новому та вдосконалюємо свои навички.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="border-t border-zinc-200 pt-6 sm:pt-8 space-y-3 sm:space-y-4"
                        >
                            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-400 block">Що ми пропонуємо</span>
                            <h4 className="text-lg sm:text-xl font-light text-zinc-900 leading-relaxed">
                                Найкращі процедури та продукти
                            </h4>
                            <p className="text-zinc-600 font-light text-xs sm:text-sm leading-relaxed">
                                Майстри нашого салону працюють лише з якісною та перевіреною продукцією. Ми є сертифікованим партнером компанії <span className="font-normal text-zinc-950">Schwarzkopf Professional</span>. Відвідуючи салон «Портрет», ви можете бути на 100% впевнені в якості використовуваних засобів.
                            </p>
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.section>
    );
}