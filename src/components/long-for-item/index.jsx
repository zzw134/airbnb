import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LongForItemWrapper from './style'

const LongForItem = memo((props) => {
  const {item} = props
  return (
    <LongForItemWrapper>
      <div className="cover"></div>
      <img src={item.picture_url} alt="" />
      <div className="city-name">{item.city}</div>
      <div className="price">均价&nbsp;{item.price}</div>
    </LongForItemWrapper>
  )
})

LongForItem.propTypes = {
  item: PropTypes.object
}

export default LongForItem