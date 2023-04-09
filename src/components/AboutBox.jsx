const AboutBox = ({ img, title, desc }) => {
  return (
    <div className="flex justify-start items-start flex-col gap-5 w-full border border-primaryYellow border-solid">
      <img src={img} className="w-full object-cover h-[250px]" alt="" />
      <div className="flex justify-start items-center mt-2 flex-col text-center gap-3 w-full px-7 pb-7">
        <h3 className="text-aspidBlue font-normal">{title}</h3>
        <p className="text-white text-base font-fifaks">{desc}</p>
      </div>
    </div>
  );
};

export default AboutBox;
