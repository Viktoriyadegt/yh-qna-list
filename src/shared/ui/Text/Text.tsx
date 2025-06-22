import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Text.module.css'

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body-14' | 'body-16' | 'body-18-sb' | 'body-20' | 'body-24-med' | 'bt1'
  className?: string
  color?: 'black' | 'white' | 'purple'
} & ComponentPropsWithoutRef<T>

export const Text = <T extends ElementType = 'p'>({
  as,
  children,
  className,
  variant = 'h1',
  color = 'black',
  ...rest
}: TextProps<T>) => {
  const Component = as || 'p'

  return (
    <Component className={clsx(s[variant], color && s[`color-${color}`], className)} {...rest}>
      {children}
    </Component>
  )
}
