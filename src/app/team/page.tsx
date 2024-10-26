import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-5 mx-[25rem] font-aileron">

      <h1 className="font-bold text-7xl text-colors-black text-center">TEAM</h1>

      <div className="flex flex-col text-sm justify-center items-center mt-5 font-normal">
          <Image 
            src="/fuse_webpage/team_lowres.jpg"
            width={1080}
            height={1080}
            className="max-h-[540px] max-w-[540px] object-contain top-0 left-0 border-4 border-colors-grey_dark transition-transform duration-300 hover:scale-110"
            alt="team_photo" />
          <h1>From left to right: Eckart, Denis, Woraphon, Phumin, Harry (Not included in the image: Patthicha)</h1>
      </div>


      <div className="font-normal text-lg mt-5">
        <p>Our team is made up of dedicated students from TU Berlin, each bringing expertise in a variety of fields, including: </p>
        <ul className="list-disc ml-10">
          <li>Woraphon Choaywong, B.Sc. Computer Engineering</li>
          <li>Denis Shcherba, M.Sc. Computer Engineering</li>
          <li>Eckart Cobo Briesewitz, B.Sc. Computer Science</li>
          <li>Patthicha Mahakijdechachai, B.Sc. Industrial Engineering</li>
          <li>Harry Bason, B.Sc. Mechanical Engineering</li>
          <li>Phumin Lertpredanan, B.Sc. Electrical Engineering</li>
        </ul>
        <p>We are developing a rescue robot to compete in the upcoming RoboCup competition. 
          This event will also serve as an opportunity to test the robot's capabilities and assess whether it is ready for real-life applications.
        </p>

        <p>More information of the competition can be found <Link href="https://rrl.robocup.org/league-overview/" target="_blank" className="underline underline-offset-1 text-colors-grey_medium">here</Link></p> 
      </div>
    </div>
    
  );
}
