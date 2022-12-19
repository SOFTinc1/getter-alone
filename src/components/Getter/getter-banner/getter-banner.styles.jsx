import styled from "styled-components";
// import Button from "../../button/button";

export const GetterBannerContainer = styled.div``;
export const Section1 = styled.div`
  display: flex;
  background: #eaddff21;
  padding: 18px 10px;
  margin: 0;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 18px 0;
    width: 100%;
  }
`;
export const H1 = styled.h1`
  font-size: 16px;
  color: #000;
  font-family: euclid;
  font-weight: 400;
  margin: auto 0;
  letter-spacing: 1px;
  line-height: 22px;
`;
export const GreenSpan = styled.span`
  color: #732eff;
  font-weight: 800;
`;
export const Section2 = styled.div`
  display: flex;
  gap: 100px;
  padding: 10px 60px;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 18px 10px;
    gap: 0px;
  }
`;
export const Text = styled.div``;
export const High = styled.div`
display: flex;
gap: 20px;
margin: auto 0 auto auto;

@media screen and (max-width: 800px) {
  margin: 20px 0 0 -19px;
  gap: 10px;
}
`;
export const BannerText = styled.h1`
  color: #000;
  font-family: euclid;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: left;
  font-size: 26px;
  text-transform: capitalize;

  @media screen and (max-width: 830px) {
    font-size: 28px;
    padding: 0;
  }
`;
export const BannerTextSpan = styled.span`
  color: #732eff;
`;
export const BannerDetails = styled.h1`
  color: #000;
  font-family: euclid;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: left;
  font-size: 18px;
  text-transform: lowercase;

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 15px;
  }
`;
export const BannerDetailsSpan = styled.span`
  color: #732eff;
  font-size: 15px;
  font-weight: 800;
`;
export const Section3 = styled.div`
  padding: 60px 60px 0 60px;

  @media screen and (max-width: 800px) {
    padding: 24px 0 0 0;
  }
`;
export const HeadContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 800px) {
  }
`;
export const Head = styled.h1`
  color: #000;
  font-family: euclid;
  font-weight: 400;
  letter-spacing: 0.0015em;
  text-align: left;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    padding: 0 0 0 20px;
  }
`;
export const ImageDiv = styled.div`
  display: block;
  gap: 20px;
`;
export const ImageSrc = styled.img`
  width: 100%;
  height: auto;
`;
export const Section4 = styled.div`
  padding: 0;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;