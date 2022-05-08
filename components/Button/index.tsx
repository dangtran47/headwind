import Button from './Button'
import ButtonLink from './ButtonLink'

import { ButtonProps } from 'types/button'

interface CompoundButtonProps extends React.FC<ButtonProps> {
  Link: typeof ButtonLink
}

const CombinedButton = Button as CompoundButtonProps

CombinedButton.Link = ButtonLink

export default CombinedButton
