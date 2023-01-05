import { SecondDashboardContainer, Hr } from "./second-dashboard.styles";
import SecondDashboardHeader from "./second-dashboard-header/second-dashboard-header.component";
import Profile from "./profile/profile.component";

export default function SecondDashboard() {
  return (
    <SecondDashboardContainer>
      <SecondDashboardHeader />
      <Hr />
      <Profile />
    </SecondDashboardContainer>
  );
}
