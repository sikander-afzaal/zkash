import BlueBoxLayout from "../../components/BlueBoxLayout";

const Personal = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr__2fr] w-full gap-12 lg:gap-8 relative">
      <BlueBoxLayout>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-aspidBlue px-5 text-xl 2xl:text-2xl">
            BSC Airdrop
          </h3>
          <img
            src="/landing-hero.png"
            className="object-contain xl:block hidden w-[96px]"
            alt=""
          />
        </div>
        <p className="text-white text-sm px-5 py-1">My airdrop total</p>
        <div className="flex justify-start mt-1  items-center flex-col gap-4 px-5 w-full">
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Airdrop 1</p>
            <p className="text-white text-sm">1664</p>
          </div>
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Airdrop 2</p>
            <p className="text-white text-sm">1664</p>
          </div>
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Airdrop 3</p>
            <p className="text-white text-sm">1664</p>
          </div>
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white text-sm">Total</p>
            <p className="text-white text-sm">1664</p>
          </div>
        </div>
        <button
          className={`text-white w-[182px] translate-y-1/2 self-center h-[50px] -mt-4 bg-aspidBlue relative  text-base`}
        >
          <span className="bg-dark w-1 aspect-square absolute top-0 left-0"></span>
          <span className="bg-dark w-1 aspect-square absolute bottom-0 left-0"></span>
          <span className="bg-dark w-1 aspect-square absolute bottom-0 right-0"></span>
          <span className="bg-dark w-1 aspect-square absolute top-0 right-0"></span>
          Readmore
        </button>
      </BlueBoxLayout>
      <BlueBoxLayout>
        <h3 className="text-aspidBlue px-5 text-xl 2xl:text-2xl">
          Reward History
        </h3>
        <p className="text-white text-xs sm:text-sm px-5 mt-2">
          Total Rewards:$123312
        </p>
        <div className="px-5 w-full mb-5 overflow-x-auto">
          <div className="bg-aspidBlue bg-opacity-50 min-w-[600px]  w-full flex-col  flex justify-start items-start ">
            <div className="grid grid-cols-3 w-full gap-2 py-3 px-4 border-b border-solid border-aspidBlue">
              <p className="text-white text-sm">Date</p>
              <p className="text-white text-sm">Token</p>
              <p className="text-white text-sm">Amount (ETH)</p>
            </div>
            <RewardTableRow date="12/2/2023" token="1,516,164" amount="12" />
            <RewardTableRow date="12/2/2023" token="1,516,164" amount="12" />
            <RewardTableRow date="12/2/2023" token="1,516,164" amount="12" />
          </div>
        </div>
      </BlueBoxLayout>
    </div>
  );
};

export default Personal;

const RewardTableRow = ({ date, token, amount }) => {
  return (
    <div className="grid grid-cols-3 w-full gap-2 py-2 px-4 border-b border-solid border-aspidBlue">
      <p className="text-lg text-white font-fifaks">{date}</p>
      <p className="text-lg text-white font-fifaks">{token}</p>
      <p className="text-lg text-white font-fifaks">{amount}</p>
    </div>
  );
};
