import s from './QuestionCard.module.css'
import type { Question } from '@/entities/questions'
import { Expandable, Text } from '@/shared/ui'
import DOMPurify from 'dompurify'
import Card from '@/shared/ui/Card/Card.tsx'

type Props = {
  question: Question
}

export const QuestionCard = ({ question }: Props) => {
  return (
    <div className={s.section}>
      <Card>
        <Text as={'h1'} variant={'body-24-med'} children={question.title} />
        <Text variant={'body-16-med'} children={question.description} />
      </Card>
      <Card>
        <Text variant={'body-20-med'} children={'Short answer'} />
        <Text variant={'body-16-med'} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question.shortAnswer) }} />
      </Card>
      <Card>
        <Text variant={'body-20-med'} children={'Long answer'} />
        <Expandable html={question.longAnswer} />
      </Card>
    </div>
  )
}
