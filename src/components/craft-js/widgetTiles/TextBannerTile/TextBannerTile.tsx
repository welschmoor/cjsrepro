import React, { FC, useContext } from 'react'
import SettingsContext, {
  WidgetType,
} from '../../CraftJsEditor/SettingsContext'
import { TextBanner } from '../../user/TextBanner/craftJs/TextBanner'
import { useEditor } from '@craftjs/core'
import WidgetTile from '../../WidgetTile'

const TextBannerTile: FC = () => {
  const {
    connectors,
    actions: { selectNode },
  } = useEditor()
  const { setSelectedWidget, setSelectedEditBarState } =
    useContext(SettingsContext)

  const primaryColor = '#666'
  const secondaryColor = '#666'

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-12">
      {true && (
        <>
          <WidgetTile
            imageSrc="/widget_images/content-3.svg"
            tileTitle={'wide'}
            ref={(ref: HTMLDivElement) => {
              if (ref) {
                connectors.create(
                  ref,
                  <TextBanner
                    name=""
                    heading=""
                    subHeading=""
                    backgroundColor={primaryColor}
                    textColor={secondaryColor}
                    hrefUrl=""
                    starterWidget={true}
                  />,
                  {
                    onCreate: (nodeTree) => {
                      selectNode(nodeTree.rootNodeId)
                      setSelectedEditBarState('edit')
                      setSelectedWidget('TextBanner' as WidgetType)
                    },
                  }
                )
              }
            }}
          />
        </>
      )}
      <div className="flex flex-row items-center gap-2 col-span-2">
        <p>INFO</p>
        <span className="text-base font-zfSecondary">
          {'textBannerDescription'}
        </span>
      </div>
    </div>
  )
}

export default TextBannerTile
