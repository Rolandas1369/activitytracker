import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <div className="bg-red-700 flex flex-wrap">
      <Link to="/login">
        <h1 className="">
          Login<span className="border-r-2 m-2"></span>
        </h1>
      </Link>
      <Link to="/homepage">
        <h1>
          Homepage<span className="border-r-2 m-2"></span>
        </h1>
      </Link>
      <Link to="/orders">
        <h1>
          Orders <span className="border-r-2 m-2"></span>
        </h1>
      </Link>
      <Link to="/workingtimes">
        <h1>
          Working Times<span className="border-r-2 m-2"></span>
        </h1>
      </Link>
      <Link to="/addorder">
        <h1>
          Add Order<span className="border-r-2 m-2"></span>
        </h1>
      </Link>
      <Link to="/addworkingtime">
        <h1>
          Add Working Time<span className="border-r-2 m-2"></span>
        </h1>
      </Link>
      <Link to="/workers">
        <h1>
          Workers<span className="border-r-2 m-2"></span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
