import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const LocationFilter = ({ handleSelectLocation }) => {
  const [vehicles, setVehicles] = useState([]);
  const [choiceId, setVehicleChoiceId] = useState(0)
  const [filterChoice, setFilterChoice] = useState([])
  const [location, setLocation] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8088/locations`)
      .then((res) => res.json())
      .then((locationArray) => setLocation(locationArray))
      }, [])
    

  useEffect(() => {
    if (choiceId === 0) {
      setFilterChoice(location)
    } else {
      const locationChoiceItems = location.filter(locationObj => locationObj.id === choiceId)
      setFilterChoice(locationChoiceItems)
      }
    }, [choiceId, location])



    return (
    <div className="location-select-container">
          <select
            className="filter-box"
            id="location-make-select"
            onChange={(event) => 
              handleSelectLocation(event.target.value)}
            >
            <option key={0} value="0">All Locations</option>
            {location.map((locationObj) => {
              return(
             <option key={locationObj.id} value={locationObj.id}>{locationObj.name}</option>
              )
            })}
          </select>
          </div>

    )}
