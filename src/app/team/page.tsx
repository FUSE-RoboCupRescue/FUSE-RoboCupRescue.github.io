import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-5 mx-[25rem] font-helvetica space-y-8">

      <h1 className="font-bold text-7xl text-colors-black text-center">TEAM</h1>

      <div className="flex flex-col text-sm justify-center items-center font-normal">
          <Image 
            src="./team_lowres.jpg"
            width={1080}
            height={1080}
            className="max-h-[540px] max-w-[540px] object-contain top-0 left-0 border-4 border-colors-grey_dark transition-transform duration-300 hover:scale-110"
            alt="team_photo" />
          <h1>From left to right: Eckart, Denis, Woraphon, Phumin, Harry (Not included in the image: Patthicha)</h1>
      </div>

      <div className="mt-5">
        <p>Our team is made up of dedicated students from TU Berlin, each bringing expertise in a variety of fields, including: </p>
        <ul className="list-disc">
          <li>Woraphon Choaywong, B.Sc. Computer Engineering</li>
          <li>Denis Shcherba, M.Sc. Computer Engineering</li>
          <li>Eckart Cobo Briesewitz, B.Sc. Computer Science</li>
          <li>Patthicha Mahakijdechachai, B.Sc. Industrial Engineering</li>
          <li>Harry Bason, B.Sc. Mechanical Engineering</li>
          <li>Phumin Lertpredanan, B.Sc. Electrical Engineering</li>
        </ul>       
      </div>
    </div>
    
  );
}
