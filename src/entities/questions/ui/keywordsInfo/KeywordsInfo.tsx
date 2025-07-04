import { Button, Text } from '@/shared/ui'

type Props = {
  keywords: string[]
}

export const KeywordsInfo = ({ keywords }: Props) => {
  return (
    <>
      {keywords.map((k, i) => {
        return (
          <Button key={i} variant={'login'}>
            <Text variant={'body-16-med'} color={'purple'}>
              #{k}
            </Text>
          </Button>
        )
      })}
    </>
  )
}
