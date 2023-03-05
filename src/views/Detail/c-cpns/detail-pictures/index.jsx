import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import DetailPicturesWrapper from './style'

const DetailPictures = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)
  const {detailInfo} = useSelector((state) => {
    return {
      detailInfo: state.detail.detailInfo
    }
  }, shallowEqual)
  return (
    <DetailPicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item'>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn" onClick={e => setShowBrowser(true)}>显示照片</div>
      {showBrowser && (
        <PictureBrowser closeBrower={(e) => setShowBrowser(false)} picture_urls={detailInfo?.picture_urls} />
      )}
    </DetailPicturesWrapper>
  )
})

export default DetailPictures