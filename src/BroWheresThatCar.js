import { useEffect, useState } from "react";
import "./Bruh.css";

export const BroWheresThatCar = () => {
  const [vehicles, setVehicles] = useState([]);
  const [sales, setSales] = useState([]);
  const [choiceId, setChoiceId] = useState(0)
  const [filterChoice, setFilterChoice] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8088/vehicles`)
      .then((res) => res.json())
      .then((vehicleArray) => setVehicles(vehicleArray))

    fetch(`http://localhost:8088/sales`)
      .then((res) => res.json())
      .then((salesArray) => setSales(salesArray))
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
      <div className="vehicle-container">
        

          <VehicleForm />

        
        {vehicles.map((vehicleObj) => {
          return(
          <div className="vehicle-card" key={vehicleObj.id}>
            <div className="vehicle-stockNumber">
              <p>Stock Number: {vehicleObj.stockNumber}</p>
            </div>
            <div className="vehicle-make">Make: {vehicleObj.make}</div>
            <div className="vehicle-model">Model: {vehicleObj.model}</div>
            <div className="vehicle-location">
              Location: {vehicleObj.locationId}
            </div>
            <div className="vehicle-UCI">
              Vehicle UCI Status: {vehicleObj.UCI}
            </div>
          </div>
          )
        })}
      </div>
    </>
  );
};
