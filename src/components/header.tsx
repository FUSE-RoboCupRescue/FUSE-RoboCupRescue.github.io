"use client";

import { ReactNode, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
    const [language, setLanguage] = useState('EN');

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        // Here, you can implement additional logic to change the website's language, such as updating a language context or using i18n libraries.
    };

    return(
        <section className='font-aileron font-light'>
        <div className='flex justify-between bg-colors-grey_dark'>
            <Image 
            src="/fuse_webpage/banner_left.png"
            width={500}
            height={200}
            className="max-h-[200px] max-w-[500px] object-contain top-0 left-0"
            alt="banner_left" />

            <Image 
            src="/fuse_webpage/banner_right.png"
            width={350}
            height={200}
            className="max-h-[200px] max-w-[350px] object-contain top-0 left-0"
            alt="banner_right" />
        </div>

        <nav className=" text-white bg-colors-black text-lg py-4 px-7">
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