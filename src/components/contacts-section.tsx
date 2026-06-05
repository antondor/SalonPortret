import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ContactsSection() {
  return (
    <motion.section
      className="space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="border-b border-zinc-300 pb-4">
        <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-500">Контакти</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-light tracking-tight text-zinc-900">
              Замовляйте зустріч!
            </h3>

            <div className="space-y-4 text-zinc-700 font-light leading-relaxed">
              <p>
                Ваша стрижка може бути довгою і романтичною або короткою і зухвалою, але волосся має бути міцним і здоровим. Кожна зачіска повинна бути зручною на кожен день.
              </p>
              <p className="border-l-2 border-zinc-200 pl-4 italic text-zinc-600 bg-zinc-50/50 p-4 text-sm">
                У нашому салоні ви завжди можете бути впевнені в якості та безпеці манікюру та педикюру: Для стерилізації інструментів ми використовуємо ультразвуковий апарат з дезінфікуючим засобом, а також обробляємо їх у сухожаровій шафі під впливом високої температури!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-light text-zinc-600 space-y-1">
              <p className="font-medium text-zinc-900 uppercase tracking-wider text-xs">Наша адреса:</p>
              <p>м. Київ, бул. Вацлава Гавела, 47/15</p>
              <p>Пн-Нд: 08:00 - 21:00; без вихідних</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                asChild
                size="lg"
                className="bg-zinc-950 text-zinc-50 hover:bg-zinc-800 rounded-none uppercase tracking-widest text-xs font-semibold h-14 transition-all duration-300 flex-1 shadow-md"
              >
                <a href="tel:+380444977262">
                  Зателефонувати
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-300 hover:border-zinc-950 rounded-none uppercase tracking-widest text-xs font-semibold h-14 transition-all duration-300 flex-1"
              >
                <a href="https://www.instagram.com/salonportret/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 w-full min-h-[350px] bg-white border border-zinc-200 p-2 shadow-sm relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d325257.2609285101!2d30.409686000000004!3d50.439753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc0d439579b3%3A0x550869fed983dee3!2z0LHRg9C7LiDQktCw0YbQu9Cw0LLQsCDQk9Cw0LLQtdC70LAsIDQ3LzE1LCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAyMDAw!5e0!3m2!1sru!2sus!4v1780686386835!5m2!1sru!2sus"
            className="w-full h-full min-h-[350px] border-0 grayscale opacity-90 contrast-110 hover:grayscale-0 transition-all duration-500"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.section>
  );
}