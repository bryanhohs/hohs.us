'use client'

import { Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import CircularProgress from '@mui/material/CircularProgress'

export default function Progress() {
  return (
    <div className="flex flex-col items-center w-full h-full z-10 my-75">
      <div className="flex items-center justify-center">
        <Stack>
          <Typography variant="h3" gutterBottom color={grey[50]}>
            Loading...
          </Typography>
        </Stack>
      </div>
      <div className="flex items-center justify-center">
        <Stack>
          <CircularProgress />
        </Stack>
      </div>
    </div>
  )
}
