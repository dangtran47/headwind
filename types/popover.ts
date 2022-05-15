import { ReactNode } from 'react'
import { ButtonStyles } from './button'

export type PopoverIntent = 'primary' | 'secondary' | 'success' | 'error' | 'danger' | 'warning'

export type PanelProps = {
  size?: 'medium'
}

export type PanelStyles = {
  size: 'medium'
  intent: PopoverIntent
}

export type PopoverProps = {
  text: string
  panel: ReactNode
  buttonProps?: Partial<ButtonStyles>
  disabled?: boolean
  panelProps?: Partial<PanelProps>
  intent?: PopoverIntent
}
