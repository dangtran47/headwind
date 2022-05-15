import clsx from 'clsx'
import { InputProps } from 'types/input'

const Input: React.FC<InputProps> = ({
  onChange,
  name = '',
  id = '',
  value = '',
  error = '',
  disabled = false,
  success = false,
  placeholder = '',
  label = '',
  textAlign = 'left',
  required = 'true',
  type = 'text',
}) => {
  const handllOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }
  return (
    <div className={clsx('flex', 'flex-col', 'gap-1')}>
      {label && (
        <label htmlFor={id} className={clsx('text-sm', disabled && 'text-disabled')}>
          {label}
          {!required && ' (Optional)'}:
        </label>
      )}
      <input
        value={value}
        onChange={handllOnChange}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        className={clsx(
          'p-1',
          'border-2',
          'rounded',
          disabled && 'border-disabled',
          error && 'border-error',
          success && 'border-success',
          !(disabled && error && success) && 'border-primary',
          textAlign === 'left' ? 'text-left' : 'text-right'
        )}
      />
      {error && <p className={clsx('text-sm', 'text-danger')}>{error}</p>}
    </div>
  )
}

export default Input
