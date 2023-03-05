import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'

import { Rating } from '@mui/material'
import RoomItemWrapper from './style'
import { Carousel } from 'antd'
import ArrowLeftIcon from '@/assets/svg/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/svg/ArrowRightIcon'
import Indicator from '@/base-ui/Indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const {itemData, itemWidth='24%', nowrap=false, itemClick} = props
  const [selectedIndex, setSelectedIndex] = useState(0)

  const carouselRef = useRef()

  function handleControlClick(event, isRight=true) {
    event.stopPropagation()
    isRight ? carouselRef.current.next() : carouselRef.current.prev()

    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectedIndex(newIndex)
  }

  function handleItemClick() {
    itemClick && itemClick(itemData)
  }

  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="房间图片" />
    </div>
  )

  const sliderEl = (
    <div className="slide">
      <div className="control">
        <div className="btn left" onClick={e => handleControlClick(e, false)}>
          <ArrowLeftIcon width='30px' height='30px' />
        </div>
        <div className="btn right" onClick={e => handleControlClick(e, true)}>
          <ArrowRightIcon width='30px' height='30px' />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {itemData?.picture_urls?.map((item, index) => (
            <div key={index} className='dot-items'>
              <span className={classNames('dot', {active: selectedIndex === index})}></span>
            </div>
          ))}
        </Indicator>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {itemData?.picture_urls?.map((item, index) => (
          <div className="cover" key={index}>
            <img src={item} alt="房间图片" />
          </div>
        ))}
      </Carousel>
    </div>
  )
  return (
    <RoomItemWrapper 
      verifyTextColor={itemData?.verify_info?.text_color || '#767676'} 
      width={itemWidth} 
      nowrap={nowrap}
      onClick={e => handleItemClick()} >
      <div className="inner">
        {itemData.picture_urls ? sliderEl : pictureEl}        
        <div className="desc">{itemData?.verify_info?.messages?.join('·')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating value={itemData.star_rating || 0} defaultValue={3} precision={0.5} readOnly sx={{fontSize: '12px', color: itemData.star_rating_color}}/>
          <span className="count">{itemData.reviews_count ?? 0}</span>
          {itemData.bottom_info && <span className='extra'>·&nbsp;{itemData.bottom_info.content}</span> }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  nowrap: PropTypes.bool,
  itemClick: PropTypes.func
}

export default RoomItem