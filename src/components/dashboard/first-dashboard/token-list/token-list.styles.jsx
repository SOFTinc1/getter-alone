import styled from "styled-components";

export const FirstDashboardContainer = styled.div`
  padding: 0 0 40px 0;
  background: #fffcf1;
  font-family: lionel;

  @media screen and (max-width: 830px) {
    padding: 0;
  }
  @media screen and (max-width: 525px) {
    padding: 0;
  }
  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;
export const CardWhite = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 10px 30px;
  width: 350px;
`;
export const Collection = styled.div`
  font-size: 14px;
  text-transform: capitalize;
  color: #aaa;
  margin: 0 0 15px 0;
`;
export const Row2 = styled.div`
  display: flex;
  gsp: 10px;
  background: #fdcf6f;
  margin: 0 0 10px 0;
  padding: 10px;
  border-radius: 7px;
`;
export const Row3 = styled.div`
  display: flex;
  gap: 10px;
  background: #0c756f;
  margin: 0 0 10px 0;
  padding: 10px;
  border-radius: 7px;
  color: #fff;
`;
export const Token = styled.h2`
font-size: 14px;
text-transform: capitalize;
font-weight: 600;
letter-spacing: 2px;
margin: auto;
`;
export const Qty = styled.h2`
font-size: 14px;
text-transform: capitalize;
font-weight: 600;
letter-spacing: 2px;
margin: auto;
`;
export const Price = styled.p`
font-size: 14px;
text-transform: capitalize;
font-weight: 600;
letter-spacing: 2px;
margin: auto;
`;
