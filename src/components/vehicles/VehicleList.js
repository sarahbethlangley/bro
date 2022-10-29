import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const VehicleList = ({ vehicles }) => {
    <div className="vehicle-container">
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
  }
  