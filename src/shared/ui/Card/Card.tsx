import type { ReactNode } from 'react'
import s from './Card.module.css'

type Props = {
  children?: ReactNode
  className?: string
}

const Card = ({ children, className }: Props) => {
  return <section className={`${s.container} ${className}`}>{children}</section>
}

export default Card
