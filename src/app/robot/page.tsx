import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica space-y-8">

    <h1 className="font-bold  text-5xl md:text-7xl text-colors-black text-center">ROBOT</h1>

    
      <div className="flex flex-col text-sm justify-center items-center">
        <Image 
          src="./robot_lowres.jpg"
          width={1080}
          height={1080}
          className="flex max-h-[270px] max-w-[270px] sm:max-h-[360px] sm:max-w-[360px] md:max-h-[540px] md:max-w-[540px] object-contain border-4 border-colors-grey_dark"
          alt="robotPHRYNE" />
      </div>

      <div className="px-4 xl:px-0 mt-5 text-sm md:text-base">
          <p>
            Our robot, designed to compete in the 2025 German RoboCup Rescue category, is built for handling catastrophic and challenging situations. 
            Equipped with robust tracks and flippers, it can navigate complex terrains, such as rubble or collapsed buildings, often found in disaster zones. 
            Additionally, the robot features a mounted arm that can perform precise tasks, making it highly adaptable for use in rescue missions, 
            including those involving hostage scenarios or hazardous environments. 
            Its design is intended to enhance the speed and efficiency of emergency response teams in life-critical situations.
          </p>
          <p>
            We have also created this concept file for our robot <Link href='./RoboCupRescue_TDP_2025.pdf' target="_blank" className="underline underline-offset-1 text-colors-grey_medium">here</Link>.
          </p>
      </div>
  
    </div>
  );
}
