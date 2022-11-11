import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const ServiceNav = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <div className="navbar__home">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </div>
      <ul className="navbar__sales">
        <Link className="navbar__link" to="/vehicles">
          All Vehicles
        </Link>
      </ul>
      
      {localStorage.getItem("bro_user") ? (
        <ul className="navbar__logout">
          <Link
            className="navbar__link"
            to=""
            onClick={() => {
              localStorage.removeItem("bro_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </ul>
      ) : (
        ""
      )}
    </ul>
  );
};
