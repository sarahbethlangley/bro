import { useEffect, useState } from "react"

export const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]) 
  
    useEffect(() => {
  
      fetch(`http://localhost:8088/vehicles`) 
      .then(res => res.json())
      .then(vehicleArray => (
        setVehicles(vehicleArray)
      ))
  
  }, [])
  
  
  return (
    <div className="vehicle-container">
        {vehicles.map((vehicleObj) => {
            return (
                <div className="vehicle-card">
                    <div className="vehicle-stockNumber">{vehicleObj.stockNumber}</div>
                    <div className="vehicle-make">{vehicleObj.make}</div>
                    <div className="vehicle-model">{vehicleObj.model}</div>
                    <div className="vehicle-location">{vehicleObj.locationId}</div>
                    <div className="vehicle-UCI">{vehicleObj.UCI}</div>

                </div>
            )

        })}
    </div>
  )
  }
  