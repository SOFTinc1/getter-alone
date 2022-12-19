import { useNavigate } from "react-router-dom";
import {
  GetterHeaderContainer,
  LogoImg,
  ButtonC,
} from "./getter-header.styles";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/svg/logo.png";
import Search from "../../../components/search/search";
import Search2 from "../../../components/search2/search2";
import "./getter.css";

export default function GetterHeader() {
  let navigate = useNavigate();
  return (
    <GetterHeaderContainer>
      <Navbar bg="transparent" expand="lg" className="big-header">
        <Container fluid>
          <Form id="openonmobile">
            <Search2 placeholder="search for your favourite coin" />
          </Form>

          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            <LogoImg src={Logo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="option-nav" id="openondesktop">
                <Form>
                  <Search placeholder="search coin name" />
                </Form>
              </Nav.Link>
              <Nav.Link
                href="https://coingetter2.vercel.app/swap#action2"
                className="option-nav"
              >
                swap
              </Nav.Link>
              <Nav.Link
                href="https://coingetter2.vercel.app/marketplace#action2"
                className="option-nav"
              >
                marketplace
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/marketplace");
                }}
                className="option-nav"
              >
                NFT
              </Nav.Link>
              <Nav.Link className="option-nav">
                <ButtonC onClick={() => {
                  navigate("/signin");
                }}
                >sign in</ButtonC>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </GetterHeaderContainer>
  );
}
