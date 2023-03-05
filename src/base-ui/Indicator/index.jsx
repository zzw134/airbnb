import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import IndicatorWrapper from './style'

const Indicator = memo((props) => {
  const {selectedIndex=0} = props
  const contentRef = useRef()
  useEffect(() => {
    const selectedEl = contentRef.current.children[selectedIndex]
    const selectedOffsetLeft = selectedEl.offsetLeft
    const selectedWidth = selectedEl.clientWidth
    const contentWidth = contentRef.current.clientWidth
    const scrollWidth = contentRef.current.scrollWidth
    const totalDistance = scrollWidth - contentWidth
    let distance = selectedOffsetLeft + selectedWidth * 0.5 - contentWidth * 0.5
    // 特殊情况
    if (distance < 0) distance = 0 // 左边的情况
    if (distance > totalDistance) distance = totalDistance // 右边的情况
    contentRef.current.style.transform = `translateX(${-distance}px)`
  }, [selectedIndex])
  return (
    <IndicatorWrapper>
      <div className="content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number
}

export default Indicator