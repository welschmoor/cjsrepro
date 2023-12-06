import React, { FC, forwardRef } from 'react'

type WidgetTileProps = {
  imageSrc: string
  tileTitle: string
  ref?: any
}

const WidgetTile: FC<WidgetTileProps> = forwardRef<any, WidgetTileProps>(
  (props, widgetRef) => {
    const { imageSrc, tileTitle } = props

    return (
      <div
        ref={widgetRef}
        className="flex flex-col items-center cursor-pointer gap-4"
      >
        <img src={'/placeholderimage.png'} />
        <span className="text-base uppercase whitespace-pre-line">
          {tileTitle}
        </span>
      </div>
    )
  }
)

WidgetTile.displayName = 'WidgetTile'

export default WidgetTile
