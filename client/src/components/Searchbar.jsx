import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styled } from "styled-components";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    // 검색 버튼이 클릭될 때 검색 쿼리를 부모 컴포넌트로 전달
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    // Enter 키를 눌렀을 때도 검색 쿼리를 부모 컴포넌트로 전달
    if (e.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  return (
    <SearchBarContainer>
      <SearchIcon onClick={handleSearchClick}>
        <AiOutlineSearch />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #cbd1d4;
  padding: 8px;
  border-radius: 4px;
`;

const SearchIcon = styled.div`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  margin-left: 8px;
  font-size: 16px;
  color: #333;
`;

export default SearchBar;
