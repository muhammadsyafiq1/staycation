import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../src/assets/scss/styles.scss"
import LandingPage from "../src/pages/LandingPages"


function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/" component={LandingPage} ></Route>
        </Router>
    </div>
  );
}

export default App;
