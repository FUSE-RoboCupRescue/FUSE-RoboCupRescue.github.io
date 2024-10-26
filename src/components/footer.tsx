import { ReactNode, useState } from 'react';
import Link from 'next/link'


export default function Footer() {
    const [language, setLanguage] = useState('EN');

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        // Here, you can implement additional logic to change the website's language, such as updating a language context or using i18n libraries.
    };

    return(
        <div>
            <div className="font-sans text-white bg-colors-grey_dark text-xl p-4">
                <ul className="grid grid-flow-col gap-5 text-center items-center justify-start">
                    <li>msg 1</li>
                    <li>msg 2</li>
                    <li>msg 3</li>
                    <li>msg 4</li> 
                    <li>mgs 5</li>
                </ul>

            </div>
        </div>
    );
}