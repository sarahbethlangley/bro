import React from "react"
import { useNavigate, Link } from "react-router-dom"
// import { LocationFilter } from "./LocationFilter"
import { useState, useEffect } from "react"


export const VehicleList = () => {
  const [vehicles, setVehicles] = useState([])
  const [locationId, setLocationId] = useState([])
  const [location, setLocation] = useState({})
  const [userChoices, setUserChoices] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
  })
  const navigate = useNavigate()

  // simple post request with JSON body using fetch https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
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
          setLocationId(vehicleObj.locationId)
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

  // passing an empty array causes the hook to only be run once when the components first loads
  useEffect(() => {
    getAllVehicles()
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    fetch(`http://localhost:8088/locations/${locationId}`, requestOptions)
      .then((response) => response.json())
      .then((loc) => setLocation(loc.name))
  }, [])

  // if you name your functions after what they actually do or are supposed to do, then it's easier to keep up with what the function is supposed to do.  naming conventions are important
  




  
  // getting it by th event.target.value, it's passing the value of the idea, using the delete method, reloads the page to to get a refresh of the data
  const handleDelete = (event) => {
    fetch(`http://localhost:8088/vehicles/${event.target.value}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload(false)
    })
  }

  // const handleSelectLocation = (loc) => {
  //   const copy = { ...userChoices }
  //   copy.locationId = parseInt(loc.id)
  //   copy.locationName = loc.name
  //   setUserChoices(copy)
  //   filterVehicles()
  // }

  return (
    <>
      <div className="vehicle-container">
        {/* <div>
          <LocationFilter handleSelectLocation={handleSelectLocation} />
        </div> */}
        {vehicles?.map((vehicleObj) => {
          return (
            <div className="vehicle-card" key={vehicleObj.id}>
              <Link
                to={`/vehicles/view`}
                value={vehicleObj.id}
                onClick={(event) => {
                
                  localStorage.setItem("showVehicleId", vehicleObj.id)
               
                }}
              >
                <div className="vehicle-stockNumber">
                  <p>Stock Number: {vehicleObj.stockNumber} </p>
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
                  value={vehicleObj.id}
                  onClick={(event) => {
                    navigate("/vehicles/edit")
                    localStorage.setItem("editVehicleId", event.target.value)
                  }}
                >
                  Edit
                </button>
                <button
                  className="vehicle-delete"
                  value={vehicleObj.id}
                  onClick={(event) => {
                    handleDelete(event)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
