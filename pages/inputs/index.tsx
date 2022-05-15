import Input from 'components/Input'
import { useState } from 'react'
import { InputProps } from 'types/input'

const InputWrapper = (props: InputProps) => {
  const [value, onChange] = useState('')

  return <Input value={value} onChange={onChange} {...props} />
}

export default () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-xl">Input</h1>
      <InputWrapper placeholder="Basic input" />
      <InputWrapper label="Input label" placeholder="Input with label" id="lable" />
      <InputWrapper label="disabled" placeholder="Disabled input" disabled />
      <InputWrapper
        label="Input label"
        placeholder="Input with error"
        error="Required"
        id="required"
      />
      <InputWrapper
        label="Input label"
        placeholder="Optional input"
        required={false}
        id="optional"
      />
      <InputWrapper label="Input label" placeholder="Input with success" success id="success" />
      <InputWrapper
        label="Input label"
        placeholder="Input with right text alignment"
        textAlign="right"
        id="text-right"
      />
    </div>
  )
}
