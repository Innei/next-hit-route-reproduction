import { BadStyleComp } from './c'

export default async (props) => {
  return (
    <div>
      <BadStyleComp />
      {props.children}
    </div>
  )
}
