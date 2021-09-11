import Home from "./pages";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ServicesP from "./pages/Services";
import WorksP from "./pages/Works";
import WorksBrands from "./pages/worksBrands";
import brandsData from "./Data/brandsData";
import AboutP from "./pages/About";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/sunshine2">
          <Home />
        </Route>
        <Route path="/sunshine2/services">
          <ServicesP />
        </Route>
        <Route exact path="/sunshine2/works" component={WorksP} />

        <Route
          path="/sunshine2/works/:pagename"
          render={(props) => <WorksBrands {...props} />}
        />
        <Route path="/sunshine2/about" component={AboutP} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
