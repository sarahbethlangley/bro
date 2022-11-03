import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const VehicleShow = (evt) => {
  const [vehicle, setVehicle] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
  })

  const params = useParams()

  const getVehicleById = (evt) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    fetch(`http://localhost:8088/vehicles/${params}`, requestOptions)
      .then((response) => response.json())
      .then((vehicle) => setVehicle(vehicle))
  }
  useEffect(() => {
    getVehicleById()
  }, [])
};