import React from 'react'
import { VehicleFilter } from "./VehicleFilter"


export const VehicleList = ({ vehicles }) => {


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
          Location: {vehicleObj.location.location}
        </div>
      </div>
      )
    })}
  </div>
  )
  }