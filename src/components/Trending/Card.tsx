import styled from "styled-components";

interface ICard {
  name: string;
  img: string;
  author: string;
  authorImg: string;
  price: string;
}

const Card = (props: ICard) => {
  return (
    <StyledTrendingCard
      data-aos="fade-left"
      className="trending-card bg-[#1F1F1F] p-2 rounded-[10px]"
    >
      <img
        className="trendig-card__img"
        src={`/img/trending/tending_${props.img}.png`}
        alt="img"
      />
      <p className="py-4 font-[500]">{props.name}</p>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img src={`/img/trending/author_${props.authorImg}.svg`} alt="img" />
          <p className="text-[15px] font-[500]">{props.author}</p>
        </div>
        <div>
          <p className="text-[12px] text-[#6B6B6B] mb-1">Current Bid</p>
          <p className="text-[15px]">$ {props.price}</p>
        </div>
      </div>
    </StyledTrendingCard>
  );
};

const StyledTrendingCard = styled.div`
  transition: 200ms all;
  &:hover {
    box-shadow: 0px 0px 36px -10px rgba(205, 205, 205, 0.57);
  }
`;

export default Card;
