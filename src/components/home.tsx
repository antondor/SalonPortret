
import React from 'react';
import Header from './header';
import HeroImage from './hero-image';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import ServicesAccordion from './services-accordion';
import PortfolioSection from './portfolio-section';
import ContactsSection from './contacts-section';
import AboutCarousel from './about-carousel';
import Footer from './footer';

export default function Home() {
    const services = [
        {
            category: "Жіночий зал",
            description: "Ми можемо зробити будь-яке волосся сильним і здоровим,і створити образ, з яким ви завжди будете на висоті.",
            items: [
                { name: "Стрижка модельна", price: "500 - 650 ₴" },
                { name: "Мелірування волосся", price: "від 850 ₴" },
                { name: "Фарбування в один тон (Schwarzkopf Professional / INDOLA)", price: "від 500 ₴" },
                { name: "Фарбування волосся (шатуш, балаяж, омбре, сомбре, AirTouch)", price: "від 1500 ₴" },
                { name: "Біозавивка", price: "від 2000 ₴" },
                { name: "Ботокс для волосся", price: "від 1700 ₴" },
                { name: "Кератинове вирівнювання волосся", price: "від 2100 ₴" }
            ]
        },
        {
            category: "Чоловічий зал",
            description: "Хороша стрижка – це насамперед впевненість у собі. Ми даємо вам цю впевненість.",
            items: [
                { name: "Стрижка під насадку", price: "300 ₴" },
                { name: "Стрижка класична", price: "350 ₴" },
                { name: "Стрижка модельна", price: "400 ₴" },
                { name: "Борода (модельне оформлення)", price: "від 250 ₴" },
                { name: "Камуфлювання (фарбування сивини)", price: "від 250 ₴" }
            ]
        },
        {
            category: "Нігтьовий сервіс",
            description: "Чистий та безпечний манікюр. Творимо красу на ваших ручках.",
            items: [
                { name: "Манікюр гігієнічний, апаратний", price: "300 ₴" },
                { name: "Педикюр гігієнічний, апаратний", price: "480 ₴" },
                { name: "Покриття гель-лаком в один тон", price: "350 ₴" },
                { name: "Покриття однофазним гель-лаком", price: "250 ₴" },
                { name: "Нарощування нігтів гелем", price: "від 600 ₴" }
            ]
        },
        {
            category: "Косметологія",
            description: "Їй потрібна постійна увага, догляд і регулярні відвідування косметологічного кабінету. Використовуємо продукти брендів: Institut Esthederm (Франція), CASMARA (Іспанія), HydroPeptide (США) та інші.",
            items: [
                { name: "Чистка обличчя + Маски", price: "1200 ₴" },
                { name: "Пілінг всесезонний / з конкретної проблемы", price: "900 ₴" },
                { name: "Карбоксітерапія", price: "600 ₴" },
                { name: "Процедури доглядові або лікувальні", price: "від 900 ₴" },
                { name: "Шугарінг / депіляція воском", price: "від 250 ₴" },
                { name: "Гідропілінг", price: "2000 ₴" },
                { name: "Мікроголковий RF-ліфтінг", price: "5000 ₴" }
            ]
        },
        {
            category: "Солярій",
            description: "Солярій Ergoline Vertical дарує швидку та насичену засмагу. Допоможемо підібрать професійну косметику та аксесуари. Є можливість придбати абонемент.",
            items: [
                { name: "1 хвилина загару", price: "20 ₴" },
                { name: "Абонемент 50 хвилин загару", price: "900 ₴" }
            ]
        }
    ];

    const portfolio = Array.from({ length: 9 }, (_, i) => `/carousel/${i + 1}.png`);

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans selection:bg-zinc-900 selection:text-zinc-50 antialiased scroll-smooth">
            <Header />

            <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
                <HeroSection />

                <div id="about_us" className="scroll-mt-24 space-y-8">
                    <AboutSection />
                    <AboutCarousel />
                </div>

                <div id="services" className="scroll-mt-24">
                    <ServicesAccordion services={services} />
                </div>

                <div id="portfolio" className="scroll-mt-24">
                    <PortfolioSection portfolio={portfolio} />
                </div>

                <div id="contacts" className="scroll-mt-24">
                    <ContactsSection />
                </div>
            </main>

            <Footer />
        </div>
    );
}