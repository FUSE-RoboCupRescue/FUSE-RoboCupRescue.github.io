import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-2">
     
        <div>
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="banner_left" />
        </div>

        <div>
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="banner_left" />
        </div>

        <div>
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="banner_left" />
        </div>

        <div>
        <Image 
            src="/fuse_webpage/dummy_prof.png"
            width={640}
            height={640}
            className="max-h-[320px] max-w-[320px] object-contain top-0 left-0"
            alt="banner_left" />
        </div>

    </div>
  );
}
