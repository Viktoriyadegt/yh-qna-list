import s from '../Questions.module.css'
import { Text } from '@/shared/ui'
import { useAppSelector } from '@/shared/api/config/store.ts'
import { selectSpecializations } from '@/features/filterQuestions'
import { useGetSpecializationQuery } from '@/entities/specializations'

export const QuestionsListTitle = () => {
  const id = useAppSelector(selectSpecializations)
  const { data } = useGetSpecializationQuery(+id)
  return (
    <>
      <div className={s.header}>
        <Text as={'h1'} variant={'body-24-med'} color={'black'} className={s.title}>
          Questions {data?.title}
        </Text>
      </div>
      <hr className={s.separator} />
    </>
  )
}
