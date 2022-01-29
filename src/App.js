import React from "react"
import Provider from "./context/context"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
