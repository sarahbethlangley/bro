import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { VehicleForm } from "../vehicles/VehicleForm";
import { VehicleList } from "../vehicles/VehicleList"
import { VehicleEdit } from "../vehicles/VehicleEdit";
import { VehicleShow } from "../vehicles/VehicleShow";
import { VehicleContainer } from "../vehicles/VehicleContainer"
import { useEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap";


export const SalesView = () => {

    const localBroUser = localStorage.getItem("bro_user")
    const BroUserObject = JSON.parse(localBroUser)
    const [sales, setSales] = useState({})
    useEffect (
        ()=> {
            fetch(`http://localhost:8088/users?id=${BroUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const user=data[0]
                setSales(user)
            }) 
        }, [BroUserObject.id]
    ) 


  return (
    <Routes>
      <Route
        path="/"
      >
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/create" element={<VehicleForm />} />
        <Route path="/" element={ <VehicleContainer /> } />
        <Route path="/vehicles/edit" element={<VehicleEdit />} />
        <Route path="/vehicles/view" element={<VehicleShow />} />
      </Route>
    </Routes>
  );
};