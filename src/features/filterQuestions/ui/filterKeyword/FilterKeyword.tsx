import { useAppDispatch, useAppSelector } from '@/shared/api/config/store.ts'
import { type ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '@/shared/hooks'
import { selectTitle, setTitle } from '@/features/filterQuestions'
import { Input } from '@/shared/ui'

export const FilterKeyword = () => {
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

  const handlerSearchQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return <Input value={search} onChange={handlerSearchQuestion} placeholder="Enter a query..." />
}
