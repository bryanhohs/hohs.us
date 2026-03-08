'use client'

import config from './config'

export default function VideoBackground() {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1] transform-gpu"
      preload="metadata"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={config.profile_video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
