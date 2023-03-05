import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import DetailWrapper from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()
  dispatch(changeHeaderConfigAction({isFixed: false, topAlpha: false}))
  return (
    <DetailWrapper>
      <DetailPictures/>
    </DetailWrapper>
  )
})

export default Detail