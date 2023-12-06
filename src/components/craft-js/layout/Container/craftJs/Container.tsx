import { useEditor, useNode } from '@craftjs/core'
import React, { ReactNode } from 'react'

type ContainerInput = {
  background: string
  padding: string
  marginTop: string
  children: ReactNode
}

export const Container = ({ children }: ContainerInput): JSX.Element => {
  const {
    connectors: { connect },
    id,
  } = useNode()
  const { emptyNodes, actions } = useEditor((state) => {
    return {
      emptyNodes:
        Array.isArray(state?.nodes?.[id]?.data?.nodes) &&
        state?.nodes?.[id]?.data?.nodes.length < 1,
    }
  })

  return (
    <div
      className={`relative flex flex-col mx-4 p-8 border border-secondary-200 rounded-lg gap-8`}
      ref={(ref) => {
        if (ref) connect(ref)
      }}
    >
      {emptyNodes && (
        <>
          <div
            className="absolute bottom-0 right-0 z-50 p-3 text-white rounded cursor-pointer bg-primary-500"
            onClick={() => {
              actions.delete(id)
            }}
          >
            <div className="w-6 h-6" >DELETE</div>
          </div>
          <div
            className={`relative py-8 px-4 ${
              emptyNodes &&
              ' flex flex-row justify-center py-12 text-primary-500'
            }`}
          >
            <div className="w-10 h-10 text-lg" >PLUS</div>
          </div>
        </>
      )}

      {children}
    </div>
  )
}

export const ContainerDefaultProps = {
  background: '#fff',
  marginTop: 4,
}

Container.craft = {
  props: ContainerDefaultProps,
}

export default Container
