
import { Link } from "react-router-dom";
import SideLogo from "./SideLogo";

const Logo = () => {
  return (
    <Link style={{textDecoration: 'none'}} to="/">
      <SideLogo />
    </Link>
  );
};

export default Logo;
