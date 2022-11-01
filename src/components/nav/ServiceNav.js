import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const ServiceNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/sales">Sales Lot</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/service">Service Lot</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/offlot">Off Lot</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/serviceform">Used Car Inspection Form</Link>
            </li>
            {
                localStorage.getItem("bro_user")
                    ? <li className="navbar__item navbar__logout">
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