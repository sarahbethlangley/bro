import { useState } from "react"
import { FoundVehicles } from "./FoundVehicles"
import { VehicleSearch } from "./VehicleSearch"
import { Row, Col, Container } from "react-bootstrap";



export const VehicleContainer =() => {

    const [searchTerms, setSearchTerms] = useState("")

    return <>
      <Container>
              <Row>
                <Col xs={2}></Col>
                <Col xs={8} align="center">
                  <h1 className="bro-title">Bro Where's That Car?</h1>
                  <div className="bro-subtitle">
                  <h2>Locating vehicles across the dealership and beyond</h2>
                  </div>
                </Col>
                <Col xs={2}></Col>
              </Row>
            </Container>
    
        <VehicleSearch setterFunction={setSearchTerms}/>
		<FoundVehicles searchTermState={searchTerms}/> 
    </>
}