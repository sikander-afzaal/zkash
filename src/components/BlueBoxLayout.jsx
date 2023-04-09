const BlueBoxLayout = ({ children }) => {
  return (
    <div className="flex h-full justify-start items-start flex-col gap-4 relative border-[3px] border-solid border-aspidBlue w-full pt-6 bg-dark">
      {/* //top left ------------- */}
      <div className="bg-dark w-2 h-1 absolute -top-1 -left-1"></div>
      <div className="bg-dark w-1 h-1 absolute top-0 -left-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-1 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 left-1"></div>
      {/* //bottom left ----------------------- */}
      <div className="bg-dark w-2 h-1 absolute -bottom-1 -left-1"></div>
      <div className="bg-dark w-1 h-1 absolute bottom-0 -left-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-1"></div>
      {/* //top right ----------------------- */}
      <div className="bg-dark w-2 h-1 absolute -top-1 -right-1"></div>
      <div className="bg-dark w-1 h-1 absolute top-0 -right-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-1 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-1"></div>
      {/* //bottom right ----------------------- */}
      <div className="bg-dark w-2 h-1 absolute -bottom-1 -right-1"></div>
      <div className="bg-dark w-1 h-1 absolute bottom-0 -right-1"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-0"></div>
      <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-1"></div>
      {/* //offset border ----------------------- */}
      <div className="w-full bg-dark absolute -bottom-3 -right-3 h-full border-solid border-[3px] border-aspidBlue -z-10">
        {/* //bottom left ----------------------- */}
        <div className="bg-dark w-2 h-1 absolute -bottom-1 -left-1"></div>
        <div className="bg-dark w-1 h-1 absolute bottom-0 -left-1"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 left-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 left-1"></div>
        {/* //top right ----------------------- */}
        <div className="bg-dark w-2 h-1 absolute -top-1 -right-1"></div>
        <div className="bg-dark w-1 h-1 absolute top-0 -right-1"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute top-1 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute top-0 right-1"></div>
        {/* //bottom right ----------------------- */}
        <div className="bg-dark w-2 h-1 absolute -bottom-1 -right-1"></div>
        <div className="bg-dark w-1 h-1 absolute bottom-0 -right-1"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-1 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-0"></div>
        <div className="bg-aspidBlue w-1 h-1 absolute bottom-0 right-1"></div>
      </div>
      {children}
    </div>
  );
};

export default BlueBoxLayout;
