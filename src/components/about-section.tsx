import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
    return (
        <motion.section
            id="about"
            className="space-y-12 scroll-mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="border-b border-zinc-300 pb-4">
                <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500">Про нас</h2>
            </div>

            <Card className="border-zinc-200 bg-white rounded-none shadow-sm">
                <CardContent className="p-8 sm:p-12 grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 block">Наша історія</span>
                        <h3 className="text-4xl font-light tracking-tight text-zinc-900 leading-tight">
                            Салон краси <br /> з 1958 року
                        </h3>
                        <p className="text-zinc-600 font-light text-sm leading-relaxed pt-2">
                            Салон «Портрет» відкрив свої двері у 1997 році. Ми пишаємося можливістю продовжувати нести у світ красу, бо ще з 1958 року в будівлі нашого салону працювала перша перукарня Відрадного.
                        </p>
                    </div>

                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 block">Для всієї родини</span>
                            <p className="text-xl font-light text-zinc-900 leading-relaxed">
                                Це ваш простір для всієї родини: чоловічий та жіночий перукарські зали, нігтьовий сервіс, косметологія, солярій та масаж.
                            </p>
                            <p className="text-zinc-600 font-light text-sm leading-relaxed">
                                Ми стежимо за тенденціями, цінуємо кожного клієнта та сумлінно виконуємо улюблену роботу. Наша мета — давати якісний результат, тому ми регулярно вчимося новому та вдосконалюємо свои навички.
                            </p>
                        </div>

                        <div className="border-t border-zinc-200 pt-8 space-y-4">
                            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 block">Що ми пропонуємо</span>
                            <h4 className="text-xl font-light text-zinc-900 leading-relaxed">
                                Найкращі процедури та продукти
                            </h4>
                            <p className="text-zinc-600 font-light text-sm leading-relaxed">
                                Майстри нашого салону працюють лише з якісною та перевіреною продукцією. Ми є сертифікованим партнером компанії <span className="font-normal text-zinc-950">Schwarzkopf Professional</span>. Відвідуючи салон «Портрет», ви можете бути на 100% впевнені в якості використовуваних засобів.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.section>
    );
}