import SearchIcon from '@/assets/svg/SearchIcon'
import React, { memo, useEffect, useState } from 'react'
import SearchTabs from './c-cpns/search-tabs'
import { CenterWrapper } from './style'
import searchTitles from '@/assets/data/search_titles'
import SearchSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const {isSearch, clickHandle} = props
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        unmountOnExit={true}
        timeout={250}>
        <div className="search-bar" onClick={clickHandle}>
          <div className="text">搜索房源和体验</div>
          <span className="icon">
            <SearchIcon/>
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        unmountOnExit={true}
        classNames='detail'
        timeout={250}>
        <div className="search-detail">
          <SearchTabs titles={searchTitles} tabIndex={tabIndex} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter