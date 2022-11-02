import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const VehicleFilter = () => {
  const [vehicles, setVehicles] = useState([]);
  const [choiceId, setVehicleChoiceId] = useState(0)
  const [filterChoice, setFilterChoice] = useState([])
  const [location, setLocation] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8088/vehicles`)
      .then((res) => res.json())
      .then((vehicleArray) => setVehicles(vehicleArray))

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
    <div className="vehicle-select-container">
          <select
            className="filter-box"
            id="vehicle-make-select"
            onChange={(event) => {
              setFilterChoice(parseInt(event.target.value))
            }}
            >
            <option key={0} value="0">All Makes</option>
            {vehicles.map((vehicleObj) => {
              return(
             <option key={vehicleObj.id} value={vehicleObj.id}>{vehicleObj.make}</option>
              )
            })}
          </select>
          </div>

    )}
