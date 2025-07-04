import s from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/Header'

export const Layout = () => {
  return (
    <div className={s.layout}>
      <div className={s.main}>
        <Header />
        <main className={s.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
