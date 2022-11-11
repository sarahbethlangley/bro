import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { VehicleList } from "../vehicles/VehicleList"
import { VehicleShow } from "../vehicles/VehicleShow";
import { useEffect, useState } from "react"
import { VehicleEdit } from "../vehicles/VehicleEdit";

export const ServiceView = () => {

    const localBroUser = localStorage.getItem("bro_user")
    const BroUserObject = JSON.parse(localBroUser)
    const [service, setService] = useState({})
    useEffect (
        ()=> {
            fetch(`http://localhost:8088/users?id=${BroUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const user=data[0]
                setService(user)
            }) 
        }, [BroUserObject.id]
    ) 



  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1 className= "bro-title">Bro Where's That Car</h1>
            <div className= "bro-subtitle">Locating vehicles across the dealership and beyond</div>

            <Outlet />
          </>
        }
      >
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/view" element={<VehicleShow />} />
        <Route path="/vehicles/edit" element={<VehicleEdit />} />
      </Route>
    </Routes>
  );
};