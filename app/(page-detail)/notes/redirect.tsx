'use client'

import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NodeRedirect({ nid }: { nid: number }) {
  const router = useRouter()
  useLayoutEffect(() => {
    router.replace('/notes/1')
  }, [nid])
  return <div />
}
