import Button from 'components/Button'

export default () => (
  <div className="flex flex-col gap-3 p-5">
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl">Variants</h2>
      <div className="flex gap-2 p-1">
        <Button text="Disabled (Filled)" variant="filled" disabled />
        <Button text="Disabled (Outlined)" variant="outlined" disabled />
        <Button text="Disabled (Text)" variant="text" disabled />
      </div>

      <div className="flex gap-2 p-1">
        <Button text="Primary (Filled)" variant="filled" intent="primary" />
        <Button text="Secondary (Filled)" variant="filled" intent="secondary" />
        <Button text="Success (Filled)" variant="filled" intent="success" />
        <Button text="Error (Filled)" variant="filled" intent="error" />
        <Button text="Danger (Filled)" variant="filled" intent="danger" />
        <Button text="Warning (Filled)" variant="filled" intent="warning" />
      </div>

      <div className="flex gap-2 p-1">
        <Button text="Primary (Outlined)" variant="outlined" intent="primary" />
        <Button text="Secondary (Outlined)" variant="outlined" intent="secondary" />
        <Button text="Success (Outlined)" variant="outlined" intent="success" />
        <Button text="Error (Outlined)" variant="outlined" intent="error" />
        <Button text="Danger (Outlined)" variant="outlined" intent="danger" />
        <Button text="Warning (Outlined)" variant="outlined" intent="warning" />
      </div>

      <div className="flex gap-2 p-1">
        <Button text="Primary (Text)" variant="text" intent="primary" />
        <Button text="Secondary (Text)" variant="text" intent="secondary" />
        <Button text="Success (Text)" variant="text" intent="success" />
        <Button text="Error (Text)" variant="text" intent="error" />
        <Button text="Danger (Text)" variant="text" intent="danger" />
        <Button text="Warning (Text)" variant="text" intent="warning" />
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl">Sizes</h2>
      <div className="flex gap-2 p-1">
        <Button text="small" variant="filled" intent="primary" size="small" />
        <Button text="small" variant="filled" intent="error" size="small" />
        <Button text="small" variant="outlined" intent="primary" size="small" />
        <Button text="small" variant="outlined" intent="error" size="small" />
      </div>

      <div className="flex gap-2 p-1">
        <Button text="medium" variant="filled" intent="primary" size="medium" />
        <Button text="medium" variant="filled" intent="error" size="medium" />
        <Button text="medium" variant="outlined" intent="primary" size="medium" />
        <Button text="medium" variant="outlined" intent="error" size="medium" />
      </div>

      <div className="flex gap-2 p-1">
        <Button text="large" variant="filled" intent="primary" size="large" />
        <Button text="large" variant="filled" intent="error" size="large" />
        <Button text="large" variant="outlined" intent="primary" size="large" />
        <Button text="large" variant="outlined" intent="error" size="large" />
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl">Loading</h2>
      <div className="flex gap-2 p-1">
        <Button text="Primary" intent="primary" loading />
        <Button text="Error" intent="error" loading />
        <Button text="Primary (Outlined)" variant="outlined" intent="primary" loading />
        <Button text="Error (Outlined)" variant="outlined" intent="error" loading />
      </div>
    </div>
  </div>
)
