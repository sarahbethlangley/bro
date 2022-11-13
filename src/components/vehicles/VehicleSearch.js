import { Row, Col, Container } from "react-bootstrap";

export const VehicleSearch = ({ setterFunction }) => {
    return (
        <Container className="container--login">
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} align="center">
            <input
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            
            type="text" placeholder ="enter stock number" />
        </Col>
        <Col xs={2}></Col>
      </Row>
      </Container>
    )
}