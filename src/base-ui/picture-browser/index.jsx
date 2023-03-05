import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import ArrowLeftIcon from '@/assets/svg/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/svg/ArrowRightIcon'
import CloseIcon from '@/assets/svg/CloseIcon'
import TriangleArrowBottomIcon from '@/assets/svg/TriangleArrowBottomIcon'
import TriangleArrowTopIcon from '@/assets/svg/TriangleArrowTopIcon'
import Indicator from '../Indicator'
import PictureBrowserWrapper from './style'

const PictureBrowser = memo((props) => {
  const {closeBrower, picture_urls=[]} = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [isShowPreview, setIsShowPreview] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function handleControlClick(isRight=true) {
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1
    if (newIndex < 0) newIndex = picture_urls.length - 1
    if (newIndex > picture_urls.length - 1) newIndex = 0
    setSelectedIndex(newIndex)
    setIsNext(isRight)
  }
  return (
    <PictureBrowserWrapper isShowPreview={isShowPreview} isNext={isNext}>
      <div className="top">
        <div className="btn-close" onClick={e => closeBrower(e)}>
          <CloseIcon/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => handleControlClick(false)}>
            <ArrowLeftIcon width='77px' height='77px' />
          </div>
          <div className="btn right" onClick={e => handleControlClick(true)}>
            <ArrowRightIcon width='77px' height='77px' />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={picture_urls[selectedIndex]}
              classNames='pic'
              timeout={200}>
              <img src={picture_urls[selectedIndex]} alt="" />
            </CSSTransition>
        </SwitchTransition>
          </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{selectedIndex + 1}/{picture_urls.length}:</span>
              <span>room apartment图片{selectedIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setIsShowPreview(!isShowPreview)}>
              {isShowPreview ? 
              (<div>
                <span>显示照片列表</span>
                <TriangleArrowTopIcon/>
              </div>) : 
              (<div>
                <span>隐藏照片列表</span>
                <TriangleArrowBottomIcon/>
              </div>)}
            </div>
          </div>
          <div className="list">
            <Indicator selectedIndex={selectedIndex}>
              {picture_urls.map((item, index) => (
                <div className={classNames('pic', {active: selectedIndex === index})} key={index}>
                  <img src={item} alt="" />
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  closeBrower: PropTypes.func,
  picture_urls: PropTypes.array
}

export default PictureBrowser