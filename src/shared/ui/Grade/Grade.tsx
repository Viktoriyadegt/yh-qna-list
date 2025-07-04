import { Text } from '@/shared/ui'
import s from './Grade.module.css'

type Props = {
  label: string
  value: number
}

export const Grade = ({ label, value }: Props) => {
  return (
    <div className={s.grade}>
      <Text variant={'body-14-med'} color={'black8'}>
        {label}:
      </Text>
      <Text variant={'body-14-sb'} color={'black8'}>
        {value}
      </Text>
    </div>
  )
}
