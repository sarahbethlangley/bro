import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const localBroUser = localStorage.getItem("bro_user")
    const broUserObject = JSON.parse(localBroUser)

    return (
        <ul className="navbar">
            <div className="navbar__home">
               <Link className="navbar__link" to="/">Home</Link>
            </div>
            <li className="navbar__sales">
                <Link className="navbar__link" to="/vehicles">All Vehicles</Link>
            </li>
            <li className="navbar__vehicleform">
                <Link className="navbar__link" to="/vehicles/create">Vehicle Entry Form</Link>
            </li>
            {
                localStorage.getItem("bro_user")
                    ? <li className="navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("bro_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}