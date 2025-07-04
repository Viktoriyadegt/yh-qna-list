import s from './Question.module.css'
import { useGetQuestionQuery } from '@/entities/questions'
import { useParams } from 'react-router-dom'
import { QuestionCard } from '@/widgets/Question/questionCard'
import { QuestionAbout } from '@/widgets/Question/questionAbout'
import { NavigateButton } from '@/pages/Question'

const Question = () => {
  const param = useParams()
  const { data: qu } = useGetQuestionQuery(Number(param.questionId))

  if (!qu) {
    return <div>Loading...</div>
  }

  return (
    <div className={s.container}>
      <NavigateButton />
      <div className={s.info}>
        <QuestionCard question={qu} />
        <QuestionAbout question={qu} />
      </div>
    </div>
  )
}

export default Question
