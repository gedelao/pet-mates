import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CatCard from "../components/CatCard";
import DogCard from "../components/DogCard";
import { removeCat, removeDog } from "../redux/rejected/actions";
import styles from "./Rejected.module.css";

function Rejected() {
  const dogs = useSelector((state) => state.rejected.dogs);
  const cats = useSelector((state) => state.rejected.cats);

  // will remove cats/dogs from the rejected page
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
                className={styles.catButton}
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
                className={styles.catButton}
                onClick={() => handleRemoveCat(i)}
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

export default Rejected;
