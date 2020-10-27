import React, { Component } from "react"
import { connect } from "react-redux"
import Loader from "react-loader"
import queryString from "query-string"
import PropTypes from "prop-types"

import Filters from "./filters/Filters"
import Cards from "./cards/Cards"
import { YEARS, LAUNCHES, LANDINGS } from "../../data/filter"
import { fetchPrograms } from "../../actions/index"

import "./landing.scss"

class Landing extends Component {
  constructor(props) {
    super(props)
    this.onFilterChange = this.onFilterChange.bind(this)
    this.state = {
      filters: {
        launch_year: "",
        launch_success: "",
        land_success: "",
        limit: 100,
      },
    }
  }

  componentDidMount() {
    this.props.fetchPrograms(window.location.search)
  }

  onFilterChange(key, value) {
    const queryKeys = {}
    const { filters } = this.state
    const { history } = this.props
    filters[key] = filters[key] === value ? "" : value
    this.setState({ filters }, () => {
      Object.keys(filters).forEach((item) => {
        if (filters[item]) {
          queryKeys[item] = filters[item]
        }
      })
      const queryParams = queryString.stringify(queryKeys)
      history.push({
        pathname: "/",
        search: `?${new URLSearchParams(queryKeys).toString()}`,
      })
      this.props.fetchPrograms(`?${queryParams}`)
    })
  }

  render() {
    const { programs, loading } = this.props.programs
    const {filters} = this.state
    return (
      <div className="landing">
        <div className="inline-wrapper margin-offset">
          <div className="col-12 col-m-4 col-l-2 left-section">
            <div className="cards">
              <h4>Filters</h4>
              <Filters
                values={YEARS}
                filters={filters}
                type="launch_year"
                onFilterChange={this.onFilterChange}
              />
              <Filters
                values={LAUNCHES}
                filters={filters}
                type="launch_success"
                onFilterChange={this.onFilterChange}
              />
              <Filters
                values={LANDINGS}
                filters={filters}
                type="land_success"
                onFilterChange={this.onFilterChange}
              />
            </div>
          </div>
          <div className="col-12 col-m-8 col-l-10 right-section">
            <Loader loaded={!loading}>
              <Cards programs={programs} />
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  programs: PropTypes.object.isRequired,
  history: PropTypes.any.isRequired,
  fetchPrograms: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    programs: state.programs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPrograms: (params) => {
      dispatch(fetchPrograms(params))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
