import Image from "next/image";
import { ChatBubbleLeftRightIcon, EnvelopeIcon, GlobeAmericasIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div>
      <video preload="metadata" autoPlay loop muted id="bg-video">
        <source src="/hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className="flex justify-center align-center w-full items-center h-160 mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image className="rounded-full" src="/profile.png" alt="Bryan C. Hohs" loading="eager" width={150} height={150} />
          <h1 className="text-center text-3xl font-black mt-5">Bryan C. Hohs</h1>
          <h3 className="text-center text-md font-normal mt-3">CEO, Tech, Entrepreneur</h3>
          {}
          <ul className="list-none flex flex-row space-x-10 mt-5">
            <li><a href="mailto:bryan.c@hohs.us"><EnvelopeIcon className="size-10 text-black-500" /></a></li>
            <li><a href="sms:13124399036"><ChatBubbleLeftRightIcon className="size-10 text-black-500" /></a></li>
            <li><a href="tel:13124399036"><PhoneIcon className="size-10 text-black-500" /></a></li>
            <li><a href="https://linktr.ee/bryanchohs"><GlobeAmericasIcon className="size-10 text-black-500" /></a></li>
          </ul>
          <div className="text-sm pt-5">&copy; 2026 Bryan C. Hohs</div>
        </div>
      </div>
    </div>
  );
}
