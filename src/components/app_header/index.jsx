import useScrollPosition from '@/hooks/useScrollPosition'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import HeaderCenter from './c-cpns/header_center'
import HeaderLeft from './c-cpns/header_left'
import HeaderRight from './c-cpns/header_right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  const {headerConfig: {isFixed, topAlpha}} = useSelector((state) => {
    return {
      headerConfig: state.main.headerConfig
    }
  }, shallowEqual)
  
  const {scrollY} = useScrollPosition()
  const prevY = useRef(0)
  if (!isSearch) prevY.current = scrollY
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  const isAlpha = topAlpha && scrollY === 0
  
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} clickHandle={e => setIsSearch(true)} />
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
          {(isSearch && isFixed) && <div className='cover' onClick={e => setIsSearch(false)}></div>}
        </div>
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader