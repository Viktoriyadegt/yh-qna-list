import s from './Page404.module.css'
import { Button, Text } from '@/shared/ui'

export const Page404 = () => {
  return (
    <div className={s.container}>
      <Text as={'h1'} className={s.title} color={'black8'}>
        404
      </Text>
      <Text as={'h2'} color={'black7'} className={s.subTitle}>
        Page not found
      </Text>
      <Button variant={'register'} as={'a'} href={'/'} className={s.button}>
        Return back to main page
      </Button>
    </div>
  )
}
