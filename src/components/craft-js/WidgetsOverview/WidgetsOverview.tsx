import React, { FC, useContext, useState } from 'react'
import WidgetsOverviewItem from './WidgetsOverviewItem'
import { Nodes, useEditor } from '@craftjs/core'
import SettingsContext, { WidgetType } from '../CraftJsEditor/SettingsContext'

interface WidgetsOverviewProps {
  content: Nodes
}

const WidgetsOverview: FC<WidgetsOverviewProps> = ({
  content,
}): JSX.Element => {
  const { setSelectedWidget } = useContext(SettingsContext)

  const [orderView, setOrderView] = useState(true)
  const [denyingModalOpen, setDenyingModelOpen] = useState(false)

  const { actions } = useEditor()

  const deleteWidget = (widgetId: string): void => {
    actions.delete(widgetId)
  }

  return (
    <div className="flex w-full p-8">
      {orderView ? (
        <div className="flex flex-col items-start w-full gap-8">
          ConfigHeadline
        </div>
      ) : (
        <div className="flex flex-col items-start w-full gap-8">
          <div>widgetOverview</div>
          <div className="flex flex-col items-start w-full gap-5">
            {content?.ROOT?.data?.nodes?.map((containerNodeId) => {
              return content?.[containerNodeId]?.data?.nodes?.map(
                (widgetNodeId) => {
                  return (
                    <WidgetsOverviewItem
                      key={content[widgetNodeId].id}
                      deletable={true}
                      widgetType={content[widgetNodeId].data.name}
                      widgetName={
                        content[widgetNodeId]?.data?.props?.name
                          ? content[widgetNodeId]?.data?.props?.name
                          : ''
                      }
                      onDeleteClick={() => {
                        if (
                          true &&
                          !content[widgetNodeId].data.props.starterWidget
                        ) {
                          setDenyingModelOpen(true)
                        } else {
                          deleteWidget(content[widgetNodeId].id)
                        }
                      }}
                      onEditClick={() => {
                        if (!content[widgetNodeId].data.props.starterWidget) {
                          setDenyingModelOpen(true)
                        } else {
                          actions.selectNode(content[widgetNodeId].id)
                          setSelectedWidget(
                            content[widgetNodeId].data.name as WidgetType
                          )
                        }
                      }}
                    />
                  )
                }
              )
            })}
          </div>
          <button
            className="w-full text-base font-bold rounded-md"
            onClick={() => setOrderView(true)}
          >
            {'changeWidgetOrder'}
          </button>
        </div>
      )}
    </div>
  )
}

export default WidgetsOverview
