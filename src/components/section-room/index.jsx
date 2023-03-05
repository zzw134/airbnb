import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomWrapper from './style'
import RoomItem from '../room-item'

const SectionRoom = memo((props) => {
  const {itemList=[], itemWidth='24%', count=4} = props
  return (
    <RoomWrapper>
      {itemList.slice(0, 8).map(item => (
        <RoomItem key={item.id}  itemData={item} itemWidth={itemWidth} count={count} />
      ))}
    </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  itemList: PropTypes.array,
  itemWidth: PropTypes.string,
  count: PropTypes.number
}

export default SectionRoom