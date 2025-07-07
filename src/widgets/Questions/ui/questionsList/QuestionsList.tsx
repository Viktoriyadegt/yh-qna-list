import s from '../Questions.module.css'
import { Button, Text } from '@/shared/ui'
import arrowRight from '../../../../shared/assets/ArrowRight.svg'
import { type Question } from '@/entities/questions'
import Accordion from '@/shared/ui/Accordion/Accordion.tsx'
import TextHtml from '@/shared/ui/TextHtml/TextHtml.tsx'

type Props = {
  questions: Question[]
}

export const QuestionsList = ({ questions }: Props) => {
  return (
    <div>
      {questions.map((question: Question) => {
        return (
          <Accordion key={question.id} title={question.title}>
            <TextHtml color={'black7'} html={question.shortAnswer} />
            <Button as={'a'} href={`/question/${question.id}`} variant={'expandable'} fullWidth className={s.navigate}>
              <Text variant={'body-16-sb'} color={'purple'}>
                More
              </Text>
              <img loading={'lazy'} src={arrowRight} alt={'icon right'} />
            </Button>
          </Accordion>
        )
      })}
    </div>
  )
}
