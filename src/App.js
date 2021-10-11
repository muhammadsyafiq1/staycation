import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../src/assets/scss/styles.scss"
import LandingPage from "../src/pages/LandingPages"
import PageDetail from "../src/pages/PageDetail"
import Checkout from "../src/pages/Checkout"

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={LandingPage} ></Route>
          <Route exact path="/properties/:id" component={PageDetail} ></Route>
          <Route exact path="/checkout" component={Checkout} ></Route>
        </Router>
    </div>
  );
}

export default App;
