import {
  PaymentContainer,
  Title,
  CardGreen,
  Icon,
  Details,
  TitleN,
  Amount,
  ArrowIcon,
  CardYellow,
  Icon2,
  Details2,
  TitleN2,
  Amount2,
  ArrowIcon2
} from "./payment.styles";
import Bitcoin from "../../../../assets/svg/bitcoin.svg";
import Watchlist from "../../../../assets/svg/watchlist.svg";

export default function Payment() {
  return (
    <PaymentContainer>
      <Title>payment overview</Title>
      <CardGreen>
        <Icon src={Bitcoin} />
        <Details>
          <TitleN>open cash</TitleN>
          <Amount>$20,000</Amount>
        </Details>
        <ArrowIcon src={Watchlist} />
      </CardGreen>
      <CardYellow>
        <Icon2 src={Bitcoin} />
        <Details2>
          <TitleN2>open cash</TitleN2>
          <Amount2>$20,000</Amount2>
        </Details2>
        <ArrowIcon2 src={Watchlist} />
      </CardYellow>
    </PaymentContainer>
  );
}
