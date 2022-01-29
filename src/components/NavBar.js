import React, { useState, useRef } from "react"
import { useEffect } from "react/cjs/react.development"
import classes from "../style/NavBar.module.scss"

function NavBar({ canAdd, openModal }) {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  )

  const timer = useRef()

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer.current)
  }, [])

  return (
    <div className={classes.navBarContainer}>
      <section>
        {canAdd && (
          <button className={classes.addBtn} onClick={openModal}>
            Add
          </button>
        )}
      </section>
      <p>
        <b>Today</b>
      </p>
      <section>
        <p>{currentTime}</p>
      </section>
    </div>
  )
}

export default NavBar
