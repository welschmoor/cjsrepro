import { FC, useContext, useEffect, useState } from 'react'
import { Frame, useEditor } from '@craftjs/core'
import {
  defaultCraftJsContent,
} from './defaultCraftJsContent'
import { useRouter } from 'next/router'


import SettingsContext from './SettingsContext'
import EditBar from './EditBar'

const EditorContent: FC = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()



  const [fetchError, setFetchError] = useState<string | boolean>(false)
  const { content, setSelectedEditBarState, setSelectedWidget } =
    useContext(SettingsContext)

  const {
    enabled,
    actions,
    nodes,
    selectedNodeId,
    query: { parseReactElement },
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
    nodes: state.nodes,
    selectedNodeId: query.getEvent('selected').last(),
  }))
  console.log('content:::', content)
  const loadCurrentPageIntoEditor = async (): Promise<void> => {
    setLoading(true)

    try {
      if (content) {
        if (content === '{}' || !content || typeof content === 'undefined') {
          actions.deserialize(defaultCraftJsContent)
        } else {
          actions.deserialize(content)
        }

        setSelectedEditBarState('components')
        setSelectedWidget('Overview')
      }
    } catch (e) {
      console.log('error: ', e)
      setFetchError('there was an error in getting the page data')
    }

    setLoading(false)
  }

  useEffect(() => {
    if (enabled) {
      loadCurrentPageIntoEditor()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content])

  if (loading) {
    return (
      <div className="flex flex-row items-center justify-center p-4">
        loading...
      </div>
    )
  }
  if (fetchError) {
    return (
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <div>{fetchError}</div>
        <button
          className="border"
          onClick={() => {
            setFetchError(false)
            loadCurrentPageIntoEditor()
          }}
        >
          retry
        </button>
        <button
          className="border"
          onClick={() => {
            setFetchError(false)
            actions.deserialize(defaultCraftJsContent)
          }}
        >
          start blank
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="overflow-y-scroll shadow-xl" style={{ flex: '0 0 25%' }}>
        <EditBar />
      </div>
      <div
        className="flex flex-col overflow-y-scroll"
        style={{ flex: '1 1 75%' }}
      >
        <div
          style={{
            width: false ? '530px' : '100%',
            marginLeft: 'auto' ,
            marginRight: 'auto' ,
          }}
        >
          <Frame></Frame>
        </div>
      </div>
    </>
  )
}

export default EditorContent
