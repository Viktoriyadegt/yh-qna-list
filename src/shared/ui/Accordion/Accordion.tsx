import { useState, type ReactNode, useRef } from 'react'
import s from './Accordion.module.css'
import arrowDown from './../../assets/ArrowDown.svg'
import { Text } from '../../ui'
import clsx from 'clsx'

type Props = {
  title: string
  children: ReactNode
  className?: ReactNode
}

const Accordion = ({ children, title, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const onOpen = () => setIsOpen(!isOpen)
  return (
    <div className={clsx(s.container, isOpen && s.opened, className)}>
      <div className={clsx(s.containerButton, isOpen && s.opened)}>
        <button onClick={onOpen} className={clsx(s.button, isOpen && s.opened)}>
          <Text variant={'body-20-med'} color={'black'} className={s.title}>
            {title}
          </Text>
          <img src={arrowDown} alt="AccordionArrow" className={clsx(s.showIconBottom, isOpen && s.showIconTop)} />
        </button>
      </div>
      <div
        className={clsx(s.containerContent, isOpen && s.opened)}
        style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className={s.content}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
