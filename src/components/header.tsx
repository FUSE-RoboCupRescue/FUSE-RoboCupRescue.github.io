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
        <div>
        <div>
            <Image 
            src="fuse_webpage/banner.png"
            width={1400}
            height={360}
            className="max-h-[250px] w-full object-cover top-0 left-0"
            alt="banner_pic" />
        </div>

        <nav className="font-sans text-white bg-colors-grey_dark text-2xl p-4">
            <div className='flex justify-between'>
                <ul className="grid grid-flow-col gap-10 text-center items-center">
                    <li><Link href="/" data-translate="nav-home">Home</Link></li>
                    <li><Link href="/team" data-translate="nav-team">The Team</Link></li>
                    <li><Link href="/robot" data-translate="nav-robots">Robots</Link></li>
                    <li><Link href="/sponsors" data-translate="nav-sponsors">Sponsors</Link></li> 
                    <li><Link href="/contact" data-translate="nav-contact">Contact</Link></li>
                </ul>
                <div className='className="language-switch font-serif flex space-x-2 text-xl'>
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
        </div>
    );
}