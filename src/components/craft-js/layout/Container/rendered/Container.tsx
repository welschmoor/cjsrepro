import React, { FC } from 'react'

const Container: FC = ({ children }) => {
  return <div className="relative flex flex-col gap-8">{children}</div>
}

export default Container
