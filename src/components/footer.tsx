// export default function Footer() {
//     return (
//         <footer className="font-helvetica font-light text-white bg-colors-grey_dark text-xs sm:text-lg p-4 fixed bottom-0 w-full">
//             <ul className="grid grid-flow-row lg:grid-flow-col gap-2 lg:gap-5 text-start lg:text-center items-center justify-start">
//                 <li>© 2025 ThaiGer Labs</li>
//                 <li className="hidden lg:inline-block">|</li>
//                 <li>Adress TODO</li>
//                 <li className="hidden lg:inline-block">|</li>
//                 <li><a href="legal">Legal Notice</a></li>
//             </ul>
//         </footer>
//     );
// }


export default function Footer() {
    return (
        <footer className="font-helvetica font-light text-white bg-colors-grey_dark/80 backdrop-blur-md text-xs sm:text-lg p-4 fixed bottom-0 w-full shadow-md">
            <ul className="grid grid-flow-row lg:grid-flow-col gap-3 lg:gap-6 text-start lg:text-center items-center justify-center">
                <li>© 2025 ThaiGer Labs</li>
                <li className="hidden lg:inline-block">|</li>
                <li>Address TODO</li>
                <li className="hidden lg:inline-block">|</li>
                <li><a href="legal" className="hover:underline transition-colors duration-300">Legal Notice</a></li>
            </ul>
        </footer>
    );
}