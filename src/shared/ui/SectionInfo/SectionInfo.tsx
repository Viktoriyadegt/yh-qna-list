import s from './SectionInfo.module.css'
import { Text } from '../index.ts'

type Props = {
  title: string
  children?: React.ReactNode
}

export const SectionInfo = ({ title, children }: Props) => {
  return (
    <div className={s.section}>
      <Text variant={'body-16'} color={'black7'}>
        {title}:
      </Text>
      <div className={s.list}>{children}</div>
    </div>
  )
}
