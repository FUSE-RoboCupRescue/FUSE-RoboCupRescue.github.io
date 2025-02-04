
export default function Footer() {

    return(
        <div>
            <div className="font-helvetica font-light text-white bg-colors-grey_dark text-xs sm:text-lg p-4">
                <ul className="grid grid-flow-row lg:grid-flow-col gap-2 lg:gap-5 text-start lg:text-center items-center justify-start">
                    <li>© 2024 FUSE RoboCupRescue Team</li>
                    <li className="hidden lg:inline-block">|</li>
                    <li>Marchstr. 23, MAR 4-4 Raum 4.025, 10587 Berlin</li>
                    <li className="hidden lg:inline-block">|</li>
                    <li><a href="legal">Legal Notice</a></li>
                </ul>

            </div>
        </div>
    );
}