import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica">

    {/* <h1 className="font-bold text-7xl text-colors-black text-center">Team FUSE</h1> */}



    <div className="text-sm md:text-base mt-5 space-y-8">
    <h1 className="font-bold text-2xl md:text-5xl text-colors-black text-center">Get in touch</h1>

        <p className="text-start px-4 md:px-8">
        At ThaiGerLab, we are committed to delivering premium
        medical cannabis solutions to enhance health and wellbeing worldwide. Whether you are looking to learn more
        about our products, explore partnership opportunities, or
        have specific inquiries, our team is here to assist you.
        Reach out today to discover how we can support your needs
        with our high-quality cannabis offerings and reliable 
        services. Let’s work together to make a meaningful impact
        in the medical cannabis industry
        </p>

        <p>
        **Contact us now** to learn more or to discuss how we can
        collaborate to bring premium medical cannabis to your
        market.
        </p>
      </div>

    </div>

  );
}
