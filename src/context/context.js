import React, { Component } from "react"
export const Context = React.createContext()
export default class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "day",
      setTheme: (status) => {
        this.setState({
          theme: status,
        })
      },
      cities: JSON.parse(localStorage.getItem("cities")) || ["Brisbane"],
      addCity: (city) => {
        if (this.state.cities.includes(city)) {
          alert("This city already exists!")
        } else {
          const newCities = this.state.cities
          newCities.push(city)
          this.setState({
            cities: newCities,
          })
          localStorage.setItem("cities", JSON.stringify(newCities))
        }
      },
      removeCity: (city) => {
        const newCities = this.state.cities.filter((item) => {
          return item !== city
        })
        this.setState({
          cities: newCities,
        })
        localStorage.setItem("cities", JSON.stringify(newCities))
      },
      getCurrentTime: () => {
        const hour = new Date().getHours()
        if (hour > 6 && hour <= 12) {
          return "day"
        } else if (hour > 12 && hour <= 18) {
          return "afternoon"
        } else {
          return "night"
        }
      },
    }
  }

  componentDidMount() {
    if (!localStorage.getItem("cities")) {
      localStorage.setItem("cities", `["Brisbane"]`)
    }
  }
  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
