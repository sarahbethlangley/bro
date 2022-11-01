import React from 'react'
import { SalesView } from './SalesView'
import { ServiceView } from './ServiceView'





export const ApplicationViews = () => {


    const localBroUser = localStorage.getItem("bro_user")
    const broUserObject = JSON.parse(localBroUser)
    
    if (broUserObject.isSales) {
    
        return <SalesView />
    
    }
    else {
    
        return <ServiceView />
    
    }
}