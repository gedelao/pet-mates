import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CatCard from "../components/CatCard";
import DogCard from "../components/DogCard";
import { removeCat, removeDog } from "../redux/accepted/actions";
import styles from "./Accepted.module.css";

function Accepted() {
  // able to add cats/dogs to accepted page
  const dogs = useSelector((state) => state.accepted.dogs);
  const cats = useSelector((state) => state.accepted.cats);

  // Allows user to remove cat/dogs from their accepted page
  const dispatch = useDispatch();
  const handleRemoveCat = (index) => {
    dispatch(removeCat(index));
  };

  const handleRemoveDog = (index) => {
    dispatch(removeDog(index));
  };

  return (
    <Container>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4">
        {dogs.map((dog, i) => (
          <Col key={dog.Name} className="gap-4">
            <DogCard dog={dog} hideButton>
              <Button
                className={styles.dogButton}
                onClick={() => handleRemoveDog(i)}
              >
                Remove
              </Button>
            </DogCard>
          </Col>
        ))}

        {cats.map((cat, i) => (
          <Col key={cat.Name} className="gap-4">
            <CatCard cat={cat} hideButton>
              <Button
                onClick={() => handleRemoveCat(i)}
                className={styles.catButton}
              >
                Remove
              </Button>
            </CatCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Accepted;
