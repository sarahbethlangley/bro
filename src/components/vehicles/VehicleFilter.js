import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const VehicleFilter = ({ setFilterChoice, choiceId, vehicles }) => {





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
