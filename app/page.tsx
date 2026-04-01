import ChatIcon from '@mui/icons-material/Chat'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import PublicIcon from '@mui/icons-material/Public'
import { Avatar, Link, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import generateAiText from './src/ai'
import config from './src/config'
import GrowQuote from './src/GrowQuote'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default async function Hohs() {
  const geminiText = await generateAiText()
  return (
    <main className="flex flex-col items-center w-full h-full z-10 my-50">
      <div className="flex text-center">
        <Stack>
          <Avatar
            src={config.profile_picture}
            sx={{ width: 150, height: 150 }}
          ></Avatar>
        </Stack>
      </div>
      <div className="flex text-center mt-5">
        <Stack>
          <Typography variant="h3" color={grey[50]}>
            {config.site_name_full}
          </Typography>
        </Stack>
      </div>
      <div className="flex text-center mt-3">
        <Stack>
          <Typography variant="body1" color={grey[50]}>
            {config.site_title}
          </Typography>
        </Stack>
      </div>
      <div className="flex text-center mt-5">
        <Stack>
          <ul className="flex flex-row list-none space-x-5">
            <li className="align-center items-center">
              <Link
                underline="none"
                color={grey[50]}
                href={config.profile_phone}
                target="_self"
              >
                <PhoneIcon fontSize="large" />
              </Link>
            </li>
            <li className="align-center items-center">
              <Link
                underline="none"
                color={grey[50]}
                href={config.profile_sms}
                target="_self"
              >
                <ChatIcon fontSize="large" />
              </Link>
            </li>
            <li className="align-center items-center">
              <Link
                underline="none"
                color={grey[50]}
                href={config.profile_link}
                target="_blank"
              >
                <PublicIcon fontSize="large" />
              </Link>
            </li>
            <li className="align-center items-center">
              <Link
                underline="none"
                color={grey[50]}
                href={config.profile_email}
                target="_self"
              >
                <EmailIcon fontSize="large" />
              </Link>
            </li>
          </ul>
        </Stack>
      </div>
      <div className="flex text-center italic mt-5">
        <Stack>
          <GrowQuote text={geminiText} />
        </Stack>
      </div>
      <div className="flex text-center mt-5">
        <Stack>
          <Link
            underline="none"
            color={grey[50]}
            href={config.site_url}
            target="_blank"
          >
            &copy; {config.site_year} {config.site_name_full}
          </Link>
        </Stack>
      </div>
    </main>
  )
}
