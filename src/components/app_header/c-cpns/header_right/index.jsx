import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import AvatarIcon from '@/assets/svg/AvatarIcon'
import GlobalIcon from '@/assets/svg/GlobalIcon'
import MenuIcon from '@/assets/svg/MenuIcon'
import { useNavigate } from 'react-router-dom'

const HeaderRight = memo(() => {
  const [isShowPanel, setIsShowPanel] = useState(false)
  const navigate = useNavigate()
  const handleClickProfile = (e) => {
    e.stopPropagation()
    setIsShowPanel(true)
  }
  useEffect(() => {
    const handleClick = (e) => {
      setIsShowPanel(false)
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  function handleClick(e) {
    e.stopPropagation()

    navigate('/entire')
    setIsShowPanel(false)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <GlobalIcon/>
        </span>
      </div>
      <div className="profile" onClick={e => handleClickProfile(e)}>
        <span className="menu">
          <MenuIcon/>
        </span>
        <span className="avatar">
          <AvatarIcon/>
        </span>

        {isShowPanel && (
          <div className="panel">
            <div className="panel-top">
              <div className="item register">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="panel-bottom">
              <div className="item" onClick={e => handleClick(e)}>来爱彼迎发布房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight