import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./contexts/UserContext";

const Header = () => {
  const { isLoggedIn, updateUserId } = useUser();
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    updateUserId(null);

    navigate("../", { replace: true });
  };

  return (
    <header className="main-header">
      {!isLoggedIn && (
        <Link to="/login" className="main-header__log-in-link">
          Sign in / Sign up
        </Link>
      )}

      {isLoggedIn && (
        <Link to="/" className="main-header__log-in-link" onClick={logout}>
          Log out
        </Link>
      )}
    </header>
  );
};

export default Header;