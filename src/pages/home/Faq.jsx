import FaqBtn from "../../components/FaqBtn";

const Faq = () => {
  const DATA = [
    {
      question: "What is ZKASH Finance ($ZKASH)?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "What is the benefit of holding $ZKASH?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "How do I get my rewards?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "How are rewards generated?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "How do projects benefit from $ZKASH?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "Which tokens will be farmed?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "What chains do you plan on expanding?",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "Tokenomics",
      answer:
        "ZKASH Finance is a multi-currency and multi-chain reward token. By buying and holding $ZKASH you are farming rewards and accumulating tokens supported by the ZKASH Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
  ];
  return (
    <div
      id="faq"
      className="wrapper md:bg-sectionBg bg-cover xl:bg-[100%__100%] mt-10 sm:mt-20 bg-center bg-no-repeat py-[50px] md:py-[150px]"
    >
      <div className="contain flex-col justify-center items-center gap-10">
        <h3 className="text-white sm:text-3xl text-2xlfont-normal">FAQs</h3>
        <div className="flex w-full justify-start max-w-[1035px] items-start flex-col gap-5 mt-5">
          {DATA.map((elem, idx) => {
            return <FaqBtn {...elem} key={idx + elem.question} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
