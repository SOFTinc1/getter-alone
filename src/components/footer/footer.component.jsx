// import { useNavigate } from "react-router-dom";
import { FooterContainer, Col1, H1, P, Row, Col2 } from "./footer.styles";

export default function Footer() {
  // let navigate = useNavigate();
  return (
    <FooterContainer>
      <Col1>
        <H1>coingetter &copy; 2022</H1>
        <P>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, natus!
        </P>
      </Col1>
      <Row>
        <Col2>FB.</Col2>
        <Col2>LK.</Col2>
        <Col2>IN.</Col2>
        <Col2>TW.</Col2>
      </Row>
    </FooterContainer>
  );
}

// onClick={() => {
//     navigate("/");
//   }}
