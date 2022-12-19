import {
  GetterHighpointContainer,
  Row,
  Col1,
  Card,
  Flex,
  Flex2,
  ButtonC,
  Newly,
  Loser,
  ViewAll,
  Token,
  ImageSrc,
  Price,
  Percentage,
  PercentageRed,
  Col2,
  Col3,
  Image
} from "./getter-highpoint.styles";
import BitcoinLogo from "../../../assets/svg/bitcoin.svg";
import Colimg from "../../../assets/image/Colimg.png";

const GetterHighpoint = () => (
  <GetterHighpointContainer>
    <Row>
      <Col1>
        <Card>
          <Flex>
            <ButtonC>&#128293; trending</ButtonC>
            <Newly>&#9733; newly added</Newly>
            <ViewAll>view all</ViewAll>
          </Flex>
          <Flex2>
            <Token>
              1. <ImageSrc src={BitcoinLogo} /> bitcoin{" "}
            </Token>
            <Price>$17,800</Price>
            <Percentage>72%</Percentage>
          </Flex2>
          <Flex2>
            <Token>
              2. <ImageSrc src={BitcoinLogo} /> bitcoin{" "}
            </Token>
            <Price>$17,800</Price>
            <PercentageRed>32%</PercentageRed>
          </Flex2>
          <Flex2>
            <Token>
              3. <ImageSrc src={BitcoinLogo} /> bitcoin{" "}
            </Token>
            <Price>$17,800</Price>
            <Percentage>72%</Percentage>
          </Flex2>
        </Card>
      </Col1>
      <Col2>
        <Card>
          <Flex>
            <ButtonC>&#128185; top gainer</ButtonC>
            <Loser>&#128200; top loser</Loser>
            <ViewAll>view all</ViewAll>
          </Flex>
          <Flex2>
            <Token>
              1. <ImageSrc src={BitcoinLogo} /> bitcoin{" "}
            </Token>
            <Price>$17,800</Price>
            <Percentage>72%</Percentage>
          </Flex2>
          <Flex2>
            <Token>
              2. <ImageSrc src={BitcoinLogo} /> bitcoin{" "}
            </Token>
            <Price>$17,800</Price>
            <PercentageRed>32%</PercentageRed>
          </Flex2>
          <Flex2>
            <Token>
              3. <ImageSrc src={BitcoinLogo} /> bitcoin{" "}
            </Token>
            <Price>$17,800</Price>
            <Percentage>72%</Percentage>
          </Flex2>
        </Card>
      </Col2>
      <Col3>
      <Image src={Colimg} /> 
      </Col3>
    </Row>
  </GetterHighpointContainer>
);

export default GetterHighpoint;
