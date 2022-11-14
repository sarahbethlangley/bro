import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationFilter } from "./LocationFilter";
import { Row, Col, Container } from "react-bootstrap";

export const VehicleForm = () => {
  const [vehicles, setVehicles] = useState([]);
  const [userChoices, setUserChoices] = useState({
    stockNumber: "",
    make: "",
    model: "",
    locationName: "",
    locationId: 0,
    imageURL: "",
    description: ""
  });

  const navigate = useNavigate();
  const handleSelectLocation = (loc) => {
    const copy = { ...userChoices };
    copy.locationId = parseInt(loc.id);
    copy.locationName = loc.name;
    setUserChoices(copy);
  };

  const handleSaveVehicle = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userChoices),
    };
    fetch("http://localhost:8088/vehicles", requestOptions)
      .then((response) => response.json())
      .then((data) => setVehicles(data.id))
      .then(() => {
        navigate("/vehicles");
      });
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
      <Container className="vehicle-form-container" autocomplete="off">
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} align="center">
            <form className="vehicle-form">
              <h3 className="vehicle-form-title">Vehicle Entry Form</h3>
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
                  <label htmlFor="imageURL">Image URL </label>
                  <input
                    className="form-control"
                    id="imageURL"
                    type="text"
                    name="imageURL"
                    placeholder="Image URL"
                    value={userChoices.imageURL}
                    onChange={(event) => {
                      const copy = { ...userChoices };
                      copy.imageURL = event.target.value;
                      setUserChoices(copy);
                    }}
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="make">Location : </label>
                  <LocationFilter
                    id="locationId"
                    handleSelectLocation={handleSelectLocation}
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="description">Location Information </label>
                  <input
                    className="form-control"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Bro Where's That Car?"
                    value={userChoices.description}
                    onChange={(event) => {
                      const copy = { ...userChoices };
                      copy.description = event.target.value;
                      setUserChoices(copy);
                    }}
                  />
                </div>
              </fieldset>
            </form>
            <button
              className="button"
              onClick={(event) => {
                handleSaveVehicle(event);
              }}
            >
              Add Vehicle
            </button>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};
