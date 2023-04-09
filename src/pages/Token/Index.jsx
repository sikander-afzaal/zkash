import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../../components/Button";

const Token = () => {
  const { pathname } = useLocation();
  return (
    <div className="wrapper mt-[160px] xl:mt-[200px]">
      <div className="contain flex-col gap-10 justify-center items-center">
        <div className="flex sm:flex-row flex-col w-full justify-center items-center gap-7">
          <Link to={"/token"} className="w-full sm:w-auto">
            <Button
              widthFull
              inverse={pathname !== "/token"}
              padding={"w-full sm:w-[288px] h-[55px]"}
            >
              Overview
            </Button>
          </Link>
          <Link to="/token/personal" className="w-full sm:w-auto">
            <Button
              inverse={pathname !== "/token/personal"}
              widthFull
              padding={"w-full sm:w-[288px] h-[55px]"}
            >
              Personal
            </Button>
          </Link>
        </div>
        <div className="w-full mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Token;