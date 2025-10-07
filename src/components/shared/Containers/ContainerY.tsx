import React, { ReactNode } from 'react'

const ContainerY = ({className, children}: {className?: string, children: ReactNode}) => {
  return (
    <main className={`xl:space-y-40 ${className}`}>
      {children}
    </main>
  )
}

export default ContainerY
