import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="wrapper mt-[160px] xl:mt-[200px]">
      <div className="contain flex-col text-center justify-center items-center gap-10">
        <h2 className="max-w-[1368px] leading-[1.25] text-white text-lg sm:text-2xl  font-normal">
          Build a diverse portfolio with $ZKASH. zKSync Era's first
          <span className="text-primaryYellow"> multi-currency</span> rewards
          token.
        </h2>
        <div className="flex sm:flex-row flex-col w-full justify-center items-center gap-7">
          <Button
            widthFull
            padding={"sm:w-auto h-[55px] w-full px-6 py-[14px]"}
          >
            Buy on zKSync
          </Button>
          <Button inverse widthFull padding={"w-full sm:w-[288px] h-[55px]"}>
            Litepaper
          </Button>
        </div>
        <img
          src="/landing-hero.png"
          className="max-w-[700px] w-full mt-3 object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
