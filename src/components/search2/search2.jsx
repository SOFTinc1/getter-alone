import React from "react";
import { GroupContainer, FormInputContainer } from "./search2.styles";

const Search2 = ({ placeholder, handleChange }) => (
  <GroupContainer>
    <FormInputContainer placeholder={placeholder} className="extend"/>
  </GroupContainer>
);

export default Search2;