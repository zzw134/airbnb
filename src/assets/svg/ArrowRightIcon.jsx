import React, { memo } from 'react'
import styleStrToObj from './utils'

const ArrowRightIcon = memo((props) => {
  const {width='12px', height='12px'} = props
  return (
    <div>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={styleStrToObj(`display: block; fill: none; height: ${height}; width: ${width}; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;`)}><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
    </div>
  )
})

export default ArrowRightIcon