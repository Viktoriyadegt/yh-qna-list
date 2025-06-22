import type { ReactNode } from 'react'
import s from './Layout.module.css'
import { Header } from '../../widgets/Header/Header.tsx'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.layout}>
      <div className={s.main}></div>
      <Header />
      <main className={s.content}>{children}</main>
    </div>
  )
}
