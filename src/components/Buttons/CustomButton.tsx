import styled from "styled-components";

const CustomButton = (props: { text: string; fullWidth?: boolean }) => {
  return (
    <StyledButtonContainer className="relative">
      <span className="absolute top-[11px] left-[20px]">
        <img src="/img/wallet.svg" alt="img" />
      </span>
      <StyledButton className={`${props.fullWidth ? "w-full" : ""}`}>
        {props.text}
      </StyledButton>
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.div`
  &:hover {
    button {
      box-shadow: 0px 0px 20px 0px rgba(230, 124, 254, 0.57);
    }
  }
`;

const StyledButton = styled.button`
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 10px;
  background: linear-gradient(108deg, #ff56bb 6.99%, #ff8f77 119.86%);
  padding: 14px 30px 14px 50px;
  cursor: pointer;
  transition: 130ms all;
`;

export default CustomButton;
