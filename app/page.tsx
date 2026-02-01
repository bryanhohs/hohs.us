import Image from "next/image";
import ProfileImage from "../public/assets/images/profile.png";
import { ChatBubbleLeftRightIcon, EnvelopeIcon, GlobeAmericasIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Hohs() {
  return (
    <div>
      <div className="flex justify-center align-center items-center w-full h-150 mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src={ProfileImage}
            alt="Bryan C. Hohs"
            loading="eager"
            width={150}
            height={150}
          ></Image>
          <h1 className="text-center text-3xl font-black mt-5">Bryan C. Hohs</h1>
          <h3 className="text-center text-md font-normal mt-5">CEO, Tech, Entrepreneur</h3>
          <ul className="list-none flex flex-row space-x-5 mt-5">
            <li className="align-center items-center z-10">
              <a href="tel:13124399036" target="_self">
                <PhoneIcon className="size-10 text-black-500" />
              </a>
            </li>
            <li className="align-center items-center z-10">
              <a href="sms:13124399036" target="_self">
                <ChatBubbleLeftRightIcon className="size-10 text-black-500" />
              </a>
            </li>
            <li className="align-center items-center z-10">
              <a href="https://linktr.ee/bryanchohs" target="_blank">
                <GlobeAmericasIcon className="size-10 text-black-500" />
              </a>
            </li>
            <li className="align-center items-center z-10">
              <a href="mailto:bryan.c@hohs.us" target="_self">
                <EnvelopeIcon className="size-10 text-black-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center static bottom-0 text-sm mt-5">
        <a className="text-black-500 hover:none" href="https://github.com/bryanhohs/hohs.us" target="_blank">
          &copy; 2026 Bryan C. Hohs
        </a>
      </div>
    </div>
  );
}
