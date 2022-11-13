import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { VehicleList } from "../vehicles/VehicleList";
import { VehicleContainer } from "../vehicles/VehicleContainer"
import { VehicleShow } from "../vehicles/VehicleShow";
import { useEffect, useState } from "react";
import { VehicleEdit } from "../vehicles/VehicleEdit";
import { Row, Col, Container } from "react-bootstrap";

export const ServiceView = () => {
  const localBroUser = localStorage.getItem("bro_user");
  const BroUserObject = JSON.parse(localBroUser);
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8088/users?id=${BroUserObject.id}`)
      .then((response) => response.json())
      .then((data) => {
        const user = data[0];
        setService(user);
      });
  }, [BroUserObject.id]);

  return (
    <Routes>
      <Route
        path="/"
      >
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/view" element={<VehicleShow />} />
        <Route path="/vehicles/edit" element={<VehicleEdit />} />
        <Route path="/" element={ <VehicleContainer /> } />
      </Route>
    </Routes>
  );
};
