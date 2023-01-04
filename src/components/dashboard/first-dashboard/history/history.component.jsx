import {
  HistoryContainer,
  Col3,
  History,
  History2,
  Recieved,
  Owo,
  Bank,
} from "./history.styles";

export default function HistoryC() {
  return (
    <HistoryContainer>
      <Col3>
        <History>
          <Recieved>today's recieved</Recieved>
          <Owo>$2,890</Owo>
        </History>
        <History2>
          <Bank>cash at bank</Bank>
          <Owo>$3m</Owo>
        </History2>
        <History>
          <Recieved>today's recieved</Recieved>
          <Owo>$2,890</Owo>
        </History>
        <History2>
          <Bank>cash at bank</Bank>
          <Owo>$3m</Owo>
        </History2>
        <History>
          <Recieved>today's recieved</Recieved>
          <Owo>$2,890</Owo>
        </History>
      </Col3>
    </HistoryContainer>
  );
}
