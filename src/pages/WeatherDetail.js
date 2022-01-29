import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_KEY, FORECAST_API, WEATHER_API } from "../api/endpoint"
import NavBar from "../components/NavBar"
import WeatherDetailCard from "../components/WeatherDetailCard"
import classes from "../style/WeatherDetail.module.scss"

function WeatherDetail() {
  const params = useParams()
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  // fetch the weather data
  useEffect(() => {
    const getCurrentData = axios({
      method: "GET",
      url: WEATHER_API,
      params: {
        q: params.city,
        unit: "metric",
        appid: API_KEY,
      },
    })

    const getForecastData = axios({
      method: "GET",
      url: FORECAST_API,
      params: {
        q: params.city,
        unit: "metric",
        appid: API_KEY,
      },
    })

    const fetchData = () =>
      Promise.all([getCurrentData, getForecastData]).then((res) => {
        console.log(res)
        setWeatherData(res[0].data)
        setForecastData(res[1].data)
      })
    fetchData()
  }, [params.city])
  return (
    <div className={classes.detailContainer}>
      <NavBar canAdd={false} />
      <div className={classes.mainContent}>
        <WeatherDetailCard city={params.city} weatherData={weatherData} />
      </div>
    </div>
  )
}

export default WeatherDetail
