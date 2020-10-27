import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./filters.scss"

function Filters({ values, filters, type, onFilterChange }) {
  return (
    <div className="filters">
      <p className="title">Launch Year</p>
      <hr />
      <div className="inline-wrapper">
        {values.map((item, index) => (
          <div key={item + index} className="col-4 col-m-4 col-l-4 wrapper">
            <span
              className={classNames("element", {
                active: item === filters[type],
              })}
              onClick={() => onFilterChange(type, item)}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

Filters.propTypes = {
  values: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}
export default Filters
