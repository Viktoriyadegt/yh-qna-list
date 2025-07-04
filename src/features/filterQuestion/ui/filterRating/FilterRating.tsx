import { useAppSelector } from '@/shared/api/config/store.ts'
import { useDispatch } from 'react-redux'
import s from '@/features/filterQuestion/ui/filterSpecialization/FilterSpecialization.module.css'
import { Button, Text } from '@/shared/ui'
import { selectRate, setRate } from '@/features/filterQuestion'

const RATING_VALUES = [1, 2, 3, 4, 5]

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
