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
      cities: ["Brisbane", "Beijing", "Tokyo"],
      getCurrentTime: () => {
        const hour = new Date().getHours()
        console.log(hour)
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
  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
