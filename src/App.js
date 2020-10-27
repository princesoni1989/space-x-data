import React from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/header/Header"
import Landing from "./components/page/Landing"
import NotFound from "./components/NotFound"
import Footer from "./components/footer/Footer"

import "./App.scss"

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Landing {...props} />} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
