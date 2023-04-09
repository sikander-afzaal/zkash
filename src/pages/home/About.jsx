import InfoBox from "../../components/InfoBox";
import AboutBox from "../../components/AboutBox";

const About = () => {
  return (
    <div className="wrapper md:bg-sectionBg bg-cover xl:bg-[100%__100%] mt-10 bg-center bg-no-repeat py-[50px] md:py-[150px]">
      <div className="contain flex-col justify-center items-center gap-10">
        <div className="w-full grid-cols-1 grid xl:grid-cols-2 gap-8 items-center">
          <p className="text-white text-sm sm:text-base md:text-[22px]">
            Picking the next bluechip project is never an easy task, let ZKASH
            Finance diversify your portfolio for you
          </p>
          <InfoBox
            para1="With $ZKASH you will accumulate good projects on multiple chains
        throughout the bear market, just by holding!"
            para2="You asked for ARBI season, we're here to ignite it. Be a part of the most exciting new community on the chain from the beginning!"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-fluid w-full gap-8 mt-8">
          <AboutBox
            img="/portfolio.png"
            title="Diversify your portfolio"
            desc="Our contract buys the best projects on Arbitrum. Trusting the wisdom of the crowd to decide which projects to chose through our governance system."
          />
          <AboutBox
            img="/upto-date.png"
            title="Stay up to date"
            desc="Our goal is to become the ultimate community hub on the arbitrum chain. We're an active community and regularly hold AMAs with teams and project updates."
          />
          <AboutBox
            img="/rewards.png"
            title="Rewards"
            desc="We all know this is why you're here! We dish out a constant stream of rewards by simply holding $ZKASH in your wallet. Passively build positions in a wide variety of projects."
          />
          <AboutBox
            img="/choice.png"
            title="Your Choice!"
            desc="Disagree with the coin we're farming? That's Ok we can't all be on the same page all of the time. Choose to take your rewards in $ZKASH instead by smashing the 'GO HAMI' button."
          />
          <AboutBox
            img="/exposure.png"
            title="Exposure"
            desc="We want to help other projects grow. We bring buy volume, market exposure, and additional wallets, something that can be potentially leveraged to benefit our community in the future."
          />
          <AboutBox
            img="/expansion.png"
            title="Expansion"
            desc="ZKash will start on zKSync with plans to go cross-chain and accumulate ERC-20 tokens from additional chains in the future. Details TBA however the OG $ZKASH token will remain the key to accessing future launches."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
