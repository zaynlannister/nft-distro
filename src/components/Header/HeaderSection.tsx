import CustomButton from "../Buttons/CustomButton";
import CustomInput from "./Inputs/CustomInput";
import Logo from "./Logo";
import styled from "styled-components";

const HeaderSection = () => {
  return (
    <StyledHeader className="bg-[#1F1F1F]">
      <div className="my-container">
        <div className="header py-4 flex justify-between items-center">
          <div className="flex gap-12 items-center">
            <Logo />
            <CustomInput placeholder="Search" />
          </div>
          <div className="header-nav flex gap-8 items-center">
            <a href="#explore">Explore</a>
            <a href="#trending">Trending🔥</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="header-content flex justify-between items-center gap-6 py-16">
          <div>
            <p className="header-text-1 p-[#F4F4F4] text-[13px] tracking-widest">
              WEB 3 NON-FUNGIBLE TOKENS
            </p>
            <p className="header-text-2 text-[60px] font-[500] pt-4">
              Unlock Unique Digital Ownership with NFTs
            </p>
            <p className="header-text-3 text-[24px] text-[#F4F4F4] pt-4 pb-8">
              Experience the Revolutionary World of Non-Fungible Tokens on Our
              Exclusive NFT Marketplace
            </p>
            <CustomButton text="Coonect Wallet" />
          </div>
          <div>
            <img
              className="header-content__img"
              width="400px"
              height="430px"
              src="/img/header-bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  @media (max-width: 1010px) {
    .header-content__img {
      display: none;
    }
  }

  @media (max-width: 725px) {
    .header-nav {
      display: none;
    }

    .header-text {
      &-2 {
        font-size: 40px;
      }
      &-3 {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 725px) {
    input {
      width: 100%;
    }
  }
`;

export default HeaderSection;
