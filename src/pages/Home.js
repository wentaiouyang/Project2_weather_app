import React from "react"
import NavBar from "../components/NavBar"
import WeatherCard from "../components/WeatherCard"
import classes from "../style/Home.module.scss"

function Home() {
  return (
    <div>
      <NavBar />
      <section className={classes.mainContent}>
        <div className={classes.weatherCardContainer}>
          <div className={classes.weatherCardContainer__wrapper}>
            <WeatherCard city={"Beijing"} temprature={20} />
            <WeatherCard city={"Brisbane"} temprature={10} />
            <WeatherCard city={"New York"} temprature={10} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
