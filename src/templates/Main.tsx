import React, { ReactNode } from 'react'

type IMainProps = {
  meta: ReactNode
}

const Main: React.FC<IMainProps> = (props) => {
  return (
    <div className="antialiased w-full text-gray-700">
      {props.meta}

      <div className="max-w-screen-2xl mx-auto">
        <div className="py-5 text-xl content">{props.children}</div>
      </div>
    </div>
  )
}

export { Main }
