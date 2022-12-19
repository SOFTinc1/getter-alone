import styled from "styled-components";

export const GetterHighpointContainer = styled.div`
  font-family: euclid;
  margin: 0;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 830px) {
    display: block;
    padding: 0 10px;
  }
`;
export const Col1 = styled.div``;
export const Card = styled.div`
  padding: 20px;
  background: #eaddff21;
  width: 420px;
  border-radius: 12px;

  @media screen and (max-width: 830px) {
    width: 100%;
    margin: 0 auto 20px auto;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 830px) {
    gap: 0;
  }
`;
export const Flex2 = styled.div`
  display: flex;
  gap: 40px;
  margin: 30px auto auto auto;
`;
export const ButtonC = styled.h1`
  font-size: 15px;
  text-transform: capitalize;
  background: #d1e3e5;
  border-radius: 50px;
  padding: 10px 20px;
  margin: auto;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;
export const Newly = styled.h1`
  font-size: 15px;
  text-transform: capitalize;
  margin: auto;
`;
export const Loser = styled.h1`
  font-size: 15px;
  text-transform: capitalize;
  margin: auto;
  color: red;
`;
export const ViewAll = styled.h1`
  font-size: 15px;
  text-transform: capitalize;
  margin: auto;
  text-decoration: underline;
`;
export const Token = styled.h1`
  display: flex;
  gap: 10px;
  font-size: 16px;
  text-transform: capitalize;
  // padding: 10px 20px;
  margin: auto;
`;
export const ImageSrc = styled.img`
  width: 25%;
  margin: -7px auto auto auto;

  @media screen and (max-width: 800px) {
    margin: -1.5px auto auto auto;
  }
`;
export const Price = styled.h1`
  font-size: 16px;
  text-transform: capitalize;
  padding: 10px 20px;
  margin: auto;
`;
export const Percentage = styled.h1`
  font-size: 16px;
  text-transform: capitalize;
  padding: 10px 20px;
  margin: auto;
  color: green;
`;
export const PercentageRed = styled.h1`
  font-size: 16px;
  text-transform: capitalize;
  padding: 10px 20px;
  margin: auto;
  color: red;
`;
export const Col2 = styled.div``;
export const Col3 = styled.div``;
export const Image = styled.img`
  width: 400px;
  height: 282.5px;
  border-radius: 7px;

  @media screen and (max-width: 830px) {
    width: 100%;
    margin: 0 auto;
  }
`;
