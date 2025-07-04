import { Text } from '@/shared/ui'
import s from './AuthorInfo.module.css'

type Props = {
  author: string
}

export const AuthorInfo = ({ author }: Props) => {
  return (
    <div className={s.author}>
      <Text variant={'body-14-med'} className={s.text}>
        Автор:{' '}
        <Text as={'span'} variant={'body-14-med'} color={'purple'}>
          {author}
        </Text>
      </Text>
    </div>
  )
}
