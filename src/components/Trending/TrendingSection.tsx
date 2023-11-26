import Card from "./Card";
import styled from "styled-components";

const nfts = [
  {
    name: "ExBoot #2",
    img: "2",
    author: "Richard ",
    authorImg: "2",
    price: "7.421",
  },
  {
    name: "ExBoot #2",
    img: "3",
    author: "Richard ",
    authorImg: "1",
    price: "4.176",
  },
  {
    name: "ExBoot #2",
    img: "4",
    author: "Richard ",
    authorImg: "2",
    price: "3.111",
  },
];

const TrendingSection = () => {
  return (
    <StyledTrendingSection className="my-container">
      <div className="py-14">
        <p className="trending-title text-[35px] font-[600] pb-14">
          Trending Art 🔥
        </p>
        <div className="trending-cards flex gap-8 flex-wrap justify-center">
          {nfts.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </StyledTrendingSection>
  );
};

const StyledTrendingSection = styled.div`
  @media (max-width: 956px) {
    .trending-cards {
      flex-direction: column;
    }
    .trending-card {
      width: 400px;
      margin: 0 auto;
    }
    .trendig-card__img {
      width: 100%;
    }
  }

  @media (max-width: 615px) {
    .trending-card {
      width: 350px;
    }
  }

  @media (max-width: 440px) {
    .trending-title {
      font-size: 30px;
    }
  }

  @media (max-width: 400px) {
    .trending-card {
      width: 100%;
    }
  }
`;

export default TrendingSection;
