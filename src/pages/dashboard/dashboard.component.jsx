import React from "react";
import { H1, MainDashboard, DashboardPageContainer } from "./dashboard.styles";
import DashboardHeader from "../../components/dashboard/dashboard-header/dashboard-header.component";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DashboardPageContainer>
        <H1>Leave this for now</H1>
        <MainDashboard>
          <DashboardHeader />
        </MainDashboard>
      </DashboardPageContainer>
    );
  }
}

export default DashboardPage;
