import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type ReactElement,
} from 'react'
import clsx from 'clsx'
import s from './Button.module.css'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  isActive?: boolean
  variant?: 'register' | 'login' | 'chip' | 'expandable'
} & ComponentPropsWithoutRef<T>

const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'button',
      children,
      className,
      isActive,
      fullWidth = false,
      variant = 'primary',
      ...rest
    } = props

    return (
      <Component
        ref={ref}
        className={clsx(s.button, s[variant], fullWidth && s.fullWidth, isActive && s.active, className)}
        {...rest}
      >
        {children}
      </Component>
    )
  },
)

export default Button as <T extends ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: ForwardedRef<ComponentRef<T>>
  },
) => ReactElement
export { Button }
