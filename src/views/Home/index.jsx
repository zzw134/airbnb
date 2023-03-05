import React, { memo, useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmpty } from '@/utils'
import HomeLongFor from './c-cpns/home-longfor'
import HomePlus from './c-cpns/home-plus'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  const {goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo} = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true}))
  }, [dispatch])

  return (
    <div>
      <HomeWrapper>
        <HomeBanner/>
        <div className="content">
          {isEmpty(highScoreInfo) && <HomeSectionV1 itemData={highScoreInfo} />}
          {isEmpty(discountInfo) && <HomeSectionV2 itemData={discountInfo} />}
          {isEmpty(longForInfo) && <HomeLongFor itemData={longForInfo} />}
          {isEmpty(goodPriceInfo) && <HomeSectionV1 itemData={goodPriceInfo} />}
          {isEmpty(recommendInfo) && <HomeSectionV2 itemData={recommendInfo} />}
          {isEmpty(plusInfo) && <HomePlus itemData={plusInfo} />}
        </div>
        <Outlet/>
      </HomeWrapper>
    </div>
  )
})

export default Home