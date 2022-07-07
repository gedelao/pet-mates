import { REJECT_CAT, REJECT_DOG, REMOVE_CAT, REMOVE_DOG } from "./actions";

const defaultState = {
  dogs: [],
  cats: [],
};

export const rejectedReducer = (state = defaultState, action) => {
  switch (action.type) {
    // our variable
    case REJECT_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.dog],
      };
    case REJECT_CAT:
      return {
        ...state,
        cats: [...state.cats, action.cat],
      };
    // removal of cats/dogs from rejected page
    case REMOVE_CAT:
      return {
        ...state,
        cats: state.cats.filter((cat, i) => i !== action.index),
      };
    case REMOVE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter((dog, i) => i !== action.index),
      };
    default:
      return state;
  }
};
