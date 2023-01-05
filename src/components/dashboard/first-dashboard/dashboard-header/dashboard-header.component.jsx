// import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  DashboardHeaderContainer,
  LogoImg,
  OptionImg,
  SearchBar,
  Search2Container,
  NavMe,
  NavDropdownC
} from "./dashboard-header.styles";
import "./dashboard.css";
import Sidebar from "../../side-bar/sidebar.component";
import Logo from "../../../../assets/svg/logo.png";
import Option from "../../../../assets/svg/option2.png";

export default function DashboardHeader() {
  // let navigate = useNavigate();
  return (
    <DashboardHeaderContainer>
      <Navbar bg="transparent" expand="lg" className="big-header">
        <Container fluid>
          <Form id="openonmobile">
            <Search2Container placeholder="search report" />
          </Form>

          <Navbar.Brand
            // onClick={() => {
            //   navigate("/");
            // }}
          >
            <LogoImg src={Logo} />
          </Navbar.Brand>

          <NavMe>
          <NavDropdownC className="option-nav dropdown" title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdownC>
            <Nav.Link className="option-nav">
              <OptionImg src={Option} />
            </Nav.Link>
            <Nav.Link className="option-nav">
              <Sidebar />
            </Nav.Link>
          </NavMe>

          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}

          {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav id="mobilenav" className="ms-auto my-2 my-lg-0">
            {/* <Nav.Link className="option-nav">
              <NotificationImg src={Noti} />
            </Nav.Link> */}
            
            <NavDropdownC className="option-nav dropdown" title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdownC>
            <Nav.Link className="option-nav">
              <OptionImg src={Option} />
            </Nav.Link>
            <Nav.Link className="option-nav closeonmobile">
              <Form>
                <SearchBar placeholder="search report" />
              </Form>
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </DashboardHeaderContainer>
  );
}
