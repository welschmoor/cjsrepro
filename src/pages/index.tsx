import type { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import CraftJsEditor from '@/components/craft-js/CraftJsEditor'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      editorTarget: query.target || null,
    },
  }
}

type EditorProps = {
  editorTarget: string
}

const Editor = ({ editorTarget }: EditorProps): JSX.Element => {
  const contentData = { content: '{}' }

  const [tempContent, setTempContent] = useState<undefined>()

  useEffect(() => {
    if (contentData && tempContent !== undefined) setTempContent(contentData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentData])

  return (
    <CraftJsEditor
      content={contentData?.content}
      onSubmitContent={async (editorContent) => {
        console.log('onSubmitContent')
      }}
    />
  )
}

export default Editor
