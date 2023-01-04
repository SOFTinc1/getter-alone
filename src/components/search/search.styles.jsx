import styled from "styled-components";

export const GroupContainer = styled.div`
  display: flex;
  width: 300px;
  padding: 23px 20px;
  height: 36px;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  margin: auto 0;
  background: #faf8eb;
  // border: 1px solid #f5f5f5;
  // background: #eaddff21; 
  // background: rgba(72, 77, 88, 0.2);

  &:focus {
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FormInputContainer = styled.input`
  background: transparent;
  border: none;
  width: 170px;
  height: 20px;

  @media screen and (max-width: 800px) {
    width: 260px;
  }

  &:focus {
    color: #000;
    outline: none;
    font-size: 16px;
    font-family: lionel;
    letter-spacing: 1px;

    @media screen and (max-width: 800px) {
      color: #000;
      width: 260px;
    }
  }

  &::placeholder {
    font-weight: normal;
    font-size: 16px;
    font-family: lionel;
    letter-spacing: 1px;
    color: #000;
    outline: none;
    padding: 0;
    margin: auto;

    @media screen and (max-width: 800px) {
      color: #000;  
      // margin: -50px 0 0 0;  
    }
  }
`;
export const SearchImg = styled.img`
  width: 17px;
  margin: 3px 0 0 0;
  padding: 0;

  @media screen and (max-width: 800px) {
   width: 40px;
  }
`;
