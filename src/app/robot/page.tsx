import Image from "next/image";

export default function Home() {
  return (

    <div className="flex flex-col my-5 mx-[25rem] font-aileron">

    <h1 className="font-bold text-7xl text-colors-black text-center">ROBOT</h1>

    
      <div className="flex flex-col text-sm justify-center items-center mt-5">
        <Image 
          src="/fuse_webpage/robot_lowres.jpg"
          width={1080}
          height={1080}
          className="flex max-h-[540px] max-w-[540px] object-contain border-4 border-colors-grey_dark transition-transform duration-300 hover:scale-110"
          alt="robotPHRYNE" />
      </div>

      <div className="font-normal text-lg mt-5">
        <p>Our robot, designed to compete in the 2025 German RoboCup Rescue category, is built for handling catastrophic and challenging situations. 
          Equipped with robust tracks and flippers, it can navigate complex terrains, such as rubble or collapsed buildings, often found in disaster zones. 
          Additionally, the robot features a mounted arm that can perform precise tasks, making it highly adaptable for use in rescue missions, 
          including those involving hostage scenarios or hazardous environments. 
          Its design is intended to enhance the speed and efficiency of emergency response teams in life-critical situations.</p>
      </div>
  
    </div>
  );
}
