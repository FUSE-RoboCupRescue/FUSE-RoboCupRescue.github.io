import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica">

    {/* <h1 className="font-bold text-7xl text-colors-black text-center">Team FUSE</h1> */}

    
      <div className="flex flex-col text-sm justify-center items-center mt-5">
        <Image 
          src="./robot_lowres.jpg"
          width={1080}
          height={1080}
          className="flex max-h-[270px] max-w-[270px] sm:max-h-[360px] sm:max-w-[360px] md:max-h-[540px] md:max-w-[540px] object-contain border-4 border-colors-grey_dark"
          alt="robotPHRYNE" />
      </div>


      <div className="text-base mt-5 space-y-8">
      <h1 className="font-bold text-3xl text-colors-black text-center pt-8">What is RoboCup Rescue?</h1>
        <p className="text-start px-4 md:px-8">
        The league’s primary goal is to conduct rigorous, fair competitions that guide teams on essential tasks for effective responder support. 
        Additionally, the league aims to track advancements in robotic systems to highlight significant capabilities that responders can easily recognize. 
        Demonstrating a capability through ten or more successful trials suggests reliability. A range of trials across various tests helps evaluate the system comprehensively.
        The RoboCup Rescue competition is organized similarly to Response Robot Exercises, which effectively convey capabilities between robot developers and responders. 
        In the Preliminary round, each robot is assessed using standard and draft test methods to showcase functionality, reliability, operator skill, and autonomous or assistive abilities. Scores from this round qualify robots for a more complex scenario in the Finals, which enables concurrent testing for multiple robots and provides statistically meaningful performance data. 
        The Finals encourage more complex and challenging tests, pushing robots beyond their typical limits to earn higher scores.
        More information of the competition can be found <Link href="https://rrl.robocup.org/league-overview/" target="_blank" className="underline underline-offset-1 text-colors-grey_medium">here</Link>.
        </p>


        <h1 className="font-bold text-3xl text-colors-black text-center">Who are we?</h1>
        <p className="text-start px-4 md:px-8">
          We are <strong>FUSE</strong>, a dedicated team of students from the Technical University of Berlin, working together to push the boundaries of robotics technology.
          We are currently focused on developing an innovative robot to participate in the upcoming 
          <strong> RoboCup Rescue 2025 competition</strong> in March 2025.
        </p>

        <h1 className="font-bold text-3xl text-colors-black text-center mt-8">Our Mission</h1>
        <p className="text-start px-4 md:px-8">
            Our primary goal is to design and build a robotic system capable of functioning effectively in emergency situations, such as natural disasters, search-and-rescue 
            operations, and hostage scenarios. We envision a robot that can not only withstand challenging environments but also provide invaluable support to first responders, 
            making rescue efforts faster, safer, and more effective.
        </p>

        <h1 className="font-bold text-3xl text-colors-black text-center mt-8">Our Vision</h1>
        <p className="text-start px-4 md:px-8">
            Our robot is intended to represent the future of emergency response technology. With advanced mobility features like tracks and flippers, alongside a versatile, 
            mounted robotic arm, it is built to navigate through debris, rough terrain, and tight spaces. We're aiming to create a solution that can directly aid in life-saving 
            efforts during critical rescue missions and be a dependable tool for those on the front lines in challenging, high-stakes scenarios.
        </p>

        <h1 className="font-bold text-3xl text-colors-black text-center mt-8">Searching for Sponsors</h1>
        <p className="text-start px-4 md:px-8">
            We are actively looking for sponsors to support our project. Partnering with us offers several benefits for your business, including:
        </p>
        <ul className="list-disc ml-10 space-y-1.5 text-start px-4 md:px-8 pb-8">
            <li>Showcasing your company and its high-quality products through our innovative robot</li>
            <li>Featuring your company logo on our team jerseys and the robot itself</li>
            <li>Presenting the robot at one of your events to demonstrate the capabilities of your products</li>
        </ul>
      </div>

    </div>

  );
}
