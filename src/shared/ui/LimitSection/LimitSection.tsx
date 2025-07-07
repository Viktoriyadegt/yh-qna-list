import s from './LimitSection.module.css'
import { Button, Text } from '@/shared/ui'

import type { ReactNode } from 'react'

type LimitSectionProps = {
  title: string
  show: boolean
  onToggle: () => void
  children: ReactNode
}

export const LimitSection = ({ title, show, onToggle, children }: LimitSectionProps) => (
  <div className={s.container}>
    <Text variant={'body-14'} color={'black'}>
      {title}
    </Text>
    <div className={s.list}>{children}</div>
    <Button variant={'expandable'} as={'a'} onClick={onToggle}>
      {show ? 'Hide' : 'Show all'}
    </Button>
  </div>
)
