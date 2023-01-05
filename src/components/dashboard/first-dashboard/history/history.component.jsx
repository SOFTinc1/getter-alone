import {
  HistoryContainer,
  Col3,
  Hist,
  History,
  History2,
  Recieved,
  Owo,
  Image,
  Bank,
} from "./history.styles";
import Portfolio from "../../../../assets/svg/porfolio.svg";

export default function HistoryC() {
  return (
    <HistoryContainer>
      <Col3>
        <History>
          <Hist>
            <Recieved>today's recieved</Recieved>
            <Owo>$2,890</Owo>
          </Hist>
          <Image src={Portfolio} />
        </History>
        <History2>
          <Hist>
            <Bank>cash at bank</Bank>
            <Owo>$3m</Owo>
          </Hist>
          <Image src={Portfolio} />
        </History2>
        <History>
          <Hist>
            <Recieved>today's recieved</Recieved>
            <Owo>$2,890</Owo>
          </Hist>
          <Image src={Portfolio} />
        </History>
        <History2>
          <Hist>
            <Bank>cash at bank</Bank>
            <Owo>$3m</Owo>
          </Hist>
          <Image src={Portfolio} />
        </History2>
        <History>
          <Hist>
            <Recieved>today's recieved</Recieved>
            <Owo>$2,890</Owo>
          </Hist>
          <Image src={Portfolio} />
        </History>
      </Col3>
    </HistoryContainer>
  );
}
