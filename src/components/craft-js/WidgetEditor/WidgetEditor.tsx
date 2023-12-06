import React, { FC, useContext } from 'react'
import WidgetsOverview from '../WidgetsOverview/WidgetsOverview'
import { useEditor } from '@craftjs/core'

import SettingsContext from '../CraftJsEditor/SettingsContext'
import SettingsPanel from '../SettingsPanel'

const WidgetEditor: FC = () => {
  const { selectedWidget } = useContext(SettingsContext)

  const { nodes } = useEditor((state) => ({
    nodes: state.nodes,
  }))

  return (
    <div className="w-full h-full">
      {selectedWidget === 'Overview' ? (
        <WidgetsOverview content={nodes} />
      ) : (
        <SettingsPanel />
      )}
    </div>
  )
}

export default WidgetEditor
