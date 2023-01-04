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
export const Head = styled.h1`
  font-size: 22px;
  text-transform: capitalize;
  padding: 40px 40px 0 40px;
`;
export const Hr = styled.hr`
  background: #000;
  color: #000;
  width: 30px;
  margin: 0 40px 30px 60px;
  height: 2px;
  border-radius: 52px;
`;
export const Row = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 40px;
`;