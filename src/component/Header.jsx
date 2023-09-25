import { Link } from "react-router-dom"
import{FaSignInAlt , FaUser} from "react-icons/fa"
import Logo from "./logo.jpeg"
const Header = () => {
  return (
    <Header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="missing logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/Register">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </Header>
  );
}

export default Header