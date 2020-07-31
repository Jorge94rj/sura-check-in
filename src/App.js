import React from "react";
import "./App.css";

// import HomePage from './pages/home/home.component';
// import LoginPage from './pages/log-in/log-in.component';

import MyEventsPage from "./pages/my-events/my-events.component";
import NavBar from "./components/nav-bar/nav-bar.component";

function App() {
  return (
    <div>
      <NavBar />
      {/* <HomePage />   */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <MyEventsPage />
    </div>
  );
}

export default App;
