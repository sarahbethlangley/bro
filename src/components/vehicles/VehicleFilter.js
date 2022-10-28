export const VehicleFilter = () => {
    <div className="vehicle-select-container">
          <select
            className="filter-box"
            id="vehicle-make-select"
            onChange={(event) => {
              setChoiceId(parseInt(event.target.value))
            }}
            >
            <option value="0">All Makes</option>
            {vehicles.map((vehicleObj) => {
              return(
             <option key={vehicleObj.id} value={vehicleObj.id}>{vehicleObj.make}</option>
              )
            })}
          </select>
          </div>
}