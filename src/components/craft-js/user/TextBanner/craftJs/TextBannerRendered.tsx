import { FC } from 'react'

interface Props {
  name?: string
  heading: string
  subHeading: string
  backgroundColor: string
  textColor?: string
  hrefUrl: string
  linkEditorSelection?: string
  linkEditorInput?: string
  craftJsComponent?: boolean
  openLinkInNewTab?: boolean
}

const TextBannerRendered: FC<Props> = ({
  heading,
  subHeading,
  backgroundColor,
  textColor = '#ffffff',
  hrefUrl,
  craftJsComponent = false,
  openLinkInNewTab = false,
}: Props) => {
  const renderedContent = (
    <div
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`flex flex-col items-center text-center p-2 text-white`}
    >
      <span className="text-xl font-bold capitalized text-white-500">
        {heading}
      </span>
      <span className="text-lg">{subHeading}</span>
    </div>
  )

  if (craftJsComponent) {
    return renderedContent
  } else {
    return (
      <a
        href={hrefUrl ? hrefUrl : undefined}
        target={openLinkInNewTab ? '_blank' : '_self'}
        rel={openLinkInNewTab ? 'noopener noreferrer' : ''}
      >
        {renderedContent}
      </a>
    )
  }
}

export default TextBannerRendered
