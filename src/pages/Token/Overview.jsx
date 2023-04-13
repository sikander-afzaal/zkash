import { useState } from "react";

import BlueBoxLayout from "../../components/BlueBoxLayout";
import Chart from "../../components/Chart";

const Overview = () => {
  const [time, setTime] = useState(5);
  const [inputState, setInputState] = useState(1035);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-12 sm:gap-8 relative">
      <img
        src="/landing-hero.png"
        className="object-contain md:block hidden top-full -translate-y-[3%] xl:-translate-y-[14%] left-1/2 -translate-x-1/2 max-w-[650px] absolute z-30"
        alt=""
      />
      <BlueBoxLayout>
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
        <Chart />
        {/* <img
          src="/reward-graph.png"
          className="w-full h-[172px] object-cover mt-4"
          alt=""
        /> */}
      </BlueBoxLayout>
      <BlueBoxLayout>
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
      </BlueBoxLayout>
      <BlueBoxLayout>
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
      </BlueBoxLayout>
      <BlueBoxLayout>
        <h3 className="text-aspidBlue px-5 text-xl sm:text-2xl">Stats</h3>
        <div className="flex justify-start mt-1 items-center flex-col gap-4 px-5 w-full">
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Daily Volume</p>
            <p className="text-white text-sm">$120.6K</p>
          </div>
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Hourly Volume</p>
            <p className="text-white text-sm">$120.6K</p>
          </div>
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Daily Rewards Volume</p>
            <p className="text-white text-sm">$120.6K</p>
          </div>
          <div className="flex p-8 w-full bg-aspidBlue justify-start items-start flex-col gap-5 mt-10 mb-5">
            <p className="text-lg text-white">Your $ZKASH Balance</p>
            <div className="flex justify-between  items-center w-full gap-1">
              <p className="text-white font-fifaks">Daily Rewards</p>
              <p className="text-white text-sm">$8.4K</p>
            </div>
          </div>
        </div>
      </BlueBoxLayout>
      <BlueBoxLayout>
        <h3 className="text-aspidBlue px-5 text-xl sm:text-2xl">
          Rewards Queue
        </h3>
        <p className="text-lg font-fifaks px-5 text-white">
          Automatically distributes your rewards once first in line.
        </p>
        <p className="font-fifaks px-5 text-primaryYellow">
          Your wallet is not accuing rewards!
        </p>
        <div className="flex justify-start mt-1 mb-5 items-center flex-col gap-4 px-5 w-full">
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Pending Rewards</p>
            <p className="text-white text-sm">$120.6K</p>
          </div>
          <div className="flex justify-between  items-center w-full gap-1">
            <p className="text-white font-fifaks">Total Rewards</p>
            <p className="text-white text-sm">$120.6K</p>
          </div>
        </div>
      </BlueBoxLayout>
      <BlueBoxLayout>
        <h3 className="text-aspidBlue flex justify-start items-center gap-2 px-5 text-xl sm:text-2xl">
          APY{" "}
          <p className="text-[#08080C] text-sm bg-[#00FEC6] px-[10px] py-1">
            Beta
          </p>
        </h3>
        <h3 className="text-primaryYellow  px-5 text-xl sm:text-2xl">12%</h3>
        <div className="flex justify-between  items-center w-full gap-1 px-5">
          <p className="text-white font-fifaks">My ZKASH</p>
          <p className="text-white text-sm">$124.2 | day</p>
        </div>
        <div className="px-5 w-full mt-5">
          <div className="flex justify-start items-start w-full pt-5  flex-col gap-4 border-t-2 border-solid border-aspidBlue">
            <p className="text-white text-sm">Calculate Expected Returns</p>
            <div className="flex justify-between items-center p-4 bg-aspidBlue bg-opacity-50 w-full">
              <p className="text-white text-sm">
                <input
                  className="bg-transparent outline-none w-full"
                  type="text"
                  value={inputState}
                  onChange={(e) => setInputState(e.target.value)}
                  placeholder={0}
                />
              </p>
              <p className="text-white text-sm">ZKASH</p>
            </div>
          </div>
        </div>
        <p className="px-5 text-white text-lg font-fifaks mb-5 mt-10">
          * 7 day average APY Indication. Dependant on trade volume
        </p>
      </BlueBoxLayout>
    </div>
  );
};

export default Overview;
