import { createContext } from 'react'

export type EditbarState = 'components' | 'edit' | 'imageCrop'
export type WidgetType = 'Overview' | 'TextBanner'

type SettingsContextProps = {
  test: string
  content: string | null | undefined

  selectedWidget: string
  setSelectedWidget: (widget: WidgetType) => void

  selectedEditBarState: EditbarState
  setSelectedEditBarState: (state: EditbarState) => void
}

const SettingsContext = createContext<SettingsContextProps>({
  test: 'kekeke',
  content: null,

  selectedWidget: 'Overview',
  setSelectedWidget: () => {},

  setSelectedEditBarState: () => {},
  selectedEditBarState: 'components',
})

export default SettingsContext
