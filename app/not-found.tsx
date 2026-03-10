'use client'

import { Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center w-full h-full z-10 my-75">
      <div className="flex text-center">
        <Stack>
          <Typography variant="h3" color={grey[50]}>
            404: Not Found
          </Typography>
        </Stack>
      </div>
      <div className="flex text-center mt-3">
        <Stack>
          <Typography variant="body1" color={grey[50]}>
            The file you requested was not found.
          </Typography>
        </Stack>
      </div>
    </div>
  )
}
