import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  DashboardHeaderContainer,
  LogoImg,
  NotificationImg,
  OptionImg,
  SearchBar,
} from "./dashboard-header.styles";
import "./dashboard.css";
import Sidebar from "../../side-bar/sidebar.component";
import Search2 from "../../../../components/search2/search2";
import Logo from "../../../../assets/svg/logo.png";
import Noti from "../../../../assets/svg/noti.png";
import Option from "../../../../assets/svg/option2.png";

export default function DashboardHeader() {
  let navigate = useNavigate();
  return (
    <DashboardHeaderContainer>
      <Navbar bg="transparent" expand="lg" className="big-header">
        <Container fluid>
          <Sidebar />
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            <LogoImg src={Logo} />
          </Navbar.Brand>

          <Form id="openonmobile">
            <Search2 placeholder="search for your favourite coin" />
          </Form>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="option-nav">
                <NotificationImg src={Noti} />
              </Nav.Link>
              <Nav.Link className="option-nav">
                <OptionImg src={Option} />
              </Nav.Link>
              <Nav.Link className="option-nav">
                <Form>
                  <SearchBar placeholder="search report" />
                </Form>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </DashboardHeaderContainer>
  );
}
