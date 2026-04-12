import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica space-y-8">

    <h1 className="font-bold  text-3xl md:text-4xl text-colors-black text-center">ROBOTS</h1>

    <h1 className="font-bold">First Design: PHYRNE</h1>
      <div className="flex flex-col text-sm justify-center items-center">
        <Image 
          src="./robot_lowres.jpg"
          width={1080}
          height={1080}
          className="flex w-1/2 max-h-[270px] max-w-[270px] sm:max-h-[360px] sm:max-w-[360px] md:max-h-[540px] md:max-w-[540px] object-contain border-4 border-colors-grey_dark"
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
      
    <h1 className="font-bold">Second Design: TUBer</h1>
      <div className="flex flex-col text-sm justify-center items-center">
        <Image 
          src="./robot4.jpg"
          width={1080}
          height={1080}
          className="flex w-1/2 max-h-[270px] max-w-[270px] sm:max-h-[360px] sm:max-w-[360px] md:max-h-[540px] md:max-w-[540px] object-contain border-4 border-colors-grey_dark"
          alt="robotTUBer" />
      </div>

      <div className="px-4 xl:px-0 mt-5 text-sm md:text-base">
          <p>
              Due to budget constraints in our initial design, we decided to revise it to create a more cost-effective robot. 
              As a result, we developed TUBer, a robot that consists of more components but is simpler to manufacture. 
              Its materials are inexpensive and easy to source. We used aluminium as the primary material for the chassis and flippers, while all other components are either commercially off-the-shelf parts or 3D-printed.
              In theory, the robot is capable of navigating all types of terrain. However, due to budget limitations and delivery time constraints, 
              we were unable to obtain our preferred motors, which reduces the robot’s maneuverability.
          </p>
          {/* <p>
            We have also created this concept file for our robot <Link href='./RoboCupRescue_TDP_2025.pdf' target="_blank" className="underline underline-offset-1 text-colors-grey_medium">here</Link>.
          </p> */}
      </div>

  
    </div>
  );
}
