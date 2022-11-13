import React from "react"
import { useNavigate, Link } from "react-router-dom"
// import { LocationFilter } from "./LocationFilter"
import { useState, useEffect } from "react"
import { Row, Col, Container, Card } from "react-bootstrap";



export const VehicleList = ( {searchTermState}) => {
  const [vehicles, setVehicles] = useState([])
  const [locationId, setLocationId] = useState([])
  const [location, setLocation] = useState({})
  const [filteredProducts, setFiltered] = useState([])

  const localBroUser = localStorage.getItem("bro_user")
  const broUserObject = JSON.parse(localBroUser)

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue',
  
  }

  const [userChoices, setUserChoices] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
  })

  const navigate = useNavigate()


  useEffect(
    ()=>{
        const searchVehicles = vehicles.filter(vehicle => {
            return vehicle.stockNumber.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
        setFiltered(searchVehicles)
    }, [ searchTermState ]
)



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

  




  
  const handleDelete = (event) => {
    
    fetch(`http://localhost:8088/vehicles/${event.target.value}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload(false)
    })
  }



  return (
    <>
    <Container>
              <Row>
                <Col xs={2}></Col>
                <Col xs={8} align="center">
                  <h1 className="bro-title">Bro Where's That Car?</h1>
                  <div className="bro-subtitle">
                    <h2>Locating vehicles across the dealership and beyond</h2>
                  </div>
                </Col>
                <Col xs={2}></Col>
              </Row>
            </Container>
      <Container className="vehicle-container">
        <Row>
        {vehicles?.map((vehicleObj) => {
          return (
            
            <Col align="center">
            <Card style={{ width: '18rem' }}className="vehicle-card" key={vehicleObj.id}>
              <Link
                to={`/vehicles/view`}
                style={linkStyle}
                value={vehicleObj.id}
                onClick={(event) => {
                
                  localStorage.setItem("showVehicleId", vehicleObj.id)
               
                }}

                
              >
                <div className="vehicle-imageURL">
          <p><img src={vehicleObj.imageURL} alt="upload image URL" width="150" /></p>
        </div>
                <div className="vehicle-stockNumber">
                  <p>Stock Number: {vehicleObj.stockNumber} </p>
                </div>
                <div className="vehicle-make">
                  <p>Make: {vehicleObj.make}</p>
                </div>
                <div className="vehicle-model">
                  <p>Model: {vehicleObj.model}</p>
                  </div>

                <div className="vehicle-location">
                  <p>Location: {vehicleObj.locationName}</p>
                </div>
              </Link>
              <div className="card-buttons">

              {broUserObject.sales ? (
                <button
                  value={vehicleObj.id}
                  onClick={(event) => {
                    navigate("/vehicles/edit")
                    localStorage.setItem("editVehicleId", event.target.value)
                  }}
                >
                  Edit
                </button>
                 ) : (
                  <button
                  value={vehicleObj.id}
                  onClick={(event) => {
                    navigate("/vehicles/edit")
                    localStorage.setItem("editVehicleId", event.target.value)
                  }}
                >
                  Edit Location
                </button>
                )}

                {broUserObject.sales ? (
                <button
                  value={vehicleObj.id}
                  onClick={(event) => {
                    handleDelete(event)
                  }}
                >
                  Delete
                </button>
                ) : (
              ""
            )}
              </div>
            </Card>
            </Col>
          )

        })}
        </Row>
      </Container>
    </>
  )
}
