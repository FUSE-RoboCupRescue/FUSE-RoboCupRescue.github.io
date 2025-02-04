import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica">

    {}


      <div className="text-sm md:text-base mt-5 space-y-8">
      <h1 className="font-bold text-2xl md:text-5xl text-colors-black text-center">Key benefits of cannabis</h1>
      </div>

      <div className="px-4 xl:px-0 text-sm md:text-base space-y-8">
        <section>
          <h2 className="font-bold text-2xl md:text-3xl text-colors-black mt-6 mb-3">
            1. Pain Management and Relief
          </h2>
          <p className="text-colors-gray leading-relaxed">
            Medical cannabis has demonstrated significant potential in alleviating chronic pain, offering an alternative to opioid-based medications. It helps reduce inflammation and provides pain relief, improving the quality of life for patients suffering from conditions like arthritis, neuropathy, and cancer.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-2xl md:text-3xl text-colors-black mt-6 mb-3">
            2. Mental Health Support
          </h2>
          <p className="text-colors-gray leading-relaxed">
            Cannabis is increasingly recognized for its role in managing mental health conditions, including anxiety, depression, and PTSD. Its calming effects can help stabilize mood and reduce stress, promoting emotional well-being and mental clarity without the harsh side effects of traditional pharmaceuticals.
          </p>
        </section>
      </div>
    </div>
  );
}
