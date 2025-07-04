import { Button, Text } from '@/shared/ui'
import s from './Header.module.css'
import { Navbar } from './NavBar/Navbar.tsx'
import logo from '../../../shared/assets/Logo.svg'

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.navContainer}>
          <a href="/">
            <img loading={'lazy'} src={logo} alt={'logo'} />
          </a>
          <Navbar />
        </div>
        <div className={s.buttonContainer}>
          <Button variant="login">
            <Text as={'span'} variant={'bt1'} color={'purple'}>
              Login
            </Text>
          </Button>
          <Button variant={'register'}>
            <Text as={'span'} variant={'bt1'} color={'white'}>
              Register
            </Text>
          </Button>
        </div>
      </div>
    </div>
  )
}
