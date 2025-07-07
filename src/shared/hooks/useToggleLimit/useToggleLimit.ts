import { useEffect, useState } from 'react'

type Props = {
  expandedLimit: number
  defaultLimit: number
}

export const useToggleLimit = ({ expandedLimit, defaultLimit }: Props) => {
  const [show, setShow] = useState(false)
  const [limit, setLimit] = useState(defaultLimit)

  useEffect(() => {
    setLimit((prev) => {
      if (prev === defaultLimit) {
        return expandedLimit
      } else {
        return defaultLimit
      }
    })
  }, [show])

  const toggleShow = () => {
    setShow(!show)
  }

  return { show, toggleShow, limit }
}
