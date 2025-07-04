import { useAppDispatch, useAppSelector } from '@/shared/api/config/store.ts'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/shared/hooks'
import { selectTitle, setTitle } from '@/features/filterQuestion'
import { Input } from '@/shared/ui'

export const SearchQuestion = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 1000)
  const keywords = useAppSelector(selectTitle)

  useEffect(() => {
    dispatch(setTitle(debouncedSearch))
  }, [debouncedSearch])

  useEffect(() => {
    setSearch(keywords || '')
  }, [keywords])

  return <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter a query..." />
}
