import Input from 'components/Input'
import Button from 'components/Button'
import Popover from 'components/Popover'
import { useState } from 'react'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    alert(`Email: ${email}, Password: ${password}`)
  }

  return (
    <div className="flex flex-col p-4 gap-2">
      <Popover
        text="Popover"
        panel={
          <form className="flex flex-col gap-1">
            <Input
              placeholder="Email"
              type="email"
              label="Email"
              value={email}
              onChange={setEmail}
            />
            <Input
              placeholder="Password"
              type="password"
              label="Password"
              value={password}
              onChange={setPassword}
            />
            <Button text="Login" onClick={onSubmit} />
          </form>
        }
      />

      <Popover
        text="Success Outlined"
        intent="success"
        buttonProps={{ variant: 'outlined' }}
        panel={<div>Extend</div>}
      />

      <Popover
        text="Error Filled"
        intent="error"
        buttonProps={{ variant: 'text' }}
        panel={<div>Extend</div>}
      />
    </div>
  )
}
