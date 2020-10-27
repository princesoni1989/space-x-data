import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import App from "../App"

Enzyme.configure({ adapter: new Adapter() })

describe("App", () => {
  it("should render app component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy()
  })
  it("should render header component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain("Header")
  })
  it("should render footer component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain("Footer")
  })
})

describe("App", () => {
  it("should render app component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy()
  })
  it("should render header component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain("Header")
  })
  it("should render footer component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain("Footer")
  })
})
