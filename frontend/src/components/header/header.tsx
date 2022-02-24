import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <div className="bg-red-700">
      <Link to="/login">
        <h1>Login</h1>
      </Link>
      <Link to="/homepage">
        <h1>Homepage</h1>
      </Link>
      <Link to="/orders">
        <h1>Orders</h1>
      </Link>
      <Link to="/workingtimes">
        <h1>Working Times</h1>
      </Link>
    </div>
  );
};

export default Header;
