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


      <div className="text-base mt-5 space-y-8">
        <h1 className="font-bold text-3xl text-colors-black text-center">Our Idea</h1>
        <p className="text-center px-4 md:px-8">
          We are <strong>FUSE</strong>, a dedicated team of students from the Technical University of Berlin, working together to push the boundaries of robotics technology.
          We are currently focused on developing an innovative robot to participate in the upcoming 
          <strong> RoboCup Rescue 2025 competition</strong> in March 2025.
        </p>

        <h1 className="font-bold text-3xl text-colors-black text-center mt-8">Our Mission</h1>
        <p className="text-center px-4 md:px-8">
            Our primary goal is to design and build a robotic system capable of functioning effectively in emergency situations, such as natural disasters, search-and-rescue 
            operations, and hostage scenarios. We envision a robot that can not only withstand challenging environments but also provide invaluable support to first responders, 
            making rescue efforts faster, safer, and more effective.
        </p>

        <h1 className="font-bold text-3xl text-colors-black text-center mt-8">Our Vision</h1>
        <p className="text-center px-4 md:px-8">
            Our robot is intended to represent the future of emergency response technology. With advanced mobility features like tracks and flippers, alongside a versatile, 
            mounted robotic arm, it is built to navigate through debris, rough terrain, and tight spaces. We're aiming to create a solution that can directly aid in life-saving 
            efforts during critical rescue missions and be a dependable tool for those on the front lines in challenging, high-stakes scenarios.
        </p>

        <h1 className="font-bold text-3xl text-colors-black text-center mt-8">Searching for Sponsors</h1>
        <p className="text-center px-4 md:px-">
            We are actively looking for sponsors to support our project. Partnering with us offers several benefits for your business, including:
        </p>
        <ul className="list-disc ml-10 space-y-1.5 text-center px-4 md:px-8">
            <li>Showcasing your company and its high-quality products through our innovative robot</li>
            <li>Featuring your company logo on our team jerseys and the robot itself</li>
            <li>Presenting the robot at one of your events to demonstrate the capabilities of your products</li>
        </ul>
      </div>

    </div>

  );
}
