import styled from "styled-components";

export const FooterContainer = styled.div`
background: #fff!important;
  color: #363f4a;
  padding: 10px 0;
  display: flex;
  gap: 560px;

  @media screen and (max-width: 830px) {
    display: block;
    gap: 20px;
  }
`;
export const Row = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 830px) {
    align-items: center;
    justify-content: center;
  }
`;
export const Col1 = styled.div`
  margin: 15px auto 0 auto; 
`;
export const H1 = styled.h1`
  font-size: 22px;
  font-family: euclid;
  text-transform: capitalize;
  font-weight: 600;
  lettetr-spacing: 1px;

  @media screen and (max-width: 830px) {
    text-align: center;
  }
`;
export const P = styled.p`
  font-size: 14px;
  font-family: euclid;
  text-transform: lowercase;
  
  @media screen and (max-width: 830px) {
    text-align: center;
  }
`;
export const Col2 = styled.div`
  font-size: 14px;
  background: #f5f5f5;
  padding: 20px;
  margin: auto 0;
  font-family: euclid;
  font-weight: 800;
  border-radius: 50%;
`;