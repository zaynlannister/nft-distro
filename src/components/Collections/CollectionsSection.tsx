import React from "react";
import styled from "styled-components";
import CustomButton from "../Buttons/CustomButton";

const featured = [
  {
    name: "ExBoot #1",
    author: "Perperzon",
    authorImg: "1",
    description: "We would like to present you The Exboot 3D - Watching you~",
    price: "6.703",
    img: "feature_1",
  },
  {
    name: "ExBoot #2",
    author: "Perperzon",
    authorImg: "2",
    description: "We would like to present you The Exboot 3D - Watching you~",
    price: "5.999",
    img: "feature_2",
  },
];

const CollectionsSection = () => {
  const [time, setTime] = React.useState(4394);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };
  return (
    <StyledCollections className="my-container">
      <div className="py-14">
        <p
          data-aos="fade-right"
          className="collection-title text-[35px] font-[600] pb-14"
        >
          Featured Collections
        </p>
        <div className="collection-content flex justify-between gap-8">
          {featured.map((item, index) => (
            <div
              data-aos="fade-up"
              className="bg-[#1F1F1F] flex items-center p-4 gap-4 rounded-[14px]"
              key={index}
            >
              <div>
                <img
                  className="collection-img"
                  style={{
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                  width={270}
                  height={330}
                  src={`/img/featured/${item.img}.jpg`}
                  alt="img"
                />
              </div>
              <div className="collection-info">
                <div className="flex items-center gap-2 mb-6">
                  <img
                    src={`/img/trending/author_${item.authorImg}.svg`}
                    alt="img"
                  />
                  <p className="text-[15px] font-[500]">{item.author}</p>
                </div>
                <p className="text-[25px] font-[500] mb-6">{item.name}</p>
                <p className="text-[12px] text-[#6B6B6B] mb-4">Description</p>
                <p className="text-[12px] text-[#F4F4F4] mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-[#6B6B6B] text-[12px] mb-1">
                      Current Bid
                    </p>
                    <p className="text-[14px] font-[500]">$ {item.price}</p>
                  </div>
                  <div>
                    <p className="text-[#6B6B6B] text-[12px] mb-1">End in</p>
                    <p className="text-[14px] font-[500] w-[83px]">
                      {formatTime()}
                    </p>
                  </div>
                </div>
                <CustomButton fullWidth={true} text="Place Bid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledCollections>
  );
};

const StyledCollections = styled.div`
  @media (max-width: 1010px) {
    .collection-content {
      flex-direction: column;
    }
    .collection-info {
      width: 100%;
    }
  }

  @media (max-width: 550px) {
    .collection-img {
      width: 200px;
    }
  }

  @media (max-width: 515px) {
    .collection-img {
      width: 100px;
    }
  }

  @media (max-width: 440px) {
    .collection-title {
      font-size: 30px;
    }
  }
`;

export default CollectionsSection;
