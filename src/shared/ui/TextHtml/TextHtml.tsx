import DOMPurify from 'dompurify'
import type { TextColor, TextVariant } from '@/shared/types/types.ts'
import { Text } from '@/shared/ui'
import s from './TextHtml.module.css'
import clsx from 'clsx'

type Props = {
  html: string
  variant?: TextVariant
  color?: TextColor
  className?: string
}

const TextHTML = ({ html, variant = 'body-16-med', color = 'black8', className }: Props) => {
  return (
    <div className={clsx(s.htmlText, className)}>
      <Text variant={variant} color={color} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
    </div>
  )
}
export default TextHTML
