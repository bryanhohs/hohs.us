'use client'

import { Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
export default function NotFound() {
  return (
    <div className='flex items-center justify-center my-50'>
      <Stack>
        <Typography variant="h3" gutterBottom color={grey[50]}>
          Not Found
        </Typography>
      </Stack>
    </div>
  )
}
