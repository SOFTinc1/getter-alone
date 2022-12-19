import React from "react";
import { GroupContainer, FormInputContainer, SearchImg } from "./search.styles";
import SearchIcon from "../../assets/svg/search.svg";

const Search = ({ placeholder, handleChange }) => (
  <GroupContainer>
    <FormInputContainer placeholder={placeholder} onChange={handleChange} />
    <SearchImg src={SearchIcon} />
  </GroupContainer>
);

export default Search;