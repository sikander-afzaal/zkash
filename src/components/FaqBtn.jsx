import { useState } from "react";

const FaqBtn = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex  justify-start overflow-hidden items-start flex-col w-full">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="flex bg-[#08080C] justify-between items-center px-8 border border-solid border-aspidBlue h-[75px] w-full"
      >
        <h4 className="text-lg text-white">{question}</h4>
        <img
          src="/arrow.png"
          className={`w-[35px] object-contain transition-all duration-300 ${
            active ? "rotate-180" : "rotate-0"
          }`}
          alt=""
        />
      </button>
      <div
        className={`flex justify-start items-start px-3  flex-col duration-500 ${
          active ? "max-h-[6000px] py-5 " : "max-h-0 p-0"
        }`}
      >
        <p className="font-fifaks text-base text-white">{answer}</p>
      </div>
    </div>
  );
};

export default FaqBtn;
