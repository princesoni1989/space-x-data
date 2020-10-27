import reducer from "../reducers"
import * as actions from "../actions/index"

describe("Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      programs: { programs: [], loading: true },
    })
  })

  it("should handle FETCHING_PROGRAMS", () => {
    const startAction = {
      type: actions.FETCHING_PROGRAMS,
    }
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, startAction)).toEqual({
      programs: { programs: [], loading: true },
    })
  })

  it("should handle FETCH_PROGRAMS_SUCCESS", () => {
    const successAction = {
      type: actions.FETCH_PROGRAMS_SUCCESS,
      data: [],
    }
    expect(reducer({}, successAction)).toEqual({
      programs: { programs: [], loading: false },
    })
  })
})
