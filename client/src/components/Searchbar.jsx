import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
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

  @media screen and (max-width: 768px) {
    /* 모바일 화면 크기에 대한 스타일 */
    padding: 6px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    /* 테블릿 화면 크기에 대한 스타일 */
    padding: 10px;
  }

  @media screen and (min-width: 1025px) {
    /* 데스크탑 화면 크기에 대한 스타일 */
    padding: 12px;
  }
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
  width: 100%;

  @media screen and (min-width: 768px) {
    /* 모바일 이상의 화면에서 input 너비 조정 */
    /* 예시: 테블릿부터는 너비를 줄임 */
    width: 80%;
  }

  @media screen and (min-width: 1025px) {
    /* 데스크탑 이상의 화면에서 input 너비 조정 */
    /* 예시: 데스크탑부터는 더 넓은 너비로 조정 */
    width: 90%;
  }
`;

export default SearchBar;
