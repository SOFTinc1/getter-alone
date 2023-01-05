import styled from "styled-components";
import Search from "../../../search/search";
import Search2 from "../../../../components/search2/search2";

export const DashboardHeaderContainer = styled.div`
  padding: 0 30px;
  display: flex;
  gap: 10px;
  background: #fffcf1 !important;
  // box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 830px) {
    padding: 0;
    display: block;
    margin: 2px 0;
    width: 100vw;
  }
`;
export const LogoImg = styled.img`
  align-items: center;
  padding: 0;
  width: 30%;
  margin: auto 0;

  @media screen and (max-width: 830px) {
    width: 130px;
  }
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

  @media screen and (max-width: 830px) {
    width: 40px;
    height: 40px;
    padding: 10px;
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

  @media screen and (max-width: 830px) {
    width: 40px;
    height: 40px;
    padding: 10px;
  }
`;
export const SearchBar = styled(Search)``;
export const Search2Container = styled(Search2)`
  width: 20px;
  height: 20px;
`;
export const NavMe = styled.div`
  display: none;

  @media screen and (max-width: 830px) {
    display: flex;
    gap: 10px;
    // margin: 0 0 0 auto;
  }
`;