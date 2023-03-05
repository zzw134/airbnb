import { CHANGE_CURRENT_PAGE, CHANGE_IS_LOADING, CHANGE_LIST, CHANGE_TOTAL_COUNT } from "./constants"

const initState = {
  currentPage: 3,
  list: [],
  totalCount: 0,
  isLoading: false
}
function reducer(state=initState, actions) {
  switch(actions.type) {
    case CHANGE_CURRENT_PAGE:
      return {...state, currentPage: actions.payload}
    case CHANGE_LIST:
      return {...state, list: actions.payload}
    case CHANGE_TOTAL_COUNT:
      return {...state, totalCount: actions.payload}
    case CHANGE_IS_LOADING:
      return {...state, isLoading: actions.payload}
    default:
      return state
  }
}

export default reducer