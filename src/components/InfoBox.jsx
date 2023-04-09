const InfoBox = ({ para1, para2, type2 }) => {
  return (
    <div
      className={`flex justify-center flex-col  gap-0 ${
        type2 ? "px-3 sm:px-8" : "px-8"
      } items-center w-full py-6 bg-secondaryBlack relative `}
    >
      <div className="bg-white w-[3px] h-[calc(100%_-_12px)] absolute left-0 top-1/2 -translate-y-1/2"></div>
      <div className="bg-white w-[3px] h-[calc(100%_-_12px)] absolute right-0 top-1/2 -translate-y-1/2"></div>
      <div className="w-full top-0 rotate-180 absolute opacity-[0.73] bg-[#08080C] mix-blend-screen h-[15%] left-0 pointer-events-none"></div>
      <div className="w-full bottom-0 rotate-180 absolute opacity-[0.73] bg-[#08080C] mix-blend-screen h-[15%] left-0 pointer-events-none"></div>
      <div className="w-[3px] aspect-square bg-white absolute bottom-[3px] left-[3px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute bottom-[0px] left-[6px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute bottom-[0px] left-[9px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute top-[3px] left-[3px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute top-[0px] left-[6px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute top-[0px] left-[9px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute top-[3px] right-[3px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute top-[0px] right-[6px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute top-[0px] right-[9px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute bottom-[3px] right-[3px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute bottom-[0px] right-[6px]"></div>
      <div className="w-[3px] aspect-square bg-white absolute bottom-[0px] right-[9px]"></div>
      {type2 ? (
        <>
          <p className="text-white text-sm sm:text-xl text-center 2xl:text-2xl mb-2">
            {para1}
          </p>
          <p className="text-white text-xs sm:text-sm 2xl:text-base text-center">
            {para2}
          </p>
        </>
      ) : (
        <>
          <p className="text-white text-base font-fifaks">{para1}</p>
          <p className="text-white text-base font-fifaks">{para2}</p>
        </>
      )}
    </div>
  );
};

export default InfoBox;
