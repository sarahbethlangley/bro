import React from "react";
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
import { LocationFilter } from "./LocationFilter";
import { useState, useEffect } from "react";
import { VehicleShow } from "./VehicleShow";

export const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [locationId, setLocationId] = useState([]);
  const [location, setLocation] = useState({});
  const [userChoices, setUserChoices] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
  });
  const navigate = useNavigate();

  const getAllVehicles = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:8088/vehicles", requestOptions)
      .then((response) => response.json())
      .then((vehicleArray) => setVehicles(vehicleArray))
      .then(
        vehicles.map((vehicleObj) => {
          setLocationId(vehicleObj.locationId);
        })
      );
  };

  const filterVehicles = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `http://localhost:8088/vehicles?id=${userChoices.locationId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((vehicleArray) => setVehicles(vehicleArray));
  };

  useEffect(() => {
    getAllVehicles();
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:8088/locations/${locationId}`, requestOptions)
      .then((response) => response.json())
      .then((loc) => setLocation(loc.name));
  }, []);

  const handleDelete = (e) => {
    fetch(`http://localhost:8088/vehicles/${e.target.value}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload(false);
    });
  };

  const handleSelectLocation = (loc) => {
    const copy = { ...userChoices };
    copy.locationId = parseInt(loc.id);
    copy.locationName = loc.name;
    setUserChoices(copy);
    filterVehicles();
  };

  return (
    <>
      <div className="vehicle-container">

        {/* <div>
          <LocationFilter handleSelectLocation={handleSelectLocation} />{" "}
        </div> */}
        {vehicles?.map((vehicleObj) => {
          return (
            <div className="vehicle-card" key={vehicleObj.id}>
              <Link
                to={`/vehicles/view`}
                value={vehicleObj.id}
                onClick={(event) => {
                  // event.preventDefault();
                  localStorage.setItem("showVehicleId", vehicleObj.id);
                  // console.log(parseInt(localStorage.getItem("showVehicleId")));
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
                    navigate("/vehicles/edit");
                    localStorage.setItem("editVehicleId", event.target.value);
                  }}
                >
                  Edit
                </button>
                <button
                  className="vehicle-delete"
                  value={vehicleObj.id}
                  onClick={(e) => {
                    handleDelete(e);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};