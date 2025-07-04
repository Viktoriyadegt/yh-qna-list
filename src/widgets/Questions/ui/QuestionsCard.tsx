import { useSearchParams } from 'react-router-dom'
import s from './Questions.module.css'
import { useAppDispatch, useAppSelector } from '@/shared/api/config/store.ts'
import { selectFilters, setFilters, setPage } from '@/features/filterQuestions'
import { useGetQuestionsQuery } from '@/entities/questions'
import { QuestionsEmpty, QuestionsList, QuestionsListSkeleton, QuestionsListTitle } from '@/widgets/Questions'
import Card from '@/shared/ui/Card/Card'
import { Pagination } from '@/shared/ui'
import { useEffect } from 'react'
import { searchParamsToFilters } from '@/shared/utils/searchParamsToFilters.ts'
import { filtersToSearchParams } from '@/shared/utils/filtersToSearchParams.ts'

export const QuestionsCard = () => {
  const filters = useAppSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || '1')
  const dispatch = useAppDispatch()

  const onPageChange = (page: number) => {
    dispatch(setPage(page))
  }

  useEffect(() => {
    const newFilters = searchParamsToFilters(searchParams)
    dispatch(setFilters(newFilters))
  }, [])

  useEffect(() => {
    const params = filtersToSearchParams(filters)
    setSearchParams(params)
  }, [filters])

  const { data: qu } = useGetQuestionsQuery(filters)

  if (!qu) {
    return <QuestionsListSkeleton />
  }

  return (
    <Card className={s.card}>
      <QuestionsListTitle />
      <div>{qu.data.length === 0 ? <QuestionsEmpty /> : <QuestionsList questions={qu.data} />}</div>
      <Pagination onPageChange={onPageChange} currentPage={page} totalCount={qu.total} pageSize={10} />
    </Card>
  )
}
