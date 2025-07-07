import { DOTS, usePagination } from './usePagination.tsx'
import s from './Pagination.module.css'
import arrowForward from '../../assets/ArrowForward.svg'
import arrowBack from '../../assets/ArrowBack.svg'
import dots from '../../assets/Dots.svg'

type Type = {
  onPageChange: (page: number) => void
  className?: string
  currentPage: number
  totalCount: number
  pageSize: number
  siblingCount?: number
}

export const Pagination = (props: Type) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  const lastPage = paginationRange[paginationRange.length - 1] as number

  if (currentPage === 0 || totalCount === 0) {
    return null
  }
  const onNext = () => {
    onPageChange(currentPage + 1)
  }
  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <div className={className ? `${className} ${s.wrapper}` : s.wrapper}>
      <div className={s.paginationContainer}>
        <button
          disabled={paginationRange.length === 1 || currentPage === 1}
          className={s.arrowButton}
          onClick={onPrevious}
        >
          <img loading={'lazy'} src={arrowBack} alt="ArrowBack" className={s.arrowIcon} />
        </button>

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <img key={index} src={dots} alt="Dots" className={'dots'} />
          }

          return (
            <div
              key={index}
              className={pageNumber === currentPage ? `${s.paginationItem} ${s.selected}` : s.paginationItem}
              onClick={() => onPageChange(+pageNumber)}
            >
              {pageNumber}
            </div>
          )
        })}

        <button
          disabled={paginationRange.length === 1 || currentPage === lastPage}
          className={s.arrowButton}
          onClick={onNext}
        >
          <img src={arrowForward} alt="ArrawForward" content={s.arrowIcon} />
        </button>
      </div>
    </div>
  )
}
