// 페이지 네이션 로직 추가 필요
// 결의서 페이지와 동일한 페이지 네이션을 쓴다 하여도 페이지에서 불러오는 갯수와 페이지 네이션 연동 로직 필요 
import React, { useState } from "react";
import { AiOutlineFileText, AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import AlertPopup from "../AlertPopup";
import { useNavigate } from "react-router-dom";

const ExpensesList = ({ item, onDelete }) => {
  const { id, title, date } = item;
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

  const handleDelete = () => {
    // 삭제 버튼 클릭 시 팝업을 표시
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    // 확인 버튼 클릭 시 아이템 삭제 후 팝업 닫기
    onDelete(item);
    setShowPopup(false);
  };

  const handleCancelDelete = () => {
    // 취소 버튼 클릭 시 팝업 닫기
    setShowPopup(false);
  };

  const handleTitleClick = () => {
    // 타이틀 클릭 시 임시 페이지로 이동
    navigate(`/details/${id}`); // 해당 경로로 이동
  };

  return (
    <ItemContainer>
      <Icon>
        <AiOutlineFileText />
      </Icon>
      <Date>{date}</Date>
      {/* onClick 이벤트에 handleTitleClick 함수 연결 */}
      <Title onClick={handleTitleClick}>{title}</Title>
      <DeleteButton onClick={handleDelete}>
        <AiOutlineDelete />
      </DeleteButton>
      {showPopup && (
        <AlertPopup
          message="정말 삭제하시겠습니까?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </ItemContainer>
  );
};


const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid #ccc;

  @media screen and (max-width: 768px) {
    width: 30rem;
    padding: 8px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 40rem;
    padding: 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 60rem;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  font-size: 24px;
  color: #4285f4;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  margin-right: 10px;
  font-size: 14px;
  cursor: Default;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.div`
  flex: 1;
  margin-right: 10px;
  color: black;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #7c7c7c;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: black;

  &:hover {
    color: #7c7c7c;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export default ExpensesList;
