import type { PropsWithChildren } from 'react'

export default async (props: PropsWithChildren) => {
  return <div>{props.children}</div>
}
