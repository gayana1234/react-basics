import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SpaceDetails from "./Gayana/Space/SpaceDetails";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Counter from "./Counter/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            {/* /details/3/hello/name_23/hi/india */}
            {/* <Route
            path="/details/:flightId/hello/:name/hi/:countryIn"
            element={<SpaceDetails />}
          /> */}

            <Route path="/details/:flightId" element={<SpaceDetails />} />
            <Route path="/route/Gayana" element={<Counter />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
