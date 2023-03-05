import ScrollView from '@/base-ui/ScrollView'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import TabNamesWrapper from './style'

const SectionTabs = memo((props) => {
  const {tabNames = [], tabClick} = props
  const [selectIndex, setSelectIndex] = useState(0)
  function handleClickCity(index, item) {
    setSelectIndex(index)
    tabClick(index, item)
  }
  return (
    <TabNamesWrapper>
      <div className='city-wrapper'>
        <ScrollView>
          {tabNames.map((item, index) => (
            <div key={index}
                className={classNames(['city', {active: index === selectIndex}])}
                onClick={e => handleClickCity(index, item)}>{item}</div>
          ))}
        </ScrollView>
      </div>
    </TabNamesWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs