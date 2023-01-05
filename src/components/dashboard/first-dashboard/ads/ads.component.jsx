import {
  AdsContainer,
  Card2Row,
  CardGreen,
  Top,
  ImageGirl,
  Nft,
  Have,
  Total,
  YrAmount,
  Yr,
  CardYellow,
  CardDown,
  Solana,
  Selling,
  Flex,
  ImageGirl2,
} from "./ads.styles";
import Girl from "../../../../assets/image/girl.png";
import Portfolio from "../../../../assets/svg/porfolio.svg";

export default function Ads() {
  return (
    <AdsContainer>
      <Card2Row>
        <CardGreen>
          <Top>
            <ImageGirl src={Portfolio} />
            <Nft>
              <Have>NFT</Have>
              <Total>18.0q</Total>
            </Nft>
          </Top>
          <YrAmount>$29m</YrAmount>
          <Yr>
            yearly <br />
            turnover
          </Yr>
        </CardGreen>
        <CardYellow>
          <Top>
            <ImageGirl src={Portfolio} />
            <Nft>
              <Have>NFT</Have>
              <Total>18.0q</Total>
            </Nft>
          </Top>
          <YrAmount>$29m</YrAmount>
          <Yr>
            yearly <br />
            turnover
          </Yr>
        </CardYellow>
      </Card2Row>
      <CardDown>
        <Solana>solana</Solana>
        <Selling>top selling tokens</Selling>
        <Flex>
          <ImageGirl2 src={Girl} />
          <ImageGirl2 src={Portfolio} />
          <ImageGirl2 src={Girl} />
          <ImageGirl2 src={Portfolio} />
          <ImageGirl2 src={Girl} />
        </Flex>
      </CardDown>
    </AdsContainer>
  );
}
