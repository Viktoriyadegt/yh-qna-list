import { useAppSelector } from '@/shared/api/config/store.ts'
import { useDispatch } from 'react-redux'
import { Button, SectionInfo } from '@/shared/ui'
import { selectRate, setRate } from '@/features/filterQuestions'
import { RATING_VALUES } from '@/features/filterQuestions/model/const/const.ts'

export const FilterRating = () => {
  const selected = useAppSelector(selectRate)
  const dispatch = useDispatch()

  const handlerChoose = (value: number) => {
    dispatch(setRate(value))
  }

  return (
    <SectionInfo title={'Question Rate'}>
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
    </SectionInfo>
  )
}
