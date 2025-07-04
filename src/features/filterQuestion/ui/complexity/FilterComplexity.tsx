import { useAppSelector } from '@/shared/api/config/store.ts'
import { useDispatch } from 'react-redux'
import s from '../specialization/FilterSpecializations.module.css'
import { Button, Text } from '@/shared/ui'
import { selectComplexity, setComplexity } from '@/features/filterQuestion'

const COMPLEXITY_VALUES = [
  { id: '1', value: [1, 2, 3], title: '1–3' },
  { id: '2', value: [4, 5, 6], title: '4–6' },
  { id: '3', value: [7, 8], title: '7–8' },
  { id: '4', value: [9, 10], title: '9-10' },
]

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
