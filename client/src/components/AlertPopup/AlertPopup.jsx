import React from "react";
import styled from "styled-components";

const AlertPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <PopupOverlay>
      <PopupContainer>
        <PopupText>{message}</PopupText>
        <ButtonContainer>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          <CancelButton onClick={onCancel}>취소</CancelButton>
        </ButtonContainer>
      </PopupContainer>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
`;

const PopupText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  cursor: default;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #005ec2;
  }
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;

  &:hover {
    background-color: #808080;
  }
`;

export default AlertPopup;
