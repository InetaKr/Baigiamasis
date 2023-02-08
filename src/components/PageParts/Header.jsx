import { Link, Outlet } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import UserInfo from '../User/UserInfo';

const Header = () => {
    const { loggedInUser } = useContext(UserContext);
  
    return (
      <>
        <nav>
          
          {loggedInUser ? (
            <div className="navBarWrapper">
              <div className='linkWrapper'>
              <div >
                <Link to="/">HOME </Link>
              </div>
              <div>
                <Link to="/forum">Forum</Link>
              </div>
              <div>
                <Link to="/ask">Ask Question</Link>
              </div>
              </div>
              <UserInfo />
            </div>
          ) : (
            
            <div className="loginRegister">
              <Link to="/signIn">Sign In</Link>
              <br />
             
              <Link to="/signUp">Sign Up</Link>
            
            </div>
            
          )}
        </nav>
        <Outlet />
      </>
    );
  }
   
  export default Header;