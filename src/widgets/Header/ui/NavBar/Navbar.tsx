import s from './Navbar.module.css'
import { Text } from '@/shared/ui'

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.list}>
        <a className={s.link} href={'#'}>
          <Text variant={'body-16-med'}>Interview Questions</Text>
        </a>
        <a className={s.link} href={'#'}>
          <Text variant={'body-16-med'}>Interview Trainer</Text>
        </a>
      </div>
    </nav>
  )
}
