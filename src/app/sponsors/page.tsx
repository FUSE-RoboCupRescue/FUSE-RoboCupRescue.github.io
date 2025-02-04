"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [showDialog, setShowDialog] = useState(true);


  return (
    <div className="flex flex-col 2xl:mx-[25rem] my-5 font-helvetica relative">
      <h1 className="font-bold text-5xl md:text-7xl text-colors-black text-center">SPONSORS</h1>

      {/* Static Sponsor Message */}
      <div className={showDialog ? "fixed bottom-0 right-0 lg:mb-10 lg:mr-10 bg-blue-600 bg-opacity-80 text-white p-6 rounded-lg shadow-lg lg:w-[300px]" : 'hidden'}>
        {/* Close Button */}
        <button
          onClick={() => setShowDialog(false)}
          className="absolute top-2 right-5 text-white text-4xl font-bold hover:text-gray-300"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2">Sponsorship Opportunity</h2>
        <p className="text-lg">
          We are actively looking for sponsors to support our robotics team as we work towards our next competition! 
          Your support helps us innovate, build, and compete. Join us in advancing robotics technology!
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-5">
        <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white_base rounded max-w-[350px] my-3 justify-self-center">
          <Link href="https://argmin.lis.tu-berlin.de/" target="_blank">
            <Image 
              src="./lis_logo.png"
              width={360}
              height={360}
              className="max-h-[270px] max-w-[270px] md:max-h-[360px] md:max-w-[360px] object-contain top-0 left-0 "
              alt="LIS" />
          </Link>
        </div>
        <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white_base rounded max-w-[350px] my-3 justify-self-center">
          <Link href="https://www.tu.berlin/" target="_blank">
            <Image 
              src="./tub_logo.png"
              width={360}
              height={360}
              className="max-h-[270px] max-w-[270px] md:max-h-[360px] md:max-w-[360px] object-contain top-0 left-0 "
              alt="TUB" />
          </Link>
        </div>
        <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white_base rounded max-w-[350px] my-3 justify-self-center">
          <Link href="https://www.maxongroup.com/de-de" target="_blank">
            <Image 
              src="./maxon_logo.png"
              width={360}
              height={360}
              className="max-h-[270px] max-w-[270px] md:max-h-[360px] md:max-w-[360px] object-contain top-0 left-0 "
              alt="maxon" />
          </Link>
        </div>
        <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white_base rounded max-w-[350px] my-3 justify-self-center">
          <Link href="https://www.maedler.de/" target="_blank">
            <Image 
              src="./maedler_logo.png"
              width={360}
              height={360}
              className="max-h-[270px] max-w-[270px] md:max-h-[360px] md:max-w-[360px] object-contain top-0 left-0 "
              alt="maedler" />
          </Link>
        </div>
      </div>
    </div>
  );
}
