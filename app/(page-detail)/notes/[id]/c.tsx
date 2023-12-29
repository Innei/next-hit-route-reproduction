'use client'

import { useState } from 'react'

export const BadStyleComp = () => {
  const [imageBlob, setImageBlob] = useState<string | null>(null)
  return (
    <div data-hide-print className={imageBlob ? 'h-[224px]' : '0'}>
      <div
        style={{
          backgroundImage: `url(${imageBlob})`,
        }}
        className="cover-mask-b h-full w-full bg-cover bg-center bg-no-repeat"
      />
    </div>
  )
}
