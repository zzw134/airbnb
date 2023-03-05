import { getEntireRoomList } from "@/service";
import { CHANGE_CURRENT_PAGE, CHANGE_IS_LOADING, CHANGE_LIST, CHANGE_TOTAL_COUNT } from "./constants";

const changeCurrentPageAction = (payload) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload
  }
}

const changeTotalCountAction = (payload) => {
  return {
    type: CHANGE_TOTAL_COUNT,
    payload
  }
}

const changeListAction = (payload) => {
  return {
    type: CHANGE_LIST,
    payload
  }
}

const changeIsLoading = (payload) => {
  return {
    type: CHANGE_IS_LOADING,
    payload
  }
}

const fetchListDataAction = () => {
  return async (dispatch, getState) => {
    const currentPage = getState().entire.currentPage
    dispatch(changeIsLoading(true))
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoading(false))
    dispatch(changeListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}

export {
  changeCurrentPageAction,
  changeListAction,
  changeTotalCountAction,
  fetchListDataAction
}