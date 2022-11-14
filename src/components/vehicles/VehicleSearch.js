import { Row, Col, Container } from "react-bootstrap";

export const VehicleSearch = ({ setterFunction }) => {
    return (
        <Container className="container-search">
        <Row>
          <Col xs={4}></Col>
          <Col xs={4} align="center">
            <input 
                className="search-bar"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            
            type="text" placeholder ="enter stock number" />
        </Col>
        <Col xs={4}></Col>
      </Row>
      </Container>
    )
}