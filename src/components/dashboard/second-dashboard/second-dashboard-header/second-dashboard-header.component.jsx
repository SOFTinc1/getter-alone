import {
  SecondDashboardHeaderContainer,
  One,
  ImageWallet,
  Connect,
  Two,
  NameSection,
  Name,
  Desig,
  ImageAvatar,
} from "./second-dashboard-header.styles";
import Wallet from "../../../../assets/svg/wallet.svg";
import Avatar from "../../../../assets/image/11.jpg";

export default function SecondDashboardHeader() {
  return (
    <SecondDashboardHeaderContainer>
      <One>
        <ImageWallet src={Wallet} />
        <Connect>connect</Connect>
      </One>
      <Two>
        <NameSection>
          <Name>daniel</Name>
          <Desig>user</Desig>
        </NameSection>
        <ImageAvatar src={Avatar} />
      </Two>
    </SecondDashboardHeaderContainer>
  );
}
