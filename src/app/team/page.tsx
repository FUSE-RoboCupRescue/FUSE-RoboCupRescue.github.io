import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica">

    {}


      <div className="text-sm md:text-base mt-5 space-y-8">
      <h1 className="font-bold text-2xl md:text-5xl text-colors-black text-center">About us</h1>
      </div>


      <div className="px-4 md:px-8 mt-5 text-sm md:text-base">
        <p>At ThaiGerLab, we are dedicated to providing the highest
        quality medical cannabis to markets around the world.
        Specializing in premium cannabis flowers, our company is
        built on a foundation of excellence, ensuring that every
        product we offer meets the strictest standards of purity and
        potency.
        Our mission is to support the health and well-being of our
        customers by offering trusted, safe, and effective medical
        cannabis solutions. We are fully committed to maintaining
        rigorous quality control throughout every stage of
        production, adhering to global standards like GoodManufacturing Practice (GMP) and Good Agricultural and
        Collection Practices (GACP). By partnering exclusively
        with licensed cultivators and manufacturers, we ensure that
        our products are cultivated and processed with the utmost
        care and precision.
        Through our unwavering focus on quality, transparency,
        and innovation, we strive to be a leading provider of
        premium medical cannabis, helping improve the lives of
        patients across the globe. </p>    
      </div>
    </div>
    
  );
}
