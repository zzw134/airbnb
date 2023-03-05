import ArrowRightIcon from '@/assets/svg/ArrowRightIcon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionFooterWrapper from './style'

const SectionFooter = memo((props) => {
  const {name} = props

  const navigate = useNavigate()
  function handleClickToEntire() {
    navigate('/entire')
  }
  return (
    <SectionFooterWrapper color={name ? 'var(--secondary-color)' : 'var(--primary-font-color)'} onClick={e => handleClickToEntire()}>
      {name ? <span>显示更多{name}房源</span> : <span>显示全部</span>}
      <ArrowRightIcon/>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter