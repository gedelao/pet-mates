import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DogCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addRejectedDog } from "../redux/rejected/actions";
import { addAcceptedDog } from "../redux/accepted/actions";

function DogCard({ dog, hideButton, children }) {
  // if user clicks either accept or reject, it'll prevent user from clicking on same pet again and preventing duplicates
  const acceptDog = useSelector((state) => state.accepted.dogs);
  const accepted = acceptDog.some((currentDog) => currentDog.Name === dog.Name);

  const rejectedDog = useSelector((state) => state.rejected.dogs);
  const rejected = rejectedDog.some(
    (currentDog) => currentDog.Name === dog.Name
  );

  // Disables the accepted/rejected button once it has been clicked on a pet
  const disabled = accepted || rejected;

  // Grabs our hook from redux store
  const dispatch = useDispatch();

  // handles our added/rejected button
  const handleAddedDog = (dog) => {
    dispatch(addAcceptedDog(dog));
  };

  const handleRejectedDog = (dog) => {
    dispatch(addRejectedDog(dog));
  };

  return (
    <Card className="h-100" style={{ borderColor: "red" }}>
      <Card.Img variant="top" src={dog.Image} className="dogCardImage" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{dog.Name}</Card.Title>
        <div>
          <Card.Text className="flex-grow-1" style={{ font: "bold" }}>
            {dog.Gender}
          </Card.Text>
        </div>
        {/* Any tags inside will be hidden when viewed in either rejected or accepted */}
        {hideButton || (
          <>
            <a className="information" href={dog.Information}>
              Information
            </a>
            <div>
              <Button
                class="col-xs-3, btn-block"
                disabled={disabled}
                onClick={() => handleRejectedDog(dog)}
                className="DogButton"
              >
                ❌
              </Button>
              <Button
                class="col-xs-3, btn-block"
                disabled={disabled}
                onClick={() => {
                  handleAddedDog(dog);
                }}
                className="DogButton smallDogButton"
              >
                🐶
              </Button>
            </div>
          </>
        )}
        {children}
      </Card.Body>
    </Card>
  );
}

export default DogCard;
