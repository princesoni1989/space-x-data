import React from "react"
import PropTypes from "prop-types"

import "./cards.scss"

function Cards({ programs }) {
  return (
    <div className="inline-wrapper margin-offset">
      {programs.map((item, index) => (
        <div
          key={item.flight_number + index}
          className="col-12 col-m-6 col-l-3 p-2"
        >
          <div className="cards">
            <ul className="items">
              <li className="image-wrapper">
                <img
                  className="image"
                  src={item.links.mission_patch_small}
                  alt=""
                />
              </li>
              <li className="title">
                {item.mission_name} # {item.flight_number}
              </li>
              <li>
                <span className="key">Mission Ids: </span>
                <ul>
                  {item.mission_id.map((id) => (
                    <li key={id} className="value">
                      {id}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="key">Launch Year: </span>
                <span className="value">{item.launch_year}</span>
              </li>
              <li>
                <span className="key">Successful Launch: </span>
                <span className="value">
                  {item.launch_success && item.launch_success.toString()}
                </span>
              </li>
              <li>
                <span className="key">Successful Landing: </span>
                <span className="value">
                  {item.launch_success && item.launch_success.toString()}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
Cards.propTypes = {
  programs: PropTypes.array.isRequired,
}
export default Cards
