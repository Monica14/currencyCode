import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import CurrencyList from "./CurrencyList/CurrencyList";

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={CurrencyList}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
