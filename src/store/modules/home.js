import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeRecommendData, getHomeLongForData, getHomePlusData } from '@/service'

export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', (payload, store) => {
  getHomeGoodPriceData().then(res => {
    store.dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    store.dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    store.dispatch(changeDiscountInfoAction(res))
  })
  getHomeRecommendData().then(res => {
    store.dispatch(changeRecommendInfoAction(res))
  })
  getHomeLongForData().then(res => {
    store.dispatch(changeLongForInfoAction(res))
  })
  getHomePlusData().then(res => {
    store.dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, {payload}) {
      state.recommendInfo = payload
    },
    changeLongForInfoAction(state, {payload}) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, {payload}) {
    //   state.goodPriceInfo = payload
    // }
  },
})

export const {
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction, 
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer