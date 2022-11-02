import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const VehicleForm = () => {
  const [vehicles, setVehicles] = useState([]);
  const [location, setLocation] = useState([])
  const [userChoices, setUserChoices] = useState({
    stockNumber: "", 
    make: "", 
    model: "", 
    locationId: 0
  })


  const handleSaveVehicle = (evt) => {
    evt.preventDefault()

    if (
      userChoices.stockNumber 
    )
      
      fetch(`http://localhost:8088/vehicles`, {
        method: "POST",
        headers: {
          'Content-Type': 'application.json'
        },
        body: JSON.stringify(userChoices)
      }).then(() => {
        fetch(`http://localhost:8088/vehicles`)
          .then((res) => res.json())
          .then(vehicleArray => {
            setVehicles(vehicleArray)
            setUserChoices({
              
                stockNumber: "", 
                make: "", 
                model: "", 
                locationId: 0
              
            })
          })
      })
    
  } 

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
                  const copy = {...userChoices}
                  copy.stockNumber = event.target.value
                  setUserChoices(copy)

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
                  const copy = {...userChoices}
                  copy.make = event.target.value
                  setUserChoices(copy)

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
                  const copy = {...userChoices}
                  copy.model = event.target.value
                  setUserChoices(copy)

                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <div>Location: </div>
              <select
                className="filter-box"
                id="vehicle-location-select"
                value={userChoices.location}
                onChange={(event) => {
                  setUserChoices(event.target.value);
                }}
              >
                <option value="0">Location</option>
                {location.map((locationObj) => {
                  return (
                    <option key={locationObj.id} value={locationObj.id}>
                      {locationObj.location}
                    </option>
                  );
                })}
              </select>
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
                placeholder="Leave Blank If On Lot"
                value=""
                onChange={(event) => {
                  const copy = {...userChoices}
                  copy.make = event.target.value
                  setUserChoices(copy)

                }}
                
              />
            </div>
          </fieldset>
        </form>
      </div>
      <button className="button" onClick={(event) => {handleSaveVehicle(event)}}>Add Vehicle</button>
    </>
  );
};

