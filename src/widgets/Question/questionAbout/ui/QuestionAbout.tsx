import s from './QuestionAbout.module.css'
import { AuthorInfo, KeywordsInfo, type Question, SkillsInfo } from '@/entities/questions'
import Card from '@/shared/ui/Card/Card.tsx'
import { Grade, SectionInfo } from '@/shared/ui'

type Props = {
  question: Question
}

export const QuestionAbout = ({ question }: Props) => {
  return (
    <div className={s.container}>
      <Card className={s.card}>
        <SectionInfo title={'Level'}>
          <Grade label={'Rating'} value={question.rate} />
          <Grade label={'Complexity'} value={question.complexity} />
        </SectionInfo>
        <SectionInfo title={'Skills'}>
          <SkillsInfo skills={question.questionSkills} />
        </SectionInfo>
        <SectionInfo title={'Keywords'}>
          <KeywordsInfo keywords={question.keywords} />
        </SectionInfo>
      </Card>
      <AuthorInfo author={question.createdBy.userName || 'nameless'} />
    </div>
  )
}
