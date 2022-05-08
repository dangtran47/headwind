export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'link'

export type ButtonIntent = 'primary' | 'secondary' | 'success' | 'error' | 'danger' | 'warning'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonStyles = {
  intent: ButtonIntent
  variant: ButtonVariant
  loading: boolean
  disabled: boolean
  size: ButtonSize
}

export type ButtonProps = {
  text: string
  onClick?: () => void
} & Partial<ButtonStyles>

export type ButtonLinkProps = { href: string } & Omit<ButtonProps, 'onClick' & 'variant'>
