import fetch from "node-fetch"

export const FETCHING_PROGRAMS = "FETCHING_PROGRAMS"
export const FETCH_PROGRAMS_SUCCESS = "FETCH_PROGRAMS_SUCCESS"

const ENDPOINT = "https://api.spacexdata.com/v3/launches"

/**
 * action
 * @returns {{type: string}}
 */
function fetchingPrograms() {
  return {
    type: FETCHING_PROGRAMS,
  }
}

/**
 * action
 * @param data
 * @returns {{data: *, type: string}}
 */
function fetchingProgramsSuccess(data) {
  return {
    type: FETCH_PROGRAMS_SUCCESS,
    data,
  }
}

/**
 * function for fetching data
 * @param params
 * @returns {function(*): *}
 */
export function fetchPrograms(params) {
  return (dispatch) => {
    dispatch(fetchingPrograms())
    return fetch(`${ENDPOINT}${params}`)
      .then((res) => res.json())
      .then((json) => dispatch(fetchingProgramsSuccess(json)))
  }
}
