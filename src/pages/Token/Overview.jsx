import { useState } from "react";

const Overview = () => {
  const [time, setTime] = useState(5);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-8">
      <TokenBox>
        <h3 className="text-aspidBlue px-5 text-xl sm:text-2xl">
          Reward Token
        </h3>
        <div className="w-full flex justify-between px-5 items-center gap-2">
          <div className="flex justify-start items-center gap-2">
            <img
              src="/ico.png"
              className="w-[36px] aspect-square object-contain"
              alt=""
            />
            <p className="text-white">$ZKASH</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <img src="/graph.png" className="object-contain w-[36px]" alt="" />
            <img
              src="/shuffle.png"
              className="object-contain w-[36px]"
              alt=""
            />
            <img
              src="/metamask.png"
              className="object-contain w-[36px]"
              alt=""
            />
          </div>
        </div>
        <img
          src="/reward-graph.png"
          className="w-full h-[172px] object-cover mt-4"
          alt=""
        />
      </TokenBox>
      <TokenBox>
        <h3 className="text-aspidBlue px-5 text-xl sm:text-2xl">$ZKASH</h3>
        <p className="text-white sm:text-base text-xs px-5">
          $0.00057270 <span className="text-success">+20%</span>{" "}
          <span className="text-fail">-20%</span>
        </p>
        <div className="flex mt-auto mb-5 px-5 justify-start items-start flex-col w-full">
          <div className="flex justify-start items-center">
            <button
              onClick={() => setTime(5)}
              className={`text-white ${
                time === 5 ? "bg-aspidBlue" : "bg-transparent"
              } px-3 transition-all duration-300 py-1`}
            >
              5m
            </button>
            <button
              onClick={() => setTime(1)}
              className={`text-white ${
                time === 1 ? "bg-aspidBlue" : "bg-transparent"
              } px-3 transition-all duration-300 py-1`}
            >
              1h
            </button>
            <button
              onClick={() => setTime(6)}
              className={`text-white ${
                time === 6 ? "bg-aspidBlue" : "bg-transparent"
              } px-3 transition-all duration-300 py-1`}
            >
              6h
            </button>
            <button
              onClick={() => setTime(24)}
              className={`text-white ${
                time === 24 ? "bg-aspidBlue" : "bg-transparent"
              } px-3 transition-all duration-300 py-1`}
            >
              24h
            </button>
          </div>
          <div className="flex justify-start items-center w-full gap-6 p-3 bg-aspidBlue">
            <div className="flex justify-start flex-col items-center">
              <p className="text-white font-fifaks">Volume</p>
              <p className="text-white text-sm font-fifaks">$212.6</p>
            </div>
            <div className="flex justify-start flex-col items-center">
              <p className="text-white font-fifaks">Buys</p>
              <p className="text-white text-sm font-fifaks">231</p>
            </div>
            <div className="flex justify-start flex-col items-center">
              <p className="text-white font-fifaks">Sell</p>
              <p className="text-white text-sm font-fifaks">214</p>
            </div>
          </div>
        </div>
      </TokenBox>
      <TokenBox>
        <h3 className="text-aspidBlue px-5 text-xl sm:text-2xl">Info</h3>
        <div className="flex justify-start mb-3 sm:mt-3 items-center flex-col gap-4 px-5 w-full">
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Reward Holders</p>
            <p className="text-white text-sm">2580</p>
          </div>
          <div className="flex justify-between items-center w-full gap-1">
            <p className="text-white font-fifaks">Tx (buy/sell)</p>
            <p className="text-white text-sm">7%</p>
          </div>
          <div className="flex justify-between items-center w-full gap-1">
            <p className="text-white font-fifaks">Circulating Supply</p>
            <p className="text-white text-sm">18B</p>
          </div>
          <div className="flex justify-between items-center w-full gap-1">
            <p className="text-white font-fifaks">Total Supply</p>
            <p className="text-white text-sm">48.18B</p>
          </div>
          <div className="flex justify-between items-center w-full gap-1">
            <p className="text-white font-fifaks">Market Cap</p>
            <p className="text-white text-sm">$10.3M</p>
          </div>
        </div>
      </TokenBox>
    </div>
  );
};

export default Overview;

const TokenBox = ({ children }) => {
  return (
    <div className="flex justify-start items-start flex-col gap-4 relative border-[3px] border-solid border-aspidBlue w-full pt-6 bg-dark">
      {/* //top left ------------- */}
      <div className="bg-dark w-2 h-1 absolute -top-1 -left-1"></div>
      <div className="bg-dark w-1 h-1 absolute top-0 -left-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-1 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 left-1"></div>
      {/* //bottom left ----------------------- */}
      <div className="bg-dark w-2 h-1 absolute -bottom-1 -left-1"></div>
      <div className="bg-dark w-1 h-1 absolute bottom-0 -left-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-1"></div>
      {/* //top right ----------------------- */}
      <div className="bg-dark w-2 h-1 absolute -top-1 -right-1"></div>
      <div className="bg-dark w-1 h-1 absolute top-0 -right-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-1 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-1"></div>
      {/* //bottom right ----------------------- */}
      <div className="bg-dark w-2 h-1 absolute -bottom-1 -right-1"></div>
      <div className="bg-dark w-1 h-1 absolute bottom-0 -right-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-1"></div>
      {/* //offset border ----------------------- */}
      <div className="w-full bg-dark absolute -bottom-3 -right-3 h-full border-solid border-[3px] border-aspidBlue -z-10">
        {/* //bottom left ----------------------- */}
        <div className="bg-dark w-2 h-1 absolute -bottom-1 -left-1"></div>
        <div className="bg-dark w-1 h-1 absolute bottom-0 -left-1"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 left-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-1"></div>
        {/* //top right ----------------------- */}
        <div className="bg-dark w-2 h-1 absolute -top-1 -right-1"></div>
        <div className="bg-dark w-1 h-1 absolute top-0 -right-1"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute top-1 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-1"></div>
        {/* //bottom right ----------------------- */}
        <div className="bg-dark w-2 h-1 absolute -bottom-1 -right-1"></div>
        <div className="bg-dark w-1 h-1 absolute bottom-0 -right-1"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-1"></div>
      </div>
      {children}
    </div>
  );
};
