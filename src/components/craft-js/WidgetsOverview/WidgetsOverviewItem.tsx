import { FC } from 'react'

type WidgetsOverviewItemProps = {
  deletable: boolean
  widgetType: string
  widgetName: string
  onDeleteClick?: () => void
  onEditClick: () => void
}

const WidgetsOverviewItem: FC<WidgetsOverviewItemProps> = ({
  deletable,
  widgetType,
  widgetName,
  onDeleteClick = () => {},
  onEditClick,
}) => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-4">
        <div onClick={() => onEditClick()} className="w-6 h-6 cursor-pointer">
          EDIT
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold uppercase text-base-500">
            {widgetType}
          </span>
          <span className="text-sm text-base-300">{widgetName}</span>
        </div>
      </div>
      {deletable && (
        <div
          onClick={() => onDeleteClick()}
          className="justify-end w-6 h-6 cursor-pointer"
        >
          DELETE
        </div>
      )}
    </div>
  )
}

export default WidgetsOverviewItem
