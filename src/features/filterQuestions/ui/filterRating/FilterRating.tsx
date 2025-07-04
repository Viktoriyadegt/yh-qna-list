import { useAppSelector } from '@/shared/api/config/store.ts'
import { useDispatch } from 'react-redux'
import s from '@/features/filterQuestions/ui/filterSpecialization/FilterSpecialization.module.css'
import { Button, Text } from '@/shared/ui'
import { selectRate, setRate } from '@/features/filterQuestions'
import { RATING_VALUES } from '@/features/filterQuestions/model/const/const.ts'

export const FilterRating = () => {
  const selected = useAppSelector(selectRate)
  const dispatch = useDispatch()

  const handlerChoose = (value: number) => {
    dispatch(setRate(value))
  }

  return (
    <div className={s.container}>
      <Text variant={'body-14'} color={'black'}>
        Question Rate
      </Text>
      <div className={s.list}>
        {RATING_VALUES.map((rate) => {
          return (
            <Button
              id={String(rate)}
              variant={'chip'}
              onClick={() => handlerChoose(rate)}
              isActive={selected.includes(rate)}
            >
              {rate}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
