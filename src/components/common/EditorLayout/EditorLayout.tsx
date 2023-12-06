import React, { FC, ReactNode, useContext, useState } from 'react'
import { useEditor } from '@craftjs/core'
import { useRouter } from 'next/router'

type EditorLayoutProps = {
  children: ReactNode
}

const EditorLayout: FC<EditorLayoutProps> = ({ children }) => {
  const onSubmitContent = async (json: any) => console.log('submitting', json)
  const content = null

  const { query } = useEditor()

  const router = useRouter()
  const [savedData, setSavedData] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleClickSave = async (): Promise<void> => {
    let json = query.serialize()
    setSavedData(false)
    try {
      await onSubmitContent(json)
      setSavedData(true)
    } catch (error) {
      console.log(error)
      setErrorMessage('errorSavingEditor')
    }
  }

  const handleClickLeave = (): void => {
    console.log('leaving editor')
  }

  return (
    <div className="flex flex-col h-screen bg-gray-500">
      <div style={{ flex: '0 0 auto' }}>
        <div className="flex flex-row justify-between w-full border-b-2 border-primary-500">
          <button onClick={() => handleClickLeave()}>{'< exit'}</button>
          <div className="flex">
            <div className="flex items-center justify-between pl-2 w-72">
              <button
                onClick={() => handleClickSave()}
                className="text-sm text-primary-500"
              >
                {'save'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-auto overflow-hidden">{children}</div>
    </div>
  )
}

export default EditorLayout
