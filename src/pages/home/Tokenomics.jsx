import InfoBox from "../../components/InfoBox";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="wrapper mt-7 sm:mt-10">
      <div className="contain flex-col justify-start items-center gap-16">
        <div className="flex justify-center xl:flex-row flex-col items-center gap-5 xl:gap-10">
          <h3 className="text-white text-3xl sm:text-[48px] font-normal">
            Tokenomics
          </h3>
          <InfoBox
            type2
            para1={"7% Buy | 7% Sell Tax"}
            para2="Ticker: $ZKASH    Total Supply: 50,000,000,000"
          />
        </div>
        <img src="/pie.png" className="max-w-full object-contain" alt="" />
      </div>
    </div>
  );
};

export default Tokenomics;
