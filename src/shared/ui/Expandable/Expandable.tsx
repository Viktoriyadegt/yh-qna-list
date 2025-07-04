import React, { useEffect, useRef, useState } from 'react'
import DOMPurify from 'dompurify'
import s from './Expandable.module.css'
import arrow from '../../assets/ArrowDown.svg'
import { Button } from '@/shared/ui'

type Props = {
  html: string
  previewHeight?: string
}

export const Expandable = ({ html, previewHeight = '250px' }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [needsButton, setNeedsButton] = useState(false)

  useEffect(() => {
    if (contentRef.current) {
      setNeedsButton(contentRef.current.scrollHeight > contentRef.current.clientHeight)
    }
  }, [html])

  return (
    <div className={s.container}>
      <div
        ref={contentRef}
        className={`${s.content} ${isExpanded ? s.expanded : ''}`}
        style={{ '--preview-height': previewHeight } as React.CSSProperties}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
      />
      <div className={s.toggleButton}>
        {needsButton && (
          <Button variant={'login'} onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Collapse' : 'Expand'}
            <img loading={'lazy'} src={arrow} alt={'toggle icon'} className={isExpanded ? s.arrow : ''} />
          </Button>
        )}
      </div>
    </div>
  )
}
