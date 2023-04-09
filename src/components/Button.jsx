const Button = ({ children, padding, inverse, widthFull }) => {
  return inverse ? (
    <div className={`isolate ${widthFull ? "sm:w-auto w-full" : "w-auto"}`}>
      <button
        className={`text-white hover:text-black hover:bg-primaryYellow transition-all duration-300 border-[3px] border-solid border-primaryYellow bg-transparent relative ${padding}  text-base`}
      >
        <span className="bg-dark w-1 aspect-square absolute bottom-full right-full"></span>
        <span className="bg-dark w-1 aspect-square absolute top-full right-full"></span>
        <span className="bg-dark w-1 aspect-square absolute top-full left-full"></span>
        <span className="bg-dark w-1 aspect-square absolute bottom-full left-full"></span>
        <span className="bg-primaryYellow w-1 aspect-square absolute top-0 left-0"></span>
        <span className="bg-primaryYellow w-1 aspect-square absolute bottom-0 left-0"></span>
        <span className="bg-primaryYellow w-1 aspect-square absolute bottom-0 right-0"></span>
        <span className="bg-primaryYellow w-1 aspect-square absolute top-0 right-0"></span>
        {children}
      </button>
    </div>
  ) : (
    <div className={`isolate ${widthFull ? "sm:w-auto w-full" : "w-auto"}`}>
      <button
        className={`text-black bg-primaryYellow relative ${padding}  text-base`}
      >
        <span className="bg-secondaryBlack w-1 aspect-square absolute top-0 left-0"></span>
        <span className="bg-secondaryBlack w-1 aspect-square absolute bottom-0 left-0"></span>
        <span className="bg-lightBlue w-1 aspect-square absolute bottom-0 right-0"></span>
        <span className="bg-secondaryBlack w-1 aspect-square absolute top-0 right-0"></span>
        {children}
        <div className="w-full h-full -right-1 -bottom-1 bg-lightBlue absolute -z-10">
          <span className="bg-secondaryBlack w-1 aspect-square absolute bottom-0 right-0"></span>
        </div>
      </button>
    </div>
  );
};

export default Button;
