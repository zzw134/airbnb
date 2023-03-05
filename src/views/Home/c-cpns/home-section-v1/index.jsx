import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import PropTypes from 'prop-types'
import HomeSectionWrapper from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const {itemData} = props
  return (
    <HomeSectionWrapper>
      <SectionHeader title={itemData.title} subtitle={itemData.subtitle}/>
      <SectionRoom itemList={itemData.list}/>
      <SectionFooter/>
    </HomeSectionWrapper>
  )
})

HomeSectionV1.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV1