import styled, { css } from "styled-components";
import { BsCheck } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

const Input = ({
  width,
  info,
  size,
  height,
  fontSize,
  onChange,
  eyebutton,
  suffixSize,
  color,
  focusColor,
  isValid,
  ...props
}) => {
  return (
    <InputContainer width={width}>
      <InputField
        size={size}
        height={height}
        fontSize={fontSize}
        onChange={onChange}
        $focusColor={focusColor}
        $isValid={isValid}
        {...props}
      />
      {info && <InputInfo>{info}</InputInfo>}
      {isValid !== undefined && props.value !== "" && (
        <ValidationIcon className={isValid ? "valid-icon" : "invalid-icon"}>
          {isValid ? <BsCheck /> : <RiCloseFill />}
        </ValidationIcon>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: ${(props) => props.width || "auto"}rem;
  position: relative;
`;

const InputField = styled.input`
  width: ${(props) => props.size || "100%"}rem;
  height: ${(props) => props.height || "auto"}rem;
  padding: 0.2rem;

  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: var(--color-white);

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}rem !important;
    `}

  &:focus {
    border-color: ${(props) =>
      props.$focusColor ? props.$focusColor : "var(--color-blue-06)"};
  }
`;

const InputInfo = styled.p`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  color: var(--color-red-01);
  word-wrap: break-word;
`;

const ValidationIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 30%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  color: var(--color-blue-06);
  &.invalid-icon {
    color: var(--color-red-01);
  }
`;

export default Input;
