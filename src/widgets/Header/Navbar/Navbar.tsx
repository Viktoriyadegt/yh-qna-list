import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <a className={s.link} href={'#'}>
            База вопросов
          </a>
        </li>
        <li>
          <a className={s.link} href={'#'}>
            Тренажер
          </a>
        </li>
      </ul>
    </nav>
  )
}
