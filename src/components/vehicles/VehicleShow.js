import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const VehicleShow = (evt) => {
  const [vehicle, setVehicle] = useState([]);

  const getVehicleById = (evt) => {
    let vehicleId = parseInt(localStorage.getItem("showVehicleId"));
    console.log(vehicleId);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:8088/vehicles/${vehicleId}`, requestOptions)
      .then((response) => response.json())
      .then((vehicle) => setVehicle(vehicle));
  };
  useEffect(() => {
    getVehicleById();
  }, []);

  return (
    <>
      <div className="vehicle-show-container">
        <div className="vehicle-card" key={vehicle.id}>
          <div className="vehicle-stockNumber">
            <p>Stock Number: {vehicle.stockNumber} </p>
          </div>
          <div className="vehicle-make">
            <p>Make: {vehicle.make}</p>
          </div>
          <div className="vehicle-model">Model: {vehicle.model}</div>

          <div className="vehicle-location">
            Location: {vehicle.locationName}
          </div>
        </div>
      </div>
    </>
  );
};