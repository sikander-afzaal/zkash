import { useEffect, useRef, useState } from "react";

const FaqBtn = ({ question, answer }) => {
  const answerRef = useRef();
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("");
  useEffect(() => {
    setHeight(answerRef.current.getBoundingClientRect().height);
  }, [window.innerWidth]);
  return (
    <div className="flex  justify-start overflow-hidden items-start flex-col w-full">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="flex bg-[#08080C] text-left gap-4 justify-between items-center px-8 border border-solid border-aspidBlue min-h-[75px] w-full"
      >
        <h4 className="text-xs sm:text-sm lg:text-lg text-white">{question}</h4>
        <img
          src="/arrow.png"
          className={`w-6 lg:w-[35px] object-contain transition-all duration-300 ${
            active ? "rotate-180" : "rotate-0"
          }`}
          alt=""
        />
      </button>
      <div
        style={{ height: active ? `${height}px` : "0px" }}
        className={`flex justify-start items-start px-3  flex-col duration-500 ${
          active ? " py-5 " : " p-0"
        }`}
      >
        <p ref={answerRef} className="font-fifaks text-base text-white">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqBtn;
