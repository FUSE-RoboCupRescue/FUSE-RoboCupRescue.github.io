"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Header() {
    const [language, setLanguage] = useState('EN');
    const [isScrolled, setIsScrolled] = useState(false);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        // Here, you can implement additional logic to change the website's language, such as updating a language context or using i18n libraries.
    };

    useEffect(() => {
        const banner = document.getElementById('banner');
        if (!banner) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set isScrolled to true if the banner is not intersecting (out of view)
                setIsScrolled(!entry.isIntersecting);
            },
            {
                root: null, 
                threshold: 0, 
            }
        );
        observer.observe(banner);
        return () => {
            observer.disconnect();
        };
    }, []);

    return(
    <section className={`font-helvetica font-light z-50 sticky top-0 transition-colors duration-300 ${isScrolled ? 'bg-colors-grey_dark/70' : 'bg-colors-black'}`}>        
    <nav className="text-white text-lg py-4 px-7">
            <div className='flex justify-between'>
                <ul className="grid grid-flow-col gap-10 text-center items-center uppercase">
                    <li><Link href="/" data-translate="nav-home">Home</Link></li>
                    <li><Link href="/team" data-translate="nav-team">The Team</Link></li>
                    <li><Link href="/robot" data-translate="nav-robots">Robots</Link></li>
                    <li><Link href="/sponsors" data-translate="nav-sponsors">Sponsors</Link></li> 
                    <li><Link href="/contact" data-translate="nav-contact">Contact</Link></li>
                </ul>
                <div className='className="language-switch flex space-x-2 text-xl'>
                    <button
                        className={`px-4 py-2 rounded ${
                        language === 'EN' ? 'bg-gray-200 text-black' : 'bg-colors-grey_dark text-white'
                        }`}
                        onClick={() => handleLanguageChange('EN')}
                    >
                        EN
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${
                        language === 'DE' ? 'bg-gray-200 text-black' : 'bg-colors-grey_dark text-white' 
                        }`}
                        onClick={() => handleLanguageChange('DE')}
                    >
                        DE
                    </button>
                </div>
            </div>
        </nav>
        </section>
    );
}