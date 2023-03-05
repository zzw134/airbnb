import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cnps/entire-filter'
import EntirePagination from './c-cnps/entire-pagination'
import EntireRooms from './c-cnps/entire-rooms'
import EntireWrapper from './style'
import { fetchListDataAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchListDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: false}))
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire