import Link from 'next/link'
import Button from './Button'

import { ButtonLinkProps } from 'types/button'

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <Button {...props} variant="link" />
    </Link>
  )
}

export default ButtonLink
