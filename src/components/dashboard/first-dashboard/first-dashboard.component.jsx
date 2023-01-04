import {
  FirstDashboardContainer,
  Head,
  Hr,
  Row,
} from "./first-dashboard.styles";
import DashboardHeader from "./dashboard-header/dashboard-header.component";
import TokenList from "./token-list/token-list.component";
import Ads from "./ads/ads.component";
import HistoryC from "../first-dashboard/history/history.component";

export default function FirstDashboard() {
  return (
    <FirstDashboardContainer>
      <DashboardHeader />
      <Head>overview</Head>
      <Hr />
      <Row>
        <TokenList />
        <Ads />
        <HistoryC />
      </Row>
    </FirstDashboardContainer>
  );
}
