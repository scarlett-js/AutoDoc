import React from "react";
import styled from "styled-components";

const SocialButton = ({ icon, text, backgroundcolor }) => {
  return (
    <ButtonContainer backgroundcolor={backgroundcolor}>
      {icon && <Icon src={icon} />}
      <Text>{text}</Text>
    </ButtonContainer>
  );
};

export default SocialButton;

const ButtonContainer = styled.button`
  display: grid;
  grid-template-columns: 1fr 6fr;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
  border: none;
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#ffffff"};
  color: #333;
  cursor: pointer;
  border-radius: 10px;
`;

const Icon = styled.img`
  padding-left: 10px;
`;

const Text = styled.span`
  font-size: 2rem;
`;
