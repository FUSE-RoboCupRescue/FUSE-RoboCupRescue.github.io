import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica">

    {/* <h1 className="font-bold text-7xl text-colors-black text-center">Team FUSE</h1> */}

    
      <div className="flex flex-col text-sm justify-center items-center mt-5">
        <Image 
          src="./team_event.jpg"
          width={1080}
          height={1080}
          className="flex max-h-[270px] max-w-[270px] sm:max-h-[360px] sm:max-w-[360px] md:max-h-[540px] md:max-w-[540px] object-contain border-4 border-colors-grey_dark"
          alt="teamv2" />
      </div>


      <div className="text-sm md:text-base mt-5 space-y-8">
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
          We are <strong>FUSE</strong>, a dedicated team of students mostly from the Technical University of Berlin, working together to push the boundaries of robotics technology.
          We are currently focused on developing an innovative robot to participate in the 
          <strong> RoboCup Rescue competition</strong>.
        </p>

        <h1 className="font-bold text-3xl text-colors-black text-center mt-8">RoboCup Rescue German Open 2026 Cologne Results</h1>
        <p className="text-start px-4 md:px-8">
            We have successfully developed our first prototype in time for the competition. Although there were many problems, our robot performed better than expected.
            We have learned a lot from our mistake in this run and are already working on the second version of the robot that will outperform our first prototype.
        </p>

        <div className="text-start px-4 md:px-8">
        For videos of the robot running, please see here: 
        <p>
          Avoid holes test:{" "}
          <a 
            href="https://youtu.be/VJRG4qPT850" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Watch video
          </a>
        </p>

        <p>
          Palettes and Pipes:{" "}
          <a 
            href="https://www.youtube.com/live/ut5msmKrLlE?si=Y8ApHig51dyR_iWv&t=15750"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Watch video
          </a>
        </p>
      </div>

        <div className="flex justify-center items-center gap-4 mt-5 flex-wrap">
          <Image 
            src="./robot1.jpg"
            width={1080}
            height={1080}
            className="w-1/3 max-h-[270px] sm:max-h-[360px] md:max-h-[540px] object-contain border-4 border-colors-grey_dark"
            alt="robot1"
          />
          <Image 
            src="./robot2.jpg"
            width={1080}
            height={1080}
            className="w-1/3 max-h-[270px] sm:max-h-[360px] md:max-h-[540px] object-contain border-4 border-colors-grey_dark"
            alt="robot2"
          />
        </div>

        <div className="flex justify-center items-center gap-4 mt-5 flex-wrap">
          <Image 
            src="./robot3.jpg"
            width={1080}
            height={1080}
            className="w-1/3 max-h-[270px] sm:max-h-[360px] md:max-h-[540px] object-contain border-4 border-colors-grey_dark"
            alt="robot3"
          />
          <Image 
            src="./robot4.jpg"
            width={1080}
            height={1080}
            className="w-1/3 max-h-[270px] sm:max-h-[360px] md:max-h-[540px] object-contain border-4 border-colors-grey_dark"
            alt="robot4"
          />
        </div>

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
