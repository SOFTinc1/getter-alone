import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Getter from "./pages/getter/getter.component";
import GetterDetails from "./components/GetterDetails/GetterDetails.component";
import SignInPage from "./pages/sign-in/signin-page";
import SignUpPage from "./pages/sign-up/signup-page";
import DashboardPage from "./pages/dashboard/dashboard.component";
import Footer from "./components/footer/footer.component";


class App extends React.Component {
  

  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Getter />} />
          <Route exact path="/details" element={<GetterDetails />} />
          <Route exact path="/signin" element={<SignInPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
