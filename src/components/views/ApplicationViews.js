import React from "react";
import { Route, Routes, Outlet } from "react-router-dom"
import { VehicleForm } from "../vehicles/VehicleForm"
import { VehicleList } from "../vehicles/VehicleList"
import { VehicleEdit } from "../vehicles/VehicleEdit"
import { VehicleShow } from "../vehicles/VehicleShow"

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Bro Where's That Car</h1>
            <div>Locating vehicles across the dealership and beyond</div>

            <Outlet />
          </>
        }
      >
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/create" element={<VehicleForm />} />
        <Route path="/vehicles/edit" element={<VehicleEdit />} />
        <Route path="/vehicles/:vehicleId" element={<VehicleShow />} />
      </Route>
    </Routes>
  )
}