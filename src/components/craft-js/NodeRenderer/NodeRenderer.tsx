import React, { FC, ReactNode, useContext, useState } from 'react'
import SettingsContext, { WidgetType } from '../CraftJsEditor/SettingsContext'
import { useRouter } from 'next/router'
import { useEditor, useNode } from '@craftjs/core'


type NodeRendererProps = {
  nodeType: 'ownContent'
  starterWidget?: boolean
  children?: ReactNode
}

const NodeRenderer: FC<NodeRendererProps> = ({
  children,
  nodeType = 'ownContent',
  starterWidget,
}) => {

  const router = useRouter()
  const isStarter = true
  const { setSelectedEditBarState, setSelectedWidget } =
    useContext(SettingsContext)

  const [denyingModalOpen, setDenyingModelOpen] = useState(false)

  const {
    connectors: { drag, connect },
    id,
  } = useNode()
  const { selected, nodes, actions } = useEditor((state) => {
    const selected = state.events.selected.has(id)
    const nodes = state.nodes

    return {
      selected,
      nodes,
    }
  })

  function noWidgetAccess(): boolean {
    return false
  }

  return process.env.masterQueryTarget === router.query.target ? (
    <div
      onClick={() => {
        actions.selectNode(id)
        setSelectedEditBarState('edit')
        setSelectedWidget(nodes[id]?.data?.name as WidgetType)
      }}
    >
      {children}
    </div>
  ) : (
    <div
      className="relative"
      ref={(ref) => {
        if (ref) connect(ref)
      }}
    >
      <div
        className="absolute top-0 right-0 p-3 rounded cursor-pointer text-inverted-500 bg-primary-500"
        onClick={() => {
          if (noWidgetAccess()) {
            setDenyingModelOpen(true)
          } else {
            actions.selectNode(id)
            setSelectedEditBarState('edit')
            setSelectedWidget(nodes[id]?.data?.name as WidgetType)
          }
        }}
      >
        EDIT
      </div>

      <div
        className="absolute top-0 left-0 p-3 rounded cursor-pointer text-inverted-500 bg-primary-500"
        ref={(ref) => {
          if (ref) drag(ref)
        }}
        onDrag={() => {
          setSelectedWidget('Overview')
          setSelectedEditBarState('edit')
        }}
      >
        UP ARROW / DOWN ARROW
      </div>

      <div
        className="absolute bottom-0 right-0 p-3 rounded cursor-pointer text-inverted-500 bg-primary-500"
        onClick={() => {
          if (noWidgetAccess()) {
            setDenyingModelOpen(true)
          } else {
            actions.delete(id)
            setSelectedWidget('Overview')
            setSelectedEditBarState('components')
          }
        }}
      >
        DELETE
      </div>

      <div className="absolute bottom-0 left-0 p-2 border-2 rounded border-primary-500">
        <span className="text-xs font-bold text-primary-500">
          {nodeType}
        </span>
      </div>

      <div
        className={`px-8 py-20 border-2 border-primary-500 ${
          selected ? 'border-solid' : 'border-dashed'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default NodeRenderer
