import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../button/button";

import { ReactComponent as HideSvg } from "../../../assets/svg/hide.svg";
import { ReactComponent as ShowSvg } from "../../../assets/svg/show.svg";

export const SignupContainer = styled.div`
  margin: 0;
  padding: 50px 0;
  // color: #444946;

  @media screen and (max-width: 800px) {
    padding: 50px 10px;
  }
`;
export const Col = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 567px;

  @media only screen and (max-width: 830px) {
    width: 100%;
  }
`;
export const Form = styled.form`
  background: #fff;
  padding: 20px 40px;
  border-radius: 12px;

  @media only screen and (max-width: 830px) {
    border-radius: 0;
    padding: 20px 10px;
  }
`;
export const Title = styled.h1`
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: capitalize;
  ext-align: right;
  font-weight: 800;
  font-family: euclid;

  @media only screen and (max-width: 830px) {
    font-size: 22px;
  }
`;
export const Desc = styled.div`
  font-size: 18px;
  text-transform: capitalize;
  text-align: left;
  font-family: typo;
  font-weight: 800;
  letter-spacing: 2px;

  @media only screen and (max-width: 830px) {
    font-size: 16px;
  }
`;
export const PasswordExtra = styled.div`
  width: 100%;
  padding-bottom: 26px;
  font-size: 16px;
  line-height: 25px;
  margin: -40px 0 60px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: -40px 0 30px 0;
  }
`;
export const SignUpRedirect = styled.h2`
  text-transform: capitalize;
  font-size: 18px;
  margin: 0;
  font-family: euclid;

  @media screen and (max-width: 800px) {
    margin: 0;
    font-size: 18px;
  }
`;
export const Span = styled(Link)`
  cursor: pointer;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -50px 0 0 0;

  @media screen and (max-width: 800px) {
    display: block;
    margin: -30px 0 0 0;
  }
`;
export const ButtonC = styled(Button)`
  width: 100%;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 15px 10px;
  text-align: center;
  border-radius: 50px;
  font-size: 18px;

  @media only screen and (max-width: 830px) {
    width: 100%;
    margin: 30px 0 0 0;
  }
`;
export const ShowIcon = styled(ShowSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 88px;

  @media screen and (max-width: 525px) {
    left: 330px;
    bottom: 90px;
  }

  @media screen and (max-width: 400px) {
    left: 300px;
    bottom: 88px;
  }
`;
export const HideIcon = styled(HideSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 88px;

  @media screen and (max-width: 525px) {
    left: 330px;
    bottom: 90px;
  }

  @media screen and (max-width: 400px) {
    left: 300px;
    bottom: 88px;
  }
`;
