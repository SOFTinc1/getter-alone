import React from "react";
import { DashboardPageContainer } from "./dashboard.styles";
import FirstDashboard from "../../components/dashboard/first-dashboard/first-dashboard.component";
import SecondDashboard from "../../components/dashboard/second-dashboard/second-dashboard.component";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DashboardPageContainer>
        <FirstDashboard />
        <SecondDashboard />
      </DashboardPageContainer>
    );
  }
}

export default DashboardPage;
