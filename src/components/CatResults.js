import React from "react";
import CatCard from "./CatCard";
import { CatData } from "../CatData";
import { Container, Row, Col } from "react-bootstrap";

function CatResults() {
  return (
    <Container>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4">
        {CatData.map((cat) => (
          <Col className="gap-5">
            <CatCard cat={cat} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CatResults;
