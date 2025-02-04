import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica">

    {}


      <div className="text-sm md:text-base mt-5 space-y-8">
      <h1 className="font-bold text-2xl md:text-5xl text-colors-black text-center">Welcome to ThaiGer Labs</h1>
        <p className="text-start px-4 md:px-8">
        At ThaiGerLab, we are dedicated to delivering the highestquality medical cannabis, cultivated and produced in
        Thailand to the strictest international standards. With a
        commitment to GMP and GACP certifications, we ensure
        every product meets rigorous quality, safety, and efficacy
        benchmarks. Partner with us for a trusted, reliable source of
        medical cannabis you can depend on
        </p>
      </div>

    </div>

  );
}
