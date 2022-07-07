import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CatCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addAcceptedCat } from "../redux/accepted/actions";
import { addRejectedCat } from "../redux/rejected/actions";

function CatCard({ cat, hideButton, children }) {
  // using children, we are abel to add our remove button without needing to add it in this file
  // if user clicks either accept or reject, it'll prevent user from clicking on same pet again and preventing duplicates
  const acceptCat = useSelector((state) => state.accepted.cats);
  const accepted = acceptCat.some((currentCat) => currentCat.Name === cat.Name);

  const rejectedCat = useSelector((state) => state.rejected.cats);
  const rejected = rejectedCat.some(
    (currentCat) => currentCat.Name === cat.Name
  );

  // Disables accepted/rejected button
  const disabled = accepted || rejected;

  const dispatch = useDispatch();

  // handles add button
  const handleAddedCat = (cat) => {
    dispatch(addAcceptedCat(cat));
  };

  // handles rejected button
  const handleRejectedCat = (cat) => {
    dispatch(addRejectedCat(cat));
  };

  return (
    <Card className="h-100" style={{ borderColor: "red" }}>
      <Card.Img variant="top" src={cat.Image} className={styles.CatCardImage} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{cat.Name}</Card.Title>
        <Card.Text className="flex-grow-1" style={{ font: "bold" }}>
          {cat.Gender}
        </Card.Text>
        {hideButton || (
          <>
            <a
              className={styles.information}
              href={cat.Information}
              disabled={disabled}
            >
              Information
            </a>
            <div>
              <Button
                class="col-xs-3, btn-block"
                disabled={disabled}
                onClick={() => handleRejectedCat(cat)}
                className={styles.CatButton}
              >
                ❌
              </Button>
              <Button
                class="col-xs-3, btn-block"
                disabled={disabled}
                onClick={() => handleAddedCat(cat)}
                className={styles.CatButton}
              >
                🐱
              </Button>
            </div>
          </>
        )}
        {children}
      </Card.Body>
    </Card>
  );
}

export default CatCard;
