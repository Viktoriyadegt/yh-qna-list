import { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/shared/api/config/store.ts'

export const useToggleLimit = <T extends (n: number) => { type: string; payload: number }>(
  currentLimit: number,
  collapsedLimit: number,
  expandedLimit: number,
  setLimitAction: T,
) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const toggleShow = () => {
    setShow((prev) => !prev)
    dispatch(setLimitAction(currentLimit === expandedLimit ? collapsedLimit : expandedLimit))
  }

  return { show, toggleShow }
}
