import config from "./src/config";
import Google from "./src/ai";
import { Avatar, Typography, Link, Grow } from '@mui/material';
import { grey } from '@mui/material/colors';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';

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
        <Avatar
          src="/assets/images/profile.png"
          sx={{ width: 150, height: 150 }}>
        </Avatar>
        <div className="flex text-center text-3xl font-extrabold z-10 mt-10">
          <Typography
            variant="h3"
            gutterBottom
            color={grey[50]}>
              {HOHS_FULL}
          </Typography>
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
            <Link
              underline="none"
              gutterBottom
              color={grey[50]}
              href="tel:13124399036"
              target="_self">
                <PhoneIcon fontSize="large" className="size-10 text-normal-500" />
            </Link>
          </li>
          <li className="align-center items-center z-10">
            <Link
              underline="none"
              gutterBottom
              color={grey[50]}
              href="sms:13124399036"
              target="_self">
                <ChatIcon fontSize="large" className="size-10 text-normal-500" />
            </Link>
          </li>
          <li className="align-center items-center z-10">
            <Link
              underline="none"
              gutterBottom
              color={grey[50]}
              href="https://linktr.ee/bryanchohs"
              target="_blank">
                <PublicIcon fontSize="large" className="size-10 text-normal-500" />
            </Link>
          </li>
          <li className="align-center items-center z-10">
            <Link
              underline="none"
              gutterBottom
              color={grey[50]}
              href="mailto:bryan.c@hohs.us"
              target="_self">
                <EmailIcon fontSize="large" className="size-10 text-normal-500" />
            </Link>
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
