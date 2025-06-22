import clsx from 'clsx'
import { forwardRef, type InputHTMLAttributes } from 'react'
import s from './Input.module.css'
import search from './../../assets/Search.svg'

type Variant = 'text' | 'search'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  placeholder?: string
  error?: string
  variant?: Variant
  onEnter?: () => void
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, variant = 'text', onEnter, onKeyDown, placeholder, ...rest } = props

  const isSearch = variant === 'search'
  const inputClasses = clsx(s.input, s[variant], className)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.()
    }
    onKeyDown?.(e)
  }

  return (
    <div className={s.container}>
      {isSearch && (
        <div className={s.searchIcon}>
          <img src={search} alt="Search icon" />
        </div>
      )}
      <input ref={ref} className={inputClasses} placeholder={placeholder} onKeyDown={handleKeyDown} {...rest} />
    </div>
  )
})

Input.displayName = 'Input'
export { Input }
