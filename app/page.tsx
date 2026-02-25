import config from "./src/config";
import Google from "./src/ai";
import Image from "next/image";
import ProfileImage from "../public/assets/images/profile.png";
import { Typography, Link, Grow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ChatBubbleLeftRightIcon, EnvelopeIcon, GlobeAmericasIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const dynamic = 'force-dynamic';
export const maxDuration = 15;

export default function Hohs() {
  const HOHS_FULL = config.site_name_full;
  const HOHS_TITLE = config.site_title;
  const HOHS_YEAR = config.site_year;
  const HOHS_URL = config.site_url;
  const GEMINI = Google();
  return (
    <div>
      <main className="flex flex-col items-center w-full h-full my-50 mx-auto">
        <Image
          className="rounded-full"
          src={ProfileImage}
          alt={HOHS_FULL}
          quality={100}
          preload={true}
          loading="eager"
          width={150}
          height={150}
        ></Image>
        <div className="flex text-center text-3xl font-extrabold z-10 mt-10">
          <h1>
            {HOHS_FULL}
          </h1>
        </div>
        <div className="text-center text-md font-normal z-10 mt-5">
          <Typography
            variant="body1"
            gutterBottom
            color={grey[50]}>
              {HOHS_TITLE}
          </Typography>
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
        <div className="flex text-center z-10 mt-10">
          <Grow
            in={true}
            timeout="auto">
            <Typography
              variant="body1"
              gutterBottom
              color={grey[50]}>
                &ldquo;{GEMINI}&rdquo;
            </Typography>
          </Grow>
        </div>
        <div className="text-center static bottom-0 text-sm z-10 mt-10">
          <Link
            underline="none"
            gutterBottom
            color={grey[50]}
            href={HOHS_URL}
            target="_blank">
              &copy; {HOHS_YEAR} {HOHS_FULL}
          </Link>
        </div>
      </main>
    </div>
  );
}
