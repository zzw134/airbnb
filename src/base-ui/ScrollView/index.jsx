import ArrowLeftIcon from '@/assets/svg/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/svg/ArrowRightIcon'
import React, { memo, useEffect, useState, useRef } from 'react'
import ScrollViewWrapper from './style'

const ScrollView = memo((props) => {
  const [isRightBtnShow, setRightBtnShow] = useState(false)
  const [isLeftBtnShow, setLeftBtnShow] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const scrollContentRef = useRef()
  const diffValueWidthRef = useRef()

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 可滑动宽度
    const clientWidth = scrollContentRef.current.clientWidth // 自身宽度
    const diffValueWidth = scrollWidth - clientWidth
    diffValueWidthRef.current = diffValueWidth
    if(diffValueWidth > 0) {
      setRightBtnShow(true)
    } else {
      setRightBtnShow(false)
    }
  }, [])

  function handleClickControl(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const nextEl = scrollContentRef.current.children[newIndex]
    const nextElOffsetLeft = nextEl.offsetLeft
    scrollContentRef.current.style.transform = `translateX(-${nextElOffsetLeft}px)`
    setLeftBtnShow(nextElOffsetLeft > 0)
    setRightBtnShow(diffValueWidthRef.current > nextElOffsetLeft)
    setPosIndex(newIndex)
  }

  return (
    <ScrollViewWrapper>
      {isLeftBtnShow && <button className='left-btn' onClick={e => handleClickControl(false)}><ArrowLeftIcon/></button>}
      {isRightBtnShow && <button className='right-btn' onClick={e => handleClickControl(true)}><ArrowRightIcon/></button>}
      <div className="content-wrapper">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView