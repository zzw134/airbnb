import Indicator from '@/base-ui/Indicator'
import React, { memo, useState } from 'react'
import DemoWrapper from './style'

const Demo = memo((props) => {
  const items = ['abc' ,'gb', 'dfs', 'werh', 'zfd', 'jhfg', 'jik']
  const [selectedIndex, setSelectedtIndex] = useState(0)

  function handleClick(prev=true) {
    let newIndex = prev ? selectedIndex - 1 : selectedIndex + 1
    if (newIndex > items.length - 1) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = items.length - 1
    }
    setSelectedtIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <button onClick={e => handleClick(true)}>上一个</button>
      <button onClick={e => handleClick(false)}>下一个</button>
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {items.map(item => (<button key={item}>{item}</button>))}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo