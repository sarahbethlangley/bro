import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LocationFilter } from "./LocationFilter";

export const VehicleEdit = (evt) => {
  const [vehicle, setVehicle] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
  });
  const [userChoices, setUserChoices] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
  });

  let navigate = useNavigate();

  const vehicleEditId = localStorage.getItem("editVehicleId");

  const handleSelectLocation = (loc) => {
    const copy = { ...userChoices };
    copy.locationId = parseInt(loc.id);
    copy.locationName = loc.name;
    setUserChoices(copy);
  };

  const getVehicleById = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:8088/vehicles/${vehicleEditId}`, requestOptions)
      .then((response) => response.json())
      .then((vehicle) => setVehicle(vehicle));
  };
  useEffect(() => {
    getVehicleById();
  }, []);

  const handleEditVehicle = (evt) => {
    evt.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userChoices),
    };
    fetch(`http://localhost:8088/vehicles/${vehicleEditId}`, requestOptions)
      .then((response) => response.json())
      .then(() => {
        navigate("/vehicles");
      });
  };

  return (
    <>
      <div className="vehicle-form-container">
        <form className="vehicle-form">
          <h2 className="vehicle-form-title">Edit Vehicle Entry Form</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="stockNumber">Stock Number : </label>
              <input
                required
                id="stockNumber"
                type="text"
                className="form-control"
                defaultValue={vehicle.stockNumber}
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
                defaultValue={vehicle.make}
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
                defaultValue={vehicle.model}
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
              <LocationFilter
                key={userChoices.locationId}
                id="locationId"
                defaultValue={vehicle.locationName}
                handleSelectLocation={handleSelectLocation}
              />
            </div>
          </fieldset>
        </form>
      </div>
      <button
        className="button"
        onClick={(event) => {
          handleEditVehicle(event);
        }}
      >
        Update Vehicle
      </button>
    </>
  );
};