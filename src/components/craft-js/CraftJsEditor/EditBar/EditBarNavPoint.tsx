import { FC } from 'react'
import cn from 'classnames'

type EditBarNavPointProps = {
  active: boolean
  label: string | JSX.Element
  onClick: () => void
  className?: string
}

const EditBarNavPoint: FC<EditBarNavPointProps> = ({
  active,
  label,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={cn(
        className,
        `w-full flex flex-row justify-center p-4 rounded-b cursor-pointer ${
          active
            ? 'bg-primary-500 text-inverted-500'
            : 'bg-filled-500 text-primary-500'
        }`
      )}
    >
      <span className="text-sm font-bold text-center uppercase">{label}</span>
    </div>
  )
}

export default EditBarNavPoint
