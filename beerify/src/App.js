import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/header/Header";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Events from "./components/events/Events";
import Home from "./components/home/Home";
import Background from "./components/Layout/background/Background";

function App() {
  return (
    <Fragment>
      <Header />
      <Background />
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
          path="/events"
          element={
            <Fragment>
              <Events />
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
