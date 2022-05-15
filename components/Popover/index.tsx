import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import concat from 'lodash/fp/concat'
import reduce from 'lodash/fp/reduce'

import { getClassStyles as getButtonClassStyles } from 'components/Button/Button'
import { PanelStyles, PopoverProps } from 'types/popover'

const PANEL_COMMON_CLASSES = ['border-2', 'p-3', 'rounded', 'mt-1', 'absolute', 'bg-white']

const PANEL_SIZES = {
  medium: ['w-96'],
}

const COLORS = {
  primary: ['border-primary'],
  secondary: ['border-secondary'],
  success: ['border-success'],
  danger: ['border-danger'],
  warning: ['border-warning'],
  error: ['border-error'],
}

export const getPanelClassStyles = (styles: PanelStyles) =>
  reduce(
    (classNames: string[], e: string[]) => concat(classNames, e),
    []
  )([PANEL_COMMON_CLASSES, PANEL_SIZES[styles.size], COLORS[styles.intent]])

const PopoverHeadful = ({
  buttonProps = {},
  text,
  disabled = false,
  panel,
  panelProps = {},
  intent = 'primary',
}: PopoverProps) => {
  const { variant = 'filled', size: buttonSize = 'medium' } = buttonProps
  const { size: panelSize = 'medium' } = panelProps

  const panelClasses = getPanelClassStyles({ size: panelSize, intent })

  return (
    <Popover>
      <Popover.Button
        className={clsx(getButtonClassStyles({ intent, variant, size: buttonSize, disabled }))}>
        {text}
      </Popover.Button>
      <Popover.Panel className={clsx(panelClasses)}>{panel}</Popover.Panel>
    </Popover>
  )
}

export default PopoverHeadful
