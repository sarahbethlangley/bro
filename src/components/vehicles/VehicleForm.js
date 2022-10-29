import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const VehicleForm = ({ vehicles, location, setLocation }) => {
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
                placeholder="Model"
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <div>Location: </div>
              <select
                className="filter-box"
                id="vehicle-location-select"
                onChange={(event) => {
                  setLocation(parseInt(event.target.value));
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
        </form>
      </div>
      <button className="button">Submit</button>
    </>
  );
};
