import React, { memo } from 'react'
import AppFooterWrapper from './style'

const footerInfo = [
  {title: '爱彼迎', list: ['工作机会', '爱彼迎新闻', '政策', '无障碍设施']},
  {title: '发现', list: ['信任与安全', '旅行基金', '商务差旅', '爱彼迎杂志', 'Airbnb.org']},
  {title: '出租', list: ['为什么要出租', '待客之道', '房东义务', '开展体验', '资源中心']},
  {title: '客服支持', list: ['帮助', '邻里支持']}
]

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="info">
        <div className='info-list'>
          {footerInfo.map((item, index) => (
            <div key={index} className='list-item'>
              <div className="title">{item.title}</div>
              {item.list.map(subInfo => (
                <div className="sub-info" key={subInfo}>{subInfo}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="copy-right">
        © 2022 Airbnb, Inc, All rights reserved条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter