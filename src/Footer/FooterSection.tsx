import Logo from "../components/Header/Logo";

const FooterSection = () => {
  return (
    <div className="my-container">
      <div className="py-12">
        <Logo />
        <p className="text-[35px] font-[500] py-6">NFT Distro</p>
        <p className="text-[15px] text-[#F4F4F4] pb-4">
          Experience the Revolutionary World of Non-Fungible Tokens on Our
          Exclusive NFT Marketplace
        </p>
        <p>Copyright NFT Distro 2023 </p>
      </div>
    </div>
  );
};

export default FooterSection;
