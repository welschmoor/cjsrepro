import { useEditor, useNode, Element } from '@craftjs/core'
import React, { ReactNode, useEffect } from 'react'
import Container from '../../Container/craftJs'

type PageContainerInput = {
  padding: string
  children: ReactNode
}

export const PageContainer = ({
  padding,
  children,
}: PageContainerInput): JSX.Element => {
  const {
    connectors: { connect, drag },
  } = useNode()

  const { emptyPage, query, actions } = useEditor((state) => {
    return {
      emptyPage:
        Array.isArray(state?.nodes?.ROOT?.data?.nodes) &&
        state?.nodes?.ROOT?.data?.nodes.length < 1,
    }
  })

  useEffect(() => {
    if (emptyPage) {
      const newContainer = {
        data: {
          type: Element,
          props: { is: Container, canvas: true },
        },
      }
      const node = query.parseFreshNode(newContainer).toNode()
      actions.add(node, 'ROOT')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emptyPage])

  return (
    <div
      style={{ padding: `${padding}px` }}
      ref={(ref) => {
        if (ref) connect(drag(ref))
      }}
    >
      {children}
    </div>
  )
}

export const PageContainerSettings = (): null => {
  return null
}

export const PageContainerDefaultProps = {
  background: '#ffffff',
  padding: 3,
}

PageContainer.craft = {
  props: PageContainerDefaultProps,
  related: {
    settings: PageContainerSettings,
  },
  rules: {
    canMoveIn: () => false,
  },
}

export default PageContainer
