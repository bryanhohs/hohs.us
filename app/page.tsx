import Image from "next/image";
import ProfileImage from "../public/assets/images/profile.png";
import { ChatBubbleLeftRightIcon, EnvelopeIcon, GlobeAmericasIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Hohs() {
  return (
    <div>
      <main className="flex flex-col items-center w-full h-full my-50 mx-auto">
        <Image
          className="rounded-full"
          src={ProfileImage}
          alt="Bryan C. Hohs"
          quality={100}
          preload={true}
          loading="eager"
          width={150}
          height={150}
        ></Image>
        <div className="flex text-center text-3xl font-extrabold z-10 mt-10">
          <h1>
            Bryan C. Hohs
          </h1>
        </div>
        <div className="text-center text-md font-normal z-10 mt-5">
          <h2>
            CEO, Tech, Entrepreneur
          </h2>
        </div>
        <ul className="list-none flex flex-row space-x-5 z-10 mt-5">
          <li className="align-center items-center z-10">
            <a href="tel:13124399036" target="_self">
              <PhoneIcon className="size-10 text-normal-500" />
            </a>
          </li>
          <li className="align-center items-center z-10">
            <a href="sms:13124399036" target="_self">
              <ChatBubbleLeftRightIcon className="size-10 text-normal-500" />
            </a>
          </li>
          <li className="align-center items-center z-10">
            <a href="https://linktr.ee/bryanchohs" target="_blank">
              <GlobeAmericasIcon className="size-10 text-normal-500" />
            </a>
          </li>
          <li className="align-center items-center z-10">
            <a href="mailto:bryan.c@hohs.us" target="_self">
              <EnvelopeIcon className="size-10 text-normal-500" />
            </a>
          </li>
        </ul>
        <div className="text-center static bottom-0 text-sm z-10 mt-10">
          <a className="text-normal-500 hover:none" href="https://github.com/bryanhohs/hohs.us" target="_blank">
            &copy; 2026 Bryan C. Hohs
          </a>
        </div>
      </main>
    </div>
  );
}
