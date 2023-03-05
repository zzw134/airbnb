import classNames from 'classnames'
import React, { memo, useState } from 'react'
import EntireFilterWrapper from './style'

const filterList = [
  '人数',
  '可免费取消',
  '房源类型',
  '价格',
  '位置区域', 
  '闪定', 
  '卧室/床数',
  '促销/优惠',
  '更多筛选条件'
]

const EntireFilter = memo(() => {
  const [selectItem, setSelectItem] = useState([])
  function handleClick(item) {
    const newItems = [...selectItem]
    if (newItems.includes(item)) {
      const index = newItems.indexOf(item)
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }
    setSelectItem(newItems)
  }
  return (
    <EntireFilterWrapper>
      <ul className="list">
        {filterList.map((item, index) => (
          <li key={index} className={classNames(['item', {active: selectItem.includes(item)}])} onClick={e => handleClick(item)}>{item}</li>
        ))}
      </ul>
    </EntireFilterWrapper>
  )
})

export default EntireFilter