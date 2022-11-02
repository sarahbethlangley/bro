import React from 'react'
import { useState, useEffect } from "react"


export const VehicleList = () => {
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
  




    return (
    <div className="vehicle-container">
    {vehicles?.map((vehicleObj) => {
      return(
      <div className="vehicle-card" key={vehicleObj.id}>
        <div className="vehicle-stockNumber">
          <p>Stock Number: {vehicleObj.stockNumber}  </p>
        </div>
        <div className="vehicle-make">
          <p>Make: {vehicleObj.make}</p>
          </div>
        <div className="vehicle-model">Model: {vehicleObj.model}</div>
        <div className="vehicle-location">
          Location: {vehicleObj.location}
        </div>
      </div>
      )
    })}
  </div>
  )
  }