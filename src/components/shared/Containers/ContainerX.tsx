import { ReactNode } from 'react'

const ContainerX = ({className, withColor, children}: {className?:string, withColor?:string, children: ReactNode}) => {
  return (
    <section className={`xl:p-[15.625vw] ${className} ${withColor ? "bg-[#F7F7F7]" : "bg-White"}`}>
      {children}
    </section>
  )
}

export default ContainerX
