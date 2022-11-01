import { useEffect, useState } from "react";
import { VehicleFilter } from "./components/vehicles/VehicleFilter"
import { VehicleForm } from "./components/vehicles/VehicleForm"
import { SalesForm } from "./components/forms/SalesForm"
import { VehicleList } from "./components/vehicles/VehicleList"
import { SalesNav } from "./components/nav/SalesNav"
import { ApplicationViews } from './components/views/ApplicationView'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { UploadAndDisplayImage } from "./components/vehicles/VehicleImage"


import "./components/nav/NavBar.css"
import "./components/vehicles/Vehicles.css"
import "./Bruh.css"

export const BroWheresThatCar = () => {
  const [vehicles, setVehicles] = useState([]);
  const [choiceId, setVehicleChoiceId] = useState(0)
  const [filterChoice, setFilterChoice] = useState([])
  const [location, setLocation] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8088/vehicles`)
      .then((res) => res.json())
      .then((vehicleArray) => setVehicles(vehicleArray))

      fetch(`http://localhost:8088/vehicles?_expand=location`)
      .then((res) => res.json())
      .then((locationArray) => setLocation(locationArray))
  }, [])

  useEffect(() => {
    if (choiceId === 0) {
      setFilterChoice(vehicles)
    } else {
      const vehicleChoiceItems = vehicles.filter(vehicleObj => vehicleObj.make === choiceId)
      setFilterChoice(vehicleChoiceItems)
      }
    }, [choiceId, vehicles])


  return (
    <>
          <SalesNav />
          <ApplicationViews />
          <VehicleFilter setFilterChoice={setFilterChoice} choiceId={choiceId} vehicles={vehicles} />
          <VehicleList vehicles={vehicles} />
          <UploadAndDisplayImage />
          <SalesForm vehicles={vehicles} location={location} setVehicles={setVehicles} />

    </>
  );
};
