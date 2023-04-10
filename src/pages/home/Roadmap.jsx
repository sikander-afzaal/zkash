const Roadmap = () => {
  return (
    <div className="wrapper mt-[100px] sm:mt-[180px]">
      <div className="contain flex-col gap-10 justify-center items-center">
        <h3 className="uppercase text-white sm:text-3xl text-2xlfont-normal">
          Roadmap
        </h3>
        <div className="grid items-center grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-20 sm:mt-5 w-full">
          <RoadmapBox
            title="ZKASH protocol"
            desc="First Lego built on top of ZKASH Protocol"
          />
          <img
            src="/roadmap.png"
            className="lg:block hidden max-w-[500px] w-full object-contain"
            alt=""
          />
          <RoadmapBox
            title="The Accountant NFTs"
            desc="The Accountant NFTs Collection launch"
          />
          <RoadmapBox
            title="MemeFi Development"
            desc="More rewards for holders independent of ZKASH trade volume"
            colSpan
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

const RoadmapBox = ({ title, desc, colSpan }) => {
  return (
    <div
      className={`${
        colSpan
          ? "col-auto lg:col-span-3 justify-self-center"
          : "col-auto lg:justify-self-auto justify-self-center"
      } flex justify-start max-w-[430px]  w-full items-start flex-col border border-solid border-primaryYellow relative bg-dark`}
    >
      <div className="border-solid border-primaryYellow border w-full h-full absolute -bottom-3 -right-3 bg-dark -z-10"></div>
      <h4 className="text-black w-full text-center h-[51px] grid place-items-center bg-primaryYellow text-base sm:text-lg">
        {title}
      </h4>
      <p className="text-white font-fifaks px-5 sm:px-[30px] py-6 sm:py-[40px]">
        {desc}
      </p>
    </div>
  );
};
