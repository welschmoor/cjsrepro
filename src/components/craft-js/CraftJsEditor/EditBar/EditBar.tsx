import React, { FC, useContext } from 'react'
import { useRouter } from 'next/router'

import EditBarNavPoint from './EditBarNavPoint'
import SettingsContext from '../SettingsContext'
import Toolbox from '../../Toolbox'
import WidgetEditor from '../../WidgetEditor'

const EditBar: FC = () => {
  const { selectedEditBarState, setSelectedEditBarState, setSelectedWidget } =
    useContext(SettingsContext)

  const router = useRouter()

  return (
    <div className="flex flex-col w-full h-full">
      {true && (
        <div className="flex flex-row justify-center w-full px-8">
          <EditBarNavPoint
            active={selectedEditBarState === 'components'}
            label={'blocks'}
            onClick={() => {
              setSelectedEditBarState('components')
            }}
          />
          <EditBarNavPoint
            active={selectedEditBarState === 'edit'}
            label={'edit'}
            onClick={() => {
              setSelectedEditBarState('edit')
              setSelectedWidget('Overview')
            }}
          />
        </div>
      )}

      {selectedEditBarState === 'components' ? <Toolbox /> : <WidgetEditor />}
    </div>
  )
}

export default EditBar
