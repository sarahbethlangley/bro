import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationFilter } from "./LocationFilter"


export const VehicleForm = () => {
  const [vehicles, setVehicles] = useState([]);
  const [location, setLocation] = useState([])
  const [userChoices, setUserChoices] = useState({
    stockNumber: "", 
    make: "", 
    model: "", 
    locationId: 0
  })



  let navigate = useNavigate();

  const handleSelectLocation = (loc) => {
    setLocation(loc)
    const copy = {...userChoices }
    copy.locationId = parseInt(loc)
    setUserChoices(copy)
  }

  const handleSaveVehicle = (evt) => {
    evt.preventDefault()
  
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userChoices),
  }

 fetch("http://localhost:8088/vehicles", requestOptions)
      .then((response) => response.json())
      .then((data) => setVehicles(data.id))
      .then(() => {
         navigate("/vehicles")
 })
}

 // const handleEditVehicle = (evt) => {
//   evt.preventDefault()
// const requestOptions = {
//   method: "PUT",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(userChoices),
// }

// fetch("http://localhost:8088/vehicles", requestOptions)
//   .then((res) => res.JSON())
//   .then((data) => setVehicles(data.id))
//   .then(() => {
//     navigate("/vehicles")
//   })
// }


 return (
  <>
    <div className="vehicle-form-container">
      <form className="vehicle-form">
        <h2 className="vehicle-form-title">Vehicle Entry Form</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="stockNumber">Stock Number : </label>
            <input
              required
              id="stockNumber"
              type="text"
              className="form-control"
              placeholder="Stock Number"
              value={userChoices.stockNumber}
              onChange={(event) => {
                const copy = { ...userChoices };
                copy.stockNumber = event.target.value;
                setUserChoices(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="make">Make : </label>
            <input
              required
              id="make"
              type="text"
              className="form-control"
              placeholder="Make"
              value={userChoices.make}
              onChange={(event) => {
                const copy = { ...userChoices };
                copy.make = event.target.value;
                setUserChoices(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="model">Model : </label>
            <input
              required
              id="model"
              type="text"
              className="form-control"
              value={userChoices.model}
              placeholder="Model"
              onChange={(event) => {
                const copy = { ...userChoices };
                copy.model = event.target.value;
                setUserChoices(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="make">Locations : </label>
            <LocationFilter id="locationId" handleSelectLocation={handleSelectLocation} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="address">Third Party Location Address : </label>
            <input
              required
              id="address"
              type="text"
              className="form-control"
              placeholder="Leave blank if on lot"
              value=""
              onChange={(event) => {
                const copy = { ...userChoices };
                copy.make = event.target.value;
                setUserChoices(copy);
              }}
            />
          </div>
        </fieldset>
      </form>
    </div>
    <button
      className="button"
      onClick={(event) => {
        handleSaveVehicle(event)
      }}
    >
      Add Vehicle
    </button>
  </>
)

}








