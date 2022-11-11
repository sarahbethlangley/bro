import { SalesNav } from "./SalesNav"
import { ServiceNav } from "./ServiceNav"
import "./NavBar.css";

export const NavBar = () => {
  <></>
  const localBroUser = localStorage.getItem("bro_user");
  const broUserObject = JSON.parse(localBroUser);

  if (broUserObject.sales) {
    return <SalesNav />
  } else {
    return <ServiceNav />
  }

}