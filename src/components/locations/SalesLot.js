import { useEffect, useState } from "react"

export const SalesLot = () => {
    const [salesLot, setSalesLot] = useState([])

  
     useEffect(() => {

      fetch(`http://localhost:8088/vehicles?_expand=${vehicles.location.location}`)
      .then((res) => res.json())
      .then((locationArray) => setSalesLot(locationArray))
  }, [])
    

  return SalesLot()

}