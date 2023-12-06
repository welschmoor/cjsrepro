import { FC, useState } from 'react'
import { Editor } from '@craftjs/core'
import PageContainer from '../layout/PageContainer/craftJs'
import Container from '../layout/Container/craftJs'
import TextBanner from '../user/TextBanner/craftJs'
import SettingsContext, { EditbarState, WidgetType } from './SettingsContext'
import EditorLayout from '@/components/common/EditorLayout'
import EditorContent from './EditorContent'

type CraftJsEditorProps = {
  content: string | undefined | null
  onSubmitContent: (content: string) => Promise<void>
}

const CraftJsEditor: FC<CraftJsEditorProps> = ({
  content,
  onSubmitContent,
}) => {
  const [selectedEditbarState, setSelectedEditbarState] =
    useState<EditbarState>('components')

  const [currentSelectedWidgetType, setCurrentSelectedWidgetType] =
    useState<WidgetType>('Overview')

  return (
    <SettingsContext.Provider
      value={{
        test: 'kekekekekekeke',
        content,
        selectedEditBarState: selectedEditbarState,
        setSelectedEditBarState: setSelectedEditbarState,
        selectedWidget: currentSelectedWidgetType,
        setSelectedWidget: setCurrentSelectedWidgetType,
      }}
    >
      <Editor
        resolver={{
          PageContainer,
          Container,
          TextBanner,
        }}
      >
        <EditorLayout>
          <EditorContent />
        </EditorLayout>
      </Editor>
    </SettingsContext.Provider>
  )
}

export default CraftJsEditor
