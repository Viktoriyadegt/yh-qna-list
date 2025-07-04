import { useNavigate } from 'react-router-dom'
import s from './NavigateButton.module.css'
import arrowRight from '@/shared/assets/ArrowRight.svg'
import { Button, Text } from '@/shared/ui'

export const NavigateButton = () => {
  const navigate = useNavigate()
  return (
    <div className={s.section}>
      <Button onClick={() => navigate(-1)} variant={'expandable'} className={s.navigate}>
        <img loading={'lazy'} src={arrowRight} alt={'icon right'} />
        <Text variant={'body-16-sb'} color={'purple'}>
          Return
        </Text>
      </Button>
    </div>
  )
}
