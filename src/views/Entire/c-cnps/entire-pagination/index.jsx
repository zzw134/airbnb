import { changeCurrentPageAction, fetchListDataAction } from '@/store/modules/entire'
import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EntirePaginationWrapper from './style'

const EntirePagination = memo(() => {
  const {totalCount, currentPage, list} = useSelector(state => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      list: state.entire.list
    }
  })

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  let timer = null
  function handleChange(e, page) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      window.scroll(0, 0)
      dispatch(changeCurrentPageAction(page - 1))
      dispatch(fetchListDataAction())
    }, 500)
  }
  return (
    <EntirePaginationWrapper>
      {!!list.length && (
        <div className='info'>
          <Pagination count={totalPage} onChange={handleChange} />
          <div className="desc">
            第{startCount} - {endCount} 个房源，共超过 {totalCount} 个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  )
})

export default EntirePagination