// import "./Products.css"
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

export const FoundVehicles = ({ searchTermState }) => {
  const [filteredVehicles, setFiltered] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const searchedVehicles = vehicles.filter((vehicle) => {
      if (
        vehicle.stockNumber
          .toLowerCase()
          .startsWith(searchTermState.toLowerCase()) &&
        searchTermState.replace(" ", "") !== ""
      ) {
        return true;
      }
    });
    setFiltered(searchedVehicles);
  }, [searchTermState]);

  useEffect(() => {
    fetch("http://localhost:8088/vehicles")
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data);
      });
  }, []);

  return (
    <>
      <Container className="search-items-container">
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} align="center">
            <h4>This vehicle is located in:</h4>

            <article className="returned-vehicles">
              {filteredVehicles.map((vehicle) => {
                return (
                  <section key={vehicle.id} className="product-item">
                    <div> {vehicle.locationName} </div>
                  </section>
                );
              })}
            </article>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};
