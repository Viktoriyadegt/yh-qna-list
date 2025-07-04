import { useAppSelector } from '@/shared/api/config/store.ts'
import { useDispatch } from 'react-redux'
import { Button, SectionInfo } from '@/shared/ui'
import { selectComplexity, setComplexity } from '@/features/filterQuestions'
import { COMPLEXITY_VALUES } from '@/features/filterQuestions/model/const/const.ts'

export const FilterComplexity = () => {
  const selected = useAppSelector(selectComplexity)
  const dispatch = useDispatch()

  const handlerChoose = (value: number[]) => {
    dispatch(setComplexity(value))
  }

  return (
    <SectionInfo title={'Question Difficulty'}>
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
    </SectionInfo>
  )
}
