import React, { useState, useContext } from "react"
import { Context } from "../context/context"
import classes from "../style/AddCityModal.module.scss"

function AddCityModal({ closeModal }) {
  const [cityName, setCityName] = useState("")
  const { state } = useContext(Context)
  const { addCity } = state
  const handleSubmit = (e) => {
    e.preventDefault()
    addCity(cityName)
    closeModal()
  }

  const HandleChangeCity = (e) => {
    setCityName(e.target.value)
  }

  const HandleCancel = (e) => {
    e.preventDefault()
    closeModal()
  }

  return (
    <div className={classes.ModalBackground}>
      <div className={classes.modal}>
        <h3>Enter A City:</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.cityInput}
            type="text"
            value={cityName}
            name="cityName"
            onChange={HandleChangeCity}
            autoComplete="off"
          ></input>
          <div className={classes.btnContainer}>
            <button className={classes.addBtn}>Add</button>
            <button className={classes.cancelBtn} onClick={HandleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCityModal
