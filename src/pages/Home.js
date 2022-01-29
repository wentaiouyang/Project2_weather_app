import React, { useState, useContext } from "react"
import NavBar from "../components/NavBar"
import WeatherCard from "../components/WeatherCard"
import classes from "../style/Home.module.scss"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Context } from "../context/context"
import AddCityModal from "../components/AddCityModal"
import { useEffect } from "react/cjs/react.development"

function Home() {
  const [counter, setCounter] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state } = useContext(Context)
  const { getCurrentTime, cities } = state

  useEffect(() => {
    if (cities.length < 3) {
      setCounter(0)
    } else {
      setCounter(1)
    }
  }, [cities])

  const handleNext = () => {
    if (counter < cities.length - 1) {
      setCounter((prevCounter) => prevCounter + 1)
    }
  }

  const handlePrev = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1)
    }
  }

  const BtnGroup = (props) => {
    return (
      <div className={classes.btnContainer} {...props}>
        <button className={classes.prevBtn} onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} color={"grey"} />
        </button>
        <ul>
          {cities.map((item, i) => {
            return (
              <li
                style={
                  i === counter
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "rgb(146, 146, 146)" }
                }
                key={i}
              ></li>
            )
          })}
        </ul>
        <button className={classes.nextBtn} onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} color={"grey"} />
        </button>
      </div>
    )
  }

  return (
    <div className={classes.homeContainer}>
      {isModalOpen && <AddCityModal closeModal={() => setIsModalOpen(false)} />}
      <NavBar canAdd={true} openModal={() => setIsModalOpen(true)} />
      <section className={classes.mainContent}>
        <div className={classes.greetingContainer}>
          {getCurrentTime() === "day" ? (
            <p>Good Morning!</p>
          ) : getCurrentTime() === "afternoon" ? (
            <p>Good Afternoon!</p>
          ) : (
            <p>Good Evening!</p>
          )}
        </div>

        <div className={classes.weatherCardContainer}>
          <div
            className={classes.weatherCardContainer__wrapper}
            style={{ left: `${-400 * (counter - 1)}px` }}
          >
            {cities.map((item, i) => {
              return <WeatherCard city={item} key={i} />
            })}
          </div>
        </div>
        <BtnGroup />
      </section>
    </div>
  )
}

export default Home
