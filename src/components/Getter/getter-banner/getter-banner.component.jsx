import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import {
  GetterBannerContainer,
  Section1,
  H1,
  GreenSpan,
  Section2,
  Text,
  BannerText,
  BannerTextSpan,
  BannerDetails,
  BannerDetailsSpan,
  Section3,
  Section4,
  HeadContainer,
  High,
  Head,
} from "./getter-banner.styles";
import "./getter.css";
import Marquee from "react-fast-marquee";
import GetterHighpoint from "../getter-highpoint/getter-highpoint.component";
import GetTableData from "../getter-table-data/getter-table-data.component";

export default function GetterBanner() {
  const [open, setOpen] = useState(false);
  return (
    <GetterBannerContainer>
      <Section1>
        <Marquee gradient={false} speed={100}>
          <H1>
            Cryptos: <GreenSpan>20,835</GreenSpan> Exchanges:{" "}
            <GreenSpan>564</GreenSpan> Market Cap:{" "}
            <GreenSpan>$1,030,638.94M</GreenSpan> <GreenSpan>1.9%</GreenSpan>{" "}
            24h Vol: <GreenSpan>$59,211.98M</GreenSpan> Dominance:{" "}
            <GreenSpan>BTC 37.4% ETH 18.6% Gas: 10 GWEI</GreenSpan>
          </H1>
        </Marquee>
      </Section1>

      <Section2>
        <Text>
          <BannerText>
            Live Cryptocurrency <BannerTextSpan>Prices</BannerTextSpan> and{" "}
            <BannerTextSpan>Market Cap </BannerTextSpan>
          </BannerText>
          <BannerDetails>
            The market cap of all cryptocurrencies is at $1,03T, up{" "}
            <BannerDetailsSpan>2,28%</BannerDetailsSpan> in the last 24 hours
          </BannerDetails>
        </Text>
        <High>
          <Head>Highpoint</Head>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          />
        </High>
        {/* The total crypto market volume over the last 24 hours is $51.47B, which makes a 17.21% decrease. The total volume in DeFi is currently $2.67B, 5.18% of the total crypto market 24-hour volume. The volume of all stable coins is now $48.14B, which is 93.54% of the total crypto market 24-hour volume.
Bitcoin’s dominance is currently 38.56%, an increase of 0.23% over the day. */}
      </Section2>

      <Section3>
        <HeadContainer></HeadContainer>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <GetterHighpoint />
          </div>
        </Collapse>
      </Section3>

      <Section4>
        <GetTableData />
      </Section4>
    </GetterBannerContainer>
  );
}
