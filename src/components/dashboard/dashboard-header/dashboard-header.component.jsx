import { useNavigate } from "react-router-dom";
import {
  DashboardContainer,
  LogoImg,
  Side2,
  NotificationImg,
  OptionImg,
  AvatarImg,
  ImageWallet,
} from "./dashboard-header.styles";
import Form from "react-bootstrap/Form";
import Sidebar from "./side-bar/sidebar.component";
// import Logo from "../../../assets/svg/logo.png";
import Noti from "../../../assets/svg/noti.png";
import Option from "../../../assets/svg/option2.png";
import Avatar from "../../../assets/image/girl.png";
import Wallet from "../../../assets/svg/wallet.svg";
import Search from "../../../components/search/search";

export default function DashboardHeader() {
  let navigate = useNavigate();
  return (
    <DashboardContainer>
      <Sidebar />
      {/* <LogoImg src={Logo} /> */}
      <Form>
        <Search placeholder="search coin name" />
      </Form>
      <Side2>
      <NotificationImg src={Noti}/>
      <OptionImg src={Option}/>
      <AvatarImg src={Avatar}/>
      </Side2>
    </DashboardContainer>
  );
}
