import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import { VehicleForm } from '../vehicles/VehicleForm'
import { VehicleList } from '../vehicles/VehicleList'
import { VehicleEdit } from '../vehicles/VehicleEdit'





export const ApplicationViews = () => {

return (
    <Routes>
        <Route path="/" element ={
            <>
            <h1>Bro Where's That Car</h1>
            <div>Locating vehicles across the dealership and beyond</div>

            <Outlet />
            </>

        }>
            <Route path="vehicles" element={ <VehicleList /> } />
            <Route path="vehicleform" element={ <VehicleForm /> } />
        </Route>
        
    </Routes>
)
}