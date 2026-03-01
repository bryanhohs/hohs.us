import config from "./src/config";
import generateAiText from "./src/ai";
import { Stack, Avatar, Typography, Link, Grow } from '@mui/material';
import { grey } from '@mui/material/colors';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default async function Hohs() {
  const geminiText = await generateAiText();
  return (
    <div>
      <main className="flex flex-col items-center w-full h-full z-10 my-50">
        <Stack>
          <Avatar
            src="/assets/images/profile.png"
            sx={{ width: 150, height: 150 }}>
          </Avatar>
        </Stack>  
        <div className="flex text-center z-10 mt-3">
          <Stack>
            <Typography
              variant="h3"
              gutterBottom
              color={grey[50]}>
                {config.site_name_full}
            </Typography>
          </Stack>
        </div>
        <div className="flex text-center z-10 mt-3">
          <Stack>
            <Typography
              variant="body1"
              gutterBottom
              color={grey[50]}>
                {config.site_title}
            </Typography>
          </Stack>
        </div>
        <div className="flex text-center z-10 mt-3">
          <Stack>
            <ul className="flex flex-row list-none space-x-5">
              <li className="align-center items-center">
                <Link
                  underline="none"
                  color={grey[50]}
                  href="tel:13124399036">
                    <PhoneIcon fontSize="large" />
                </Link>
              </li>
              <li className="align-center items-center">
                <Link
                  underline="none"
                  color={grey[50]}
                  href="sms:13124399036">
                    <ChatIcon fontSize="large" />
                </Link>
              </li>
              <li className="align-center items-center">
                <Link
                  underline="none"
                  color={grey[50]}
                  href="https://linktr.ee/bryanchohs"
                  target="_blank">
                    <PublicIcon fontSize="large" />
                </Link>
              </li>
              <li className="align-center items-center">
                <Link
                  underline="none"
                  color={grey[50]}
                  href="mailto:bryan.c@hohs.us">
                    <EmailIcon fontSize="large" />
                </Link>
              </li>
            </ul>
          </Stack>
        </div>
        <div className="flex text-center italic z-10 mt-5">
          <Stack>
            <Grow
              in={true}
              timeout="auto">
              <Typography
                variant="body2"
                gutterBottom
                color={grey[50]}>
                  &ldquo;{geminiText}&rdquo;
              </Typography>
            </Grow>
          </Stack>
        </div>
        <div className="flex text-center z-10 mt-5">
          <Stack>
            <Link
              underline="none"
              color={grey[50]}
              href={config.site_url}
              target="_blank">
                &copy; {config.site_year} {config.site_name_full}
            </Link>
          </Stack>
        </div>
      </main>
    </div>
  );
}
