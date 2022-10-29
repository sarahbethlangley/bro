import { useEffect, useState } from "react";
import { VehicleFilter } from "./components/vehicles/VehicleFilter"
import { VehicleForm } from "./components/vehicles/VehicleForm"
import { VehicleList } from "./components/vehicles/VehicleList"
import { useNavigate } from "react-router-dom"

import "./Bruh.css";

export const BroWheresThatCar = () => {
  const [vehicles, setVehicles] = useState([]);
  const [sales, setSales] = useState([]);
  const [choiceId, setVehicleChoiceId] = useState(0)
  const [filterChoice, setFilterChoice] = useState([])
  const [location, setLocation] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8088/vehicles`)
      .then((res) => res.json())
      .then((vehicleArray) => setVehicles(vehicleArray))

    fetch(`http://localhost:8088/sales`)
      .then((res) => res.json())
      .then((salesArray) => setSales(salesArray))

      fetch(`http://localhost:8088/locations`)
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
        
          <VehicleFilter setVehicleChoiceId={setVehicleChoiceId} vehicles={vehicles} />
          <VehicleList vehicles={vehicles} />
          <VehicleForm vehicles={vehicles} location={location} setLocation={setLocation} />

    </>
  );
};
