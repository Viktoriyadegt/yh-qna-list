import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Text.module.css'
import type { TextColor, TextVariant } from '@/shared/types/types.ts'

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  variant?: TextVariant
  className?: string
  color?: TextColor
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
