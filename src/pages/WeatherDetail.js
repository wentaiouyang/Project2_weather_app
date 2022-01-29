import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_KEY, WEATHER_API } from "../api/endpoint"
import NavBar from "../components/NavBar"
import WeatherDetailCard from "../components/WeatherDetailCard"
import classes from "../style/WeatherDetail.module.scss"

function WeatherDetail() {
  const params = useParams()
  const [weatherData, setWeatherData] = useState(null)
  // fetch the weather data
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: WEATHER_API,
        params: {
          q: params.city,
          unit: "metric",
          appid: API_KEY,
        },
      }).then((res) => {
        setWeatherData(res.data)
      })
    }
    fetchData()
  }, [params.city])
  return (
    <div className={classes.detailContainer}>
      <NavBar canAdd={false} />
      <div className={classes.mainContent}>
        <WeatherDetailCard city={params.city} data={weatherData} />
      </div>
    </div>
  )
}

export default WeatherDetail
