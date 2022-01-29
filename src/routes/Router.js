import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import WeatherDetail from "../pages/WeatherDetail"

function Router() {
  return (
    <Routes>
      <Route path="/weather">
        <Route path=":city" element={<WeatherDetail />}></Route>
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Router
