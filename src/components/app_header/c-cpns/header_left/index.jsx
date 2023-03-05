import LogoIcon from '@/assets/svg/LogoIcon'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/home')
  }
  return (
    <LeftWrapper>
      <div className='logo' onClick={handleClick}>
        <LogoIcon/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft