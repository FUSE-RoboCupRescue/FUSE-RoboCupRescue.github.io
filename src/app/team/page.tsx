import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-5 xl:mx-[25rem] font-helvetica space-y-8">

      <h1 className="font-bold text-3xl md:text-4xl text-colors-black text-center">TEAM</h1>

      <div className="flex flex-col text-xs md:text-sm justify-center items-center font-normal">
          <Image 
            src="./team_pic.jpg"
            width={1080}
            height={1080}
            className="max-h-[270px] max-w-[270px] sm:max-h-[360px] sm:max-w-[360px] md:max-h-[540px] md:max-w-[540px] object-contain top-0 left-0 border-4 border-colors-grey_dark"
            alt="team_photo" />
          <h1 className="px-2 md:px-4">From left to right: Phumin, Denis, Eckart, Manassawin, Woraphon, Harry (Not included in the image: Savita)</h1>
      </div>

      <div className="px-4 md:px-8 mt-5 text-sm md:text-base">
        <p>Our team is made up of dedicated students mostly from TU Berlin, each bringing expertise in a variety of fields, including: </p>
        <ul className="px-4 md:px-8 list-disc">
          <li><b>Woraphon Choaywong</b>,         B.Sc. Computer Engineering</li>
          <li><b>Denis Shcherba</b>,             PhD. Computer Engineering</li>
          <li><b>Eckart Cobo Briesewitz</b>,     M.Sc. Computer Science</li>
          <li><b>Harry Bason</b>,                B.Sc. Mechanical Engineering</li>
          <li><b>Phumin Lertpredanan</b>,        B.Sc. Electrical Engineering</li>
          <li><b>Manassawin Vessugunmanugul</b>, B.Sc. Computer Science (SRH Uni)</li>
          <li><b>Savita Tangvituvanich</b>,      Ausbildung Fachinformatiker (ekvip Automation)</li>
        </ul>       
      </div>
    </div>
    
  );
}
