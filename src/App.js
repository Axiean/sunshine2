import Home from "./pages";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Abouts from "./pages/about";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/abouts">
          <Abouts />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
