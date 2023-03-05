import request from "..";

const getHomeGoodPriceData = () => {
  return request.get({
    url: '/home/goodprice'
  })
}

const getHomeHighScoreData = () => {
  return request.get({
    url: '/home/highscore'
  })
}

const getHomeDiscountData = () => {
  return request.get({
    url: '/home/discount'
  })
}

const getHomeRecommendData = () => {
  return request.get({
    url: '/home/hotrecommenddest'
  })
}

const getHomeLongForData = () => {
  return request.get({
    url: '/home/longfor'
  })
}

const getHomePlusData = () => {
  return request.get({
    url: '/home/plus'
  })
}

export {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeRecommendData,
  getHomeLongForData,
  getHomePlusData
}