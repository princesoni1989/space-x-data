import { FETCHING_PROGRAMS, FETCH_PROGRAMS_SUCCESS } from "../actions"

const initialState = {
  programs: [],
  loading: true,
}

/**
 * Reducer function
 * @param state
 * @param action
 * @returns {{programs: *, loading: boolean}|{programs: [], loading: boolean}}
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_PROGRAMS: {
      return { ...state, loading: true }
    }
    case FETCH_PROGRAMS_SUCCESS: {
      return { ...state, loading: false, programs: action.data }
    }
    default:
      return state
  }
}
