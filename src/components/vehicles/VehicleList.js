import React from 'react'
import { Navigate, useNavigate, Link, useParams } from "react-router-dom"
import { LocationFilter } from '../vehicles/LocationFilter'
import { useState, useEffect } from "react"
import { VehicleShow } from "./VehicleShow"



export const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [location, setLocation] = useState([])
  const [locationId, setLocationId] = useState([])
  const [filterChoice, setFilterChoice] = useState([])
  const [userChoices, setUserChoices] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
  })

  const navigate = useNavigate()

  // const image = UploadAndDisplayImage()

  const getAllVehicles = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    fetch("http://localhost:8088/vehicles", requestOptions)
      .then((response) => response.json())
      .then((vehicleArray) => setVehicles(vehicleArray))
      .then(
        vehicles.map((vehicleObj) => {
          setLocationId(vehicleObj.locationId);
        })
      )
  }


const filterVehicles = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }
  fetch(
    `http://localhost:8088/vehicles?id=${userChoices.locationId}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((vehicleArray) => setVehicles(vehicleArray))
}



useEffect(() => {
  getAllVehicles()
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }
  fetch(`http://localhost:8088/locations/${locationId}`, requestOptions)
    .then((response) => response.json())
    .then((loco) => setLocation(loco.name))
}, [])

const handleDelete = (e) => {
  fetch(`http://localhost:8088/vehicles/${e.target.value}`, {
    method: "DELETE",
  }).then(() => {
    window.location.reload(false)
  });
};

const handleSelectLocation = (loco) => {
  const copy = { ...userChoices }
  copy.locationId = parseInt(loco.id)
  copy.locationName = loco.name
  setUserChoices(copy)
  filterVehicles()
}




  return (
    <div className="vehicle-container">
      <div>
        <LocationFilter handleSelectLocation={ handleSelectLocation } />
        {" "}
      </div>
    {vehicles?.map((vehicleObj) => {
      return(
      <div className="vehicle-card" key={vehicleObj.id}>
        <Link to={'/vehicles/${vehicleObj.locationId}'}>
        <div className="vehicle-stockNumber">
          <p>Stock Number: {vehicleObj.stockNumber}  </p>
        </div>
        <div className="vehicle-make">
          <p>Make: {vehicleObj.make}</p>
          </div>
        <div className="vehicle-model">Model: {vehicleObj.model}</div>
        <div className="vehicle-location">
          Location: {vehicleObj.locationName}
        </div>
        </Link>
        <div className="card-buttons">
                <button
                  onClick={(event) => {
                    navigate("/vehicles/edit");
                  }}
                >
                  Edit
                </button>
                <button
                  className="vehicle-delete"
                  value={vehicleObj.id}
                  onClick={(evt) => {
                    handleDelete(evt);
                  }}
                >
                  Delete
                </button>
              </div>
      </div>
      )
    })}
  </div>
  )
  }