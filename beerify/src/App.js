import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          path="/signup"
          element={
            <Fragment>
              <Signup />
            </Fragment>
          }
        />
        <Route
          path="/login"
          element={
            <Fragment>
              <Login />
            </Fragment>
          }
        />
        <Route
          path="*"
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
