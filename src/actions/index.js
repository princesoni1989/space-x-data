import fetch from "node-fetch"

export const FETCHING_PROGRAMS = "FETCHING_PROGRAMS"
export const FETCH_PROGRAMS_SUCCESS = "FETCH_PROGRAMS_SUCCESS"

const ENDPOINT = "https://api.spacexdata.com/v3/launches"

function fetchingPrograms() {
  return {
    type: FETCHING_PROGRAMS,
  }
}

function fetchingProgramsSuccess(data) {
  return {
    type: FETCH_PROGRAMS_SUCCESS,
    data,
  }
}
export function fetchPrograms(params) {
  return (dispatch) => {
    dispatch(fetchingPrograms())
    return fetch(`${ENDPOINT}${params}`)
      .then((res) => res.json())
      .then((json) => dispatch(fetchingProgramsSuccess(json)))
  }
}
