import clsx from 'clsx'
import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import concat from 'lodash/fp/concat'
import getOr from 'lodash/fp/getOr'
import reduce from 'lodash/fp/reduce'

import { ButtonProps, ButtonStyles } from 'types/button'

import { SIZES, COLORS, COMMON_CLASSES } from './constants'

const getColors = ({ disabled, intent, variant }: ButtonStyles) =>
  getOr([], `${disabled ? 'disabled' : intent}-${variant}`, COLORS)

const getClassStyles = (styles: ButtonStyles) => {
  return reduce(
    (classNames: string[], e: string[]) => concat(classNames, e),
    []
  )([COMMON_CLASSES, SIZES[styles.size], getColors(styles)])
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick = () => {},
  intent = 'primary',
  variant = 'filled',
  loading = false,
  disabled = false,
  size = 'medium',
}) => {
  const className = clsx(getClassStyles({ intent, variant, disabled, size, loading }))
  return (
    <button onClick={onClick} disabled={disabled || loading} className={className}>
      {text}
      {loading && <AiOutlineLoading3Quarters className="animate-spin inline-block ml-2" />}
    </button>
  )
}

export default Button
