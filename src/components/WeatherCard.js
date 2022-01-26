import React from "react"
import classes from "../style/WeatherCard.module.scss"

function WeatherCard() {
  return (
    <div className={classes.container}>
      <p>Beijing</p>
      <div>This is image</div>
      <p>20 C</p>
      <div>
        <p>min</p>
        <p>max</p>
      </div>
    </div>
  )
}

export default WeatherCard
