export type InputProps = {
  value?: string
  label?: string
  onChange?: (value: string) => void
  error?: string
  success?: boolean
  disabled?: boolean
  placeholder: string
  textAlign?: 'left' | 'right'
  required?: boolean
  name?: string
  id?: string
}
