import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-5 mx-[25rem]">

    <h1 className="font-serif font-semibold text-7xl text-colors-black text-center">Team FUSE</h1>

    
      <div className="flex flex-col text-sm font-sans justify-center items-center mt-5">
        <Image 
          src="/fuse_webpage/robot_lowres.jpg"
          width={1080}
          height={1080}
          className="flex max-h-[540px] max-w-[540px] object-contain "
          alt="robotPHRYNE" />
      </div>


      <div className="font-sans text-base mt-5">
        <p>Demo text</p>
      </div>
  
    </div>

  );
}
