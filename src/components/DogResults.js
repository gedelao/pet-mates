import { Container, Row, Col } from "react-bootstrap";
import { dogData } from "../DogData";
import DogCard from "./DogCard";

function DogResults() {
  return (
    <Container>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4">
        {dogData.map((dog) => (
          <Col className="gap-5">
            <DogCard dog={dog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DogResults;
