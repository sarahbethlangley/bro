import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LocationFilter } from "./LocationFilter";
import { Row, Col, Container } from "react-bootstrap";

export const VehicleEdit = (evt) => {
  const [vehicle, setVehicle] = useState({
    stockNumber: "",
    make: "",
    model: "",
    imageURL: "",
    locationName: "",
    locationId: 0,
    description: "",
  });

  const localBroUser = localStorage.getItem("bro_user");
  const broUserObject = JSON.parse(localBroUser);

  const navigate = useNavigate();

  const vehicleEditId = localStorage.getItem("editVehicleId");

  const handleSelectLocation = (loc) => {
    const copy = { ...vehicle };
    copy.locationId = parseInt(loc.id);
    copy.locationName = loc.name;
    setVehicle(copy);
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
      body: JSON.stringify(vehicle),
    };
    fetch(`http://localhost:8088/vehicles/${vehicleEditId}`, requestOptions)
      .then((response) => response.json())
      .then(() => {
        navigate("/vehicles");
      });
  };
  const handleUserInput = (event) => {
    const copy = { ...vehicle };
    copy[event.target.name] = event.target.value;
    setVehicle(copy);
  };

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
      <Container className="vehicle-form-container">
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} align="center">
            <form className="vehicle-form">
              <h2 className="vehicle-form-title">Edit Vehicle Entry Form</h2>

              <fieldset>
                {broUserObject.sales ? (
                  <div className="form-group">
                    <label htmlFor="stockNumber">Stock Number : </label>
                    <input
                      className="form-control"
                      invalid={vehicle}
                      id="stockNumber"
                      type="text"
                      name="stockNumber"
                      value={vehicle.stockNumber}
                      onChange={handleUserInput}
                    />
                  </div>
                ) : (
                  ""
                )}
              </fieldset>
              <fieldset>
                {broUserObject.sales ? (
                  <div className="form-group">
                    <label htmlFor="make">Make : </label>
                    <input
                      className="form-control"
                      id="make"
                      type="text"
                      name="make"
                      value={vehicle.make}
                      onChange={handleUserInput}
                    />
                  </div>
                ) : (
                  ""
                )}
              </fieldset>
              <fieldset>
                {broUserObject.sales ? (
                  <div className="form-group">
                    <label htmlFor="model">Model : </label>
                    <input
                      className="form-control"
                      id="model"
                      type="text"
                      name="model"
                      value={vehicle.model}
                      onChange={handleUserInput}
                    />
                  </div>
                ) : (
                  ""
                )}
              </fieldset>
              <fieldset>
                {broUserObject.sales ? (
                  <div className="form-group">
                    <label htmlFor="imageURL">Image URL : </label>
                    <input
                      className="form-control"
                      id="imageURL"
                      type="text"
                      name="imageURL"
                      placeholder="Image URL"
                      value={vehicle.imageURL}
                      onChange={handleUserInput}
                    />
                  </div>
                ) : (
                  ""
                )}
              </fieldset>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="locationName">Location : </label>
                  <LocationFilter
                    className="form-control"
                    key={vehicle.locationName}
                    id="locationId"
                    name="locationName"
                    value={vehicle.locationName}
                    handleSelectLocation={handleSelectLocation}
                    onChange={handleUserInput}
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="description">Location Information : </label>
                  <input
                    className="form-control"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Bro Where's That Car?"
                    value={vehicle.description}
                    onChange={handleUserInput}
                  />
                </div>
              </fieldset>
            </form>
            <button
              className="button"
              onClick={(event) => {
                handleEditVehicle(event);
              }}
            >
              Update Vehicle
            </button>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};
