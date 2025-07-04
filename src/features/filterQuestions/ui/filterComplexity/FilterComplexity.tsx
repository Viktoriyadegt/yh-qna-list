import { useAppSelector } from '@/shared/api/config/store.ts'
import { useDispatch } from 'react-redux'
import s from './FilterComplexity.module.css'
import { Button, Text } from '@/shared/ui'
import { selectComplexity, setComplexity } from '@/features/filterQuestions'
import { COMPLEXITY_VALUES } from '@/features/filterQuestions/model/const/const.ts'

export const FilterComplexity = () => {
  const selected = useAppSelector(selectComplexity)
  const dispatch = useDispatch()

  const handlerChoose = (value: number[]) => {
    dispatch(setComplexity(value))
  }

  return (
    <div className={s.container}>
      <Text variant={'body-14'} color={'black'}>
        Question Difficulty
      </Text>
      <div className={s.list}>
        {COMPLEXITY_VALUES.map((v) => {
          return (
            <Button
              id={v.id}
              variant={'chip'}
              onClick={() => handlerChoose(v.value)}
              isActive={selected.includes(v.value[0])}
            >
              {v.title}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
