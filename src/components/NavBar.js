import React from "react"
import classes from "../style/NavBar.module.scss"

function NavBar() {
  return (
    <div className={classes.navBarContainer}>
      <section>
        <p>Weather App</p>
      </section>
      <p>
        <b>Today</b>
      </p>
      <section>
        <p>{new Date().toLocaleTimeString()}</p>
      </section>
    </div>
  )
}

export default NavBar
