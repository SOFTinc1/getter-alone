import styled, { css } from "styled-components";

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  transition: all .7s ease-in-out; 
  font-size: 16px!important;

  &:hover {
    background-color: linear-gradient(45deg, #ff80ab, #82b1ff);
    border: none;
    transform: scale(1.0);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }
};

export const ButtonContainer = styled.div`
  cursor: pointer;
  letter-spacing: 1px;
  background: #f5f5f5;
  color: #000;
  font-family: euclid;
  font-weight: 600;
  text-transform: capitalize;
  transition: all .9s ease-in-out;
  ${getButtonStyles}

  &:hover {
    background-color: #444946;
    color: #fff;
    border: none;
    transform: scale(1.0);
  }
`;
