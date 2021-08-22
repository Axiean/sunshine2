import Home from "./pages";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ServicesP from "./pages/Services";
import WorksP from "./pages/Works";
import WorksBrands from "./pages/worksBrands";
import brandsData from "./Data/brandsData";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <ServicesP />
        </Route>
        <Route exact path="/works" component={WorksP} />

        <Route
          path="/works/:pagename"
          render={(props) => <WorksBrands {...props} />}
        />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
