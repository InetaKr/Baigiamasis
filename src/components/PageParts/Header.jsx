import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import UserInfo from "../User/UserInfo";
import companyLogo from "../../images/logo.png";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <header>
        <nav className="header-nav">
          <div className="logo">
            <Link to="/">
              <img src={companyLogo} alt="" />
            </Link>
            <p>Pawzly</p>
          </div>
          <div className="header-nav-wrapper">
            <div className="header-nav-left">
              <Link to="/" className="header-nav-link">
                Home
              </Link>
              <Link to="/forum" className="header-nav-link">
                Forum
              </Link>
              <Link to="/add" className="header-nav-link">
                Ask Question
              </Link>
            </div>
            {loggedInUser ? (
              <div className="header-nav-right">
                <UserInfo />
              </div>
            ) : (
              <div className="header-nav-right">
                <Link to="/signIn" className="header-nav-link">
                  Sign In
                </Link>
                <Link to="/signUp" className="header-nav-link">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <Outlet />
        </nav>
      </header>
    </>
  );
};

export default Header;
