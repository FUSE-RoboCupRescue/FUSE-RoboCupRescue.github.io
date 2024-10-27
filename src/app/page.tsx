import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-5 mx-[25rem] font-aileron">

    <h1 className="font-bold text-7xl text-colors-black text-center">Team FUSE</h1>

    
      <div className="flex flex-col text-sm justify-center items-center mt-5">
        <Image 
          src="./robot_lowres.jpg"
          width={1080}
          height={1080}
          className="flex max-h-[540px] max-w-[540px] object-contain border-4 border-colors-grey_dark transition-transform duration-300 hover:scale-110"
          alt="robotPHRYNE" />
      </div>


      <div className="text-base mt-5">
        <p>Demo text</p>
      </div>
  
    </div>

  );
}
