import React, { useState } from "react";
import * as S from "../../assets/style/Main/SearchStyle";
import search from "../../assets/img/index";

const Search = () => {
  let [value, setValue] = useState("");

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const getSearch = () => {
    console.log(value);
  };

  const enterSearch = () => {
    if (window.event.keyCode === 13) getSearch();
  };
  return (
    <S.SearchBox>
      <S.SearchBar>
        <S.SearchInput onChange={inputChange} onKeyPress={enterSearch} />
      </S.SearchBar>
    </S.SearchBox>
  );
};

export default Search;
