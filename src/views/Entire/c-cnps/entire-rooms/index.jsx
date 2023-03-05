import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EntireRoomsWrapper from './style'

const EntireRooms = memo((props) => {
  const {list, totalCount, isLoading} = useSelector(state => {
    return {
      list: state.entire.list,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback((itemData) => {
    dispatch(changeDetailInfoAction(itemData))
    navigate('/detail')
  }, [dispatch, navigate])
 
  return (
    <EntireRoomsWrapper>
      <div className="title">{totalCount}多处住所</div>
      <div className="list">
        {list.map((item) => (
          <RoomItem itemData={(item)} itemWidth='19%' key={item._id} itemClick={handleItemClick} />
        ))}
      </div>
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms