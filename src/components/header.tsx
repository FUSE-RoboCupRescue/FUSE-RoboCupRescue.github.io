"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Header() {
    const [language, setLanguage] = useState('EN');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

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
    <section>
        <section className={`hidden lg:flex font-helvetica font-light z-50 sticky top-0 transition-colors duration-300 ${isScrolled ? 'bg-colors-grey_dark/70' : 'bg-colors-black'}`}>        
        <nav className="text-white text-lg py-4 px-7">
                <div className='flex justify-between'>
                    <ul className="grid grid-flow-col gap-10 text-center items-center uppercase">
                        <li><Link href="/" data-translate="nav-home">Home</Link></li>
                        <li><Link href="/team" data-translate="nav-team">The Team</Link></li>
                        <li><Link href="/robot" data-translate="nav-robots">Robots</Link></li>
                        <li><Link href="/sponsors" data-translate="nav-sponsors">Sponsors</Link></li> 
                        <li><Link href="/contact" data-translate="nav-contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            </section>
            <section className={`flex lg:hidden font-helvetica font-light z-50 sticky top-0 bg-colors-black justify-between py-8 px-7`}>        
            <nav className="flex flex-col justify-between text-white text-sm sm:text-lg">
                    <div className={isNavOpen ? "hidden" : "flex flex-col space-y-2"}
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-colors-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-colors-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-colors-white"></span>
                    </div>
                    <div className={isNavOpen ? "pb-5" : "hidden"} onClick={() => setIsNavOpen(false)} > 
                        <svg
                            className="h-8 w-8 text-colors-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                        <ul className="grid grid-flow-row gap-10 text-start uppercase mt-4" onClick={() => setIsNavOpen(false)}>
                            <li><Link href="/" data-translate="nav-home">Home</Link></li>
                            <li><Link href="/team" data-translate="nav-team">The Team</Link></li>
                            <li><Link href="/robot" data-translate="nav-robots">Robots</Link></li>
                            <li><Link href="/sponsors" data-translate="nav-sponsors">Sponsors</Link></li> 
                            <li><Link href="/contact" data-translate="nav-contact">Contact</Link></li>
                        </ul> 
                    </div> 
                       
                        
            </nav>
            <style>{`
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenuNav {
                        display: block;
                        width: 100%;
                        height: max-content;
                        top: 0;
                        left: 0;
                        z-index: 10;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                    `}</style>
            </section>
        </section>
        
    );
}


// {/* <div className='className="language-switch flex space-x-2 text-xl'>
//                             {/* <button
//                                 className={`px-4 py-2 rounded ${
//                                 language === 'EN' ? 'bg-gray-200 text-black' : 'bg-colors-grey_dark text-white'
//                                 }`}
//                                 onClick={() => handleLanguageChange('EN')}
//                             >
//                                 EN
//                             </button>
//                             <button
//                                 className={`px-4 py-2 rounded ${
//                                 language === 'DE' ? 'bg-gray-200 text-black' : 'bg-colors-grey_dark text-white' 
//                                 }`}
//                                 onClick={() => handleLanguageChange('DE')}
//                             >
//                                 DE
//                             </button> */}
//                             </div> */}