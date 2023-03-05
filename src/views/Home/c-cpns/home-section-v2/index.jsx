import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import HomeSectionWrapper2 from './style'

import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const {itemData} = props
  
  // useState的初始化值只会在第一次组件渲染的时候会起作用，之后无论重新设置初始化值都是无效的
  const initialCityName = itemData.dest_address[0].name
  const [cityName, setCityName] = useState(initialCityName)
  const tabClickHandle = useCallback((index, name) => {
    setCityName(name)
  }, [])

  const tabNames = itemData?.dest_address?.map(item => item.name)

  return (
    <HomeSectionWrapper2>
      <SectionHeader title={itemData.title} subtitle={itemData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRoom itemList={itemData.dest_list?.[cityName]} itemWidth='32%' count={3} />
      <SectionFooter name={cityName}/>
    </HomeSectionWrapper2>
  )
})

HomeSectionV2.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV2