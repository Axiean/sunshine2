import Home from "./pages";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Abouts from "./pages/about";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/abouts">
          <Abouts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
