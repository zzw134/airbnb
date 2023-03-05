import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import SearchTabsWrapper from './style'

const SearchTabs = memo((props) => {
  const {titles, tabClick, tabIndex} = props
  // const [currentIndex,  setCurrentIndex] = useState(0)
  function itemClickHandle(index) {
    // setCurrentIndex(index)
    tabClick && tabClick(index)
  }
  return (
    <SearchTabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames('item', {active: tabIndex === index})} key={item.title}
              onClick={e => itemClickHandle(index)}>
              <span className="text">{item.title}</span>
              <span className="bottom"></span>
            </div>
          )
        })
      }
    </SearchTabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array,
  tabIndex: PropTypes.number,
  tabClick: PropTypes.func
}

export default SearchTabs