import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo>
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  gap: 8px;

  .first {
    width: 28px;
    height: 28px;
    background-color: #fff;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }

  .second {
    width: 28px;
    height: 28px;
    background-color: #fff;
    clip-path: circle(50% at 50% 50%);
  }

  .third {
    width: 28px;
    height: 28px;
    background-color: #ff7795;
    clip-path: polygon(0 50%, 100% 100%, 100% 0);
  }
`;

export default Logo;
