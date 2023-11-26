import styled from "styled-components";

const CustomInput = (props: { placeholder: string }) => {
  return (
    <div className="relative">
      <span className="absolute top-[6px] left-[8px]">
        <img src="/img/search.svg" alt="img" />
      </span>
      <StyledInput type="text" placeholder={props.placeholder} />
    </div>
  );
};

const StyledInput = styled.input`
  background-color: #000;
  color: #ffff;
  border: none;
  border: 1px solid #000;
  outline: none;
  padding: 12px 20px 12px 40px;
  border-radius: 8px;

  &:focus {
    border-color: #4f4f4f;
  }
`;

export default CustomInput;
