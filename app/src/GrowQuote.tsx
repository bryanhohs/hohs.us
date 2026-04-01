'use client'

import { Grow, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'

type GrowQuoteProps = {
  text: string
}

export default function GrowQuote({ text }: GrowQuoteProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Grow in={mounted} timeout={1000}>
      <Typography component="span" variant="body2" color={grey[50]}>
        &ldquo;{text}&rdquo;
      </Typography>
    </Grow>
  )
}
