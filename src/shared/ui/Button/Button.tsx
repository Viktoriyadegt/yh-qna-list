import { forwardRef, type ComponentPropsWithoutRef, type ElementType } from 'react'
import clsx from 'clsx'
import s from './Button.module.css'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'register' | 'login' | 'skill'
} & ComponentPropsWithoutRef<T>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', fullWidth = false, className, as, ...rest }, ref) => {
    const Component = as || 'button'

    return <Component ref={ref} className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)} {...rest} />
  },
)

Button.displayName = 'Button'
export { Button }
