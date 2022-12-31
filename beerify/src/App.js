import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Home />
            </Fragment>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
