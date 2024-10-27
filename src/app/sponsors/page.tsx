import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mx-[25rem] my-5 font-aileron">
        <h1 className="font-bold text-7xl text-colors-black text-center">SPONSORS</h1>

        <div className="grid gap-4 grid-cols-2 my-5">
        <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white rounded max-w-[350px] my-3 justify-self-center">
            <Link href="https://argmin.lis.tu-berlin.de/" target="_blank">
            <Image 
                src="./lis_logo.png"
                width={360}
                height={360}
                className="max-h-[360px] max-w-[360px] object-contain top-0 left-0 "
                alt="LIS" />
            </Link>
          </div>
          <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white rounded max-w-[350px] my-3 justify-self-center">
            <Link href="https://www.tu.berlin/" target="_blank">
            <Image 
                src="./tub_logo.png"
                width={360}
                height={360}
                className="max-h-[360px] max-w-[360px] object-contain top-0 left-0 "
                alt="TUB" />
            </Link>
          </div>
          <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white rounded max-w-[350px] my-3 justify-self-center">
            <Link href="https://www.maxongroup.com/de-de" target="_blank">
            <Image 
                src="./maxon_logo.png"
                width={360}
                height={360}
                className="max-h-[360px] max-w-[360px] object-contain top-0 left-0 "
                alt="maxon" />
            </Link>
          </div>
          <div className="flex flex-col items-center border-4 border-colors-grey_dark bg-colors-white rounded max-w-[350px] my-3 justify-self-center">
            <Link href="https://www.maedler.de/" target="_blank">
            <Image 
                src="./maedler_logo.png"
                width={360}
                height={360}
                className="max-h-[360px] max-w-[360px] object-contain top-0 left-0 "
                alt="maedler" />
            </Link>
          </div>
        </div>

    </div>
  );
}
