import { useEditor } from '@craftjs/core'
import { useRouter } from 'next/router'
import React from 'react'

const SettingsPanel = (): JSX.Element | null => {
  const router = useRouter()
  const { selected } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last()
    let selected 

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state?.nodes[currentNodeId]?.data?.name,
        settings:
          state?.nodes[currentNodeId]?.related &&
          state?.nodes[currentNodeId]?.related?.settings,
        isDeletable:
          router.query.target === process.env.masterQueryTarget
            ? false
            : query.node(currentNodeId).isDeletable(),
      }
    }

    return {
      selected,
    }
  })

  return selected && !(selected.name === 'PageContainerCraftJsComponent') ? (
    <div className="flex flex-col w-full">
      {selected.settings && React.createElement(selected.settings)}
    </div>
  ) : null
}

export default SettingsPanel
