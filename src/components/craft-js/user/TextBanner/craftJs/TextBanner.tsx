import React from 'react'
import NodeRenderer from '@/components/craft-js/NodeRenderer'
import TextBannerRendered from './TextBannerRendered'

type TextBannerInput = {
  name?: string
  heading?: string
  subHeading?: string
  backgroundColor?: string
  textColor?: string
  hrefUrl?: string
  linkEditorSelection?: any
  linkEditorInput?: string
  groupWidget?: string
  starterWidget?: boolean
  openLinkInNewTab?: boolean
}

export const TextBanner = ({
  name,
  backgroundColor,
  textColor,
  heading,
  subHeading,
  hrefUrl,
  linkEditorSelection,
  linkEditorInput,
  starterWidget,
}: TextBannerInput): JSX.Element => {
  return (
    <NodeRenderer nodeType="ownContent" starterWidget={starterWidget}>
      <TextBannerRendered
        name={name ? name : ''}
        backgroundColor={backgroundColor ? backgroundColor : ''}
        heading={heading ? heading : ''}
        subHeading={subHeading ? subHeading : ''}
        hrefUrl={hrefUrl ? hrefUrl : ''}
        textColor={textColor ? textColor : ''}
        linkEditorSelection={
          linkEditorSelection ? linkEditorSelection : 'noLink'
        }
        linkEditorInput={linkEditorInput ? linkEditorInput : ''}
        craftJsComponent={true}
      />
    </NodeRenderer>
  )
}
export default TextBanner
