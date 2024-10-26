import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-2 my-5">
     
        <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center">
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="person1" />
        <h1>Woraphon Choaywong</h1>
        <h1>Team Leader</h1>
        <Link href='mailto:w.choaywong@campus.tu-berlin.de'>w.choaywong@campus.tu-berlin.de</Link>
        
        </div>

        <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center">
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="person2" />
        <h1>Denis Shcherba</h1>
        <h1>Programming</h1>
        <Link href='mailto:d.shcherba@campus.tu-berlin.de'>d.shcherba@campus.tu-berlin.de</Link>
        </div>

        <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center">
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="person3" />
        <h1>Eckart Cobo Briesewitz</h1>
        <h1>Programming</h1>
        <Link href='mailto:cobo-briesewitz@campus.tu-berlin.de'>cobo-briesewitz@campus.tu-berlin.de</Link>
        </div>

        <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center">
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="person4" />
        <h1>Patthicha Mahakijdechachai</h1>
        <h1>Treasurer</h1>
        <Link href='mailto:p.mahakijdechachai@campus.tu-berlin.de'>p.mahakijdechachai@campus.tu-berlin.de</Link>
        </div>

        <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center col-start-2">
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="person3" />
        <h1>Harry Bason</h1>
        <h1>Mechanical Design</h1>
        <Link href='mailto:h.bason@campus.tu-berlin.de'>h.bason@campus.tu-berlin.de</Link>
        </div>

        <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center">
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="person4" />
        <h1>Phumin Lertpredanan</h1>
        <h1>Electronics Design</h1>
        <Link href='mailto:p.lertpredanan@campus.tu-berlin.de'>p.lertpredanan@campus.tu-berlin.de</Link>
        </div>

    </div>
  );
}
