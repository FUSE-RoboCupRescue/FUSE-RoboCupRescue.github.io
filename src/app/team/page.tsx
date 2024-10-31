import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica space-y-8">

      <h1 className="font-bold text-5xl md:text-7xl text-colors-black text-center">TEAM</h1>

      <div className="flex flex-col text-xs md:text-sm justify-center items-center font-normal">
          <Image 
            src="./team_lowres.jpg"
            width={1080}
            height={1080}
            className="max-h-[270px] max-w-[270px] sm:max-h-[360px] sm:max-w-[360px] md:max-h-[540px] md:max-w-[540px] object-contain top-0 left-0 border-4 border-colors-grey_dark"
            alt="team_photo" />
          <h1 className="px-2 md:px-4">From left to right: Eckart, Denis, Woraphon, Phumin, Harry (Not included in the image: Patthicha)</h1>
      </div>

      <div className="px-4 md:px-8 mt-5 text-sm md:text-base">
        <p>Our team is made up of dedicated students from TU Berlin, each bringing expertise in a variety of fields, including: </p>
        <ul className="px-4 md:px-8 list-disc">
          <li>Woraphon Choaywong, B.Sc. Computer Engineering</li>
          <li>Denis Shcherba, M.Sc. Computer Engineering</li>
          <li>Eckart Cobo Briesewitz, M.Sc. Computer Science</li>
          <li>Patthicha Mahakijdechachai, B.Sc. Industrial Engineering</li>
          <li>Harry Bason, B.Sc. Mechanical Engineering</li>
          <li>Phumin Lertpredanan, B.Sc. Electrical Engineering</li>
        </ul>       
      </div>
    </div>
    
  );
}
