import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Text.module.css'

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body-14' | 'body-16' | 'body-18-sb' | 'body-20' | 'body-24-med'
  className?: string
  color?: 'primary' | 'secondary' | 'accent'
} & ComponentPropsWithoutRef<T>

export const Text = <T extends ElementType = 'p'>({
  as,
  children,
  className,
  variant = 'h1',
  color = 'primary',
  ...rest
}: TextProps<T>) => {
  const Component = as || 'p'

  return (
    <Component className={clsx(s[variant], color && s[`color-${color}`], className)} {...rest}>
      {children}
    </Component>
  )
}
