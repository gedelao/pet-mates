import { ADD_CAT, ADD_DOG, REMOVE_CAT, REMOVE_DOG } from "./actions";

// our object default state
const defaultState = {
  dogs: [],
  cats: [],
};

// if we don't get provided a state, we'll use our defaultState as our initial state
export const acceptedReducer = (state = defaultState, action) => {
  switch (action.type) {
    // handles our ADD_DOG action
    case ADD_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.dog],
      };
    case ADD_CAT:
      return {
        ...state,
        cats: [...state.cats, action.cat],
      };

    // removal of cats/dogs from accepted page
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
    // if no valid action, the state will remain unchanged
    default:
      return state;
  }
};
