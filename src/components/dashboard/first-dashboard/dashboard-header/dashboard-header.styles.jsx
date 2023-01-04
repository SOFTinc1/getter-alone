import styled from "styled-components";
import Search from "../../../search/search";

export const DashboardHeaderContainer = styled.div`
  padding: 0 30px;
  display: flex;
  gap: 10px;
  background: #fffcf1 !important;
  // box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 830px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 525px) {
    padding: 0;
  }
  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;
export const LogoImg = styled.img`
  align-items: center;
  padding: 0;
  width: 30%;
  margin: auto 0;

  @media screen and (max-width: 830px) {
    width: 150px;
  }
`;
export const Side2 = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 0 0 auto;
  padding: 0;
`;
export const NotificationImg = styled.img`
  padding: 5px;
  width: 30px;
  height: 30px;
  margin: auto 0;
  border-radius: 50%;
  border: 1px solid #f5f5f5;

  &:hover {
    background: #f5f5f5;
  }
`;
export const OptionImg = styled.img`
  padding: 5px;
  width: 30px;
  height: 30px;
  margin: auto 0;
  border-radius: 50%;
  border: 1px solid #f5f5f5;

  &:hover {
    background: #f5f5f5;
  }
`;
export const SearchBar = styled(Search)``;