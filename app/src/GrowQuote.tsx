'use client'

import { Grow, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'

export default function GrowQuote({ text }: { text: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <Grow in={visible} timeout={1000}>
      <Typography variant="body2" color={grey[50]}>
        &ldquo;{text}&rdquo;
      </Typography>
    </Grow>
  )
}