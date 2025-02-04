import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica">

    {/* <h1 className="font-bold text-7xl text-colors-black text-center">Team FUSE</h1> */}



      <div className="text-sm md:text-base mt-5 space-y-8">
      <h1 className="font-bold text-2xl md:text-5xl text-colors-black text-center">Our Services</h1>
        <p className="text-start px-4 md:px-8">
        At ThaiGerLab, we offer a comprehensive range of services
        designed to meet the needs of the global medical cannabis
        market. From the cultivation and distribution of premium
        cannabis flowers to seamless international shipping, we are
        committed to providing a reliable and efficient service that
        upholds the highest industry standards.
        Our services include the sourcing, processing, and supply
        of medical-grade cannabis products, all of which are
        meticulously produced in accordance with Good
        Manufacturing Practice (GMP) and Good Agricultural and
        Collection Practices (GACP). These standards ensure that
        every product we distribute is safe, effective, and consistent
        in quality. 
        We have established strong, trusted partnerships with
        licensed cultivators and manufacturers who share our
        commitment to excellence. Through these collaborations,
        we guarantee that all cannabis flowers we supply are
        cultivated using sustainable practices and processed with
        precision and care.
        Whether you are a healthcare provider, distributor, or
        business seeking reliable access to premium medical
        cannabis, our services are tailored to deliver superior
        products and support to meet your specific needs. We are
        dedicated to maintaining transparency and integrity
        throughout every step of the process, ensuring the highest
        level of trust in the products we provide. 
        </p>
      </div>

    </div>

  );
}
