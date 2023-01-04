import {
  FirstDashboardContainer,
  CardWhite,
  Collection,
  Row2,
  Row3,
  Token,
  Qty,
  Price,
} from "./token-list.styles";

export default function TokenList() {
  return (
    <FirstDashboardContainer>
      <CardWhite>
        <Collection>collection</Collection>
        <Row2>
          <Token>baby samo:</Token>
          <Qty>100,000</Qty>
          <Price>$3</Price>
        </Row2>
        <Row3>
          <Token>baby samo:</Token>
          <Qty>100,000</Qty>
          <Price>$3</Price>
        </Row3>
        <Row2>
          <Token>baby samo:</Token>
          <Qty>100,000</Qty>
          <Price>$3</Price>
        </Row2>
        <Row3>
          <Token>baby samo:</Token>
          <Qty>100,000</Qty>
          <Price>$3</Price>
        </Row3>
        <Row2>
          <Token>baby samo:</Token>
          <Qty>100,000</Qty>
          <Price>$3</Price>
        </Row2>
      </CardWhite>
    </FirstDashboardContainer>
  );
}
