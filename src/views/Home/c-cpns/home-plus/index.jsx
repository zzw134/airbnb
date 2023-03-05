import ScrollView from '@/base-ui/ScrollView'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HomePlusWrapper from './style'

const HomePlus = memo((props) => {
  const {itemData} = props
  return (
    <HomePlusWrapper>
      <SectionHeader title={itemData.title} subtitle={itemData.subtitle} />
      <ScrollView>
        {itemData.list.map(item => (<RoomItem key={item.id} itemData={item} nowrap={true} itemWidth='19%' />))}
      </ScrollView>
      <SectionFooter name='Plus' />
    </HomePlusWrapper>
  )
})

HomePlus.propTypes = {
  itemData: PropTypes.object
}

export default HomePlus