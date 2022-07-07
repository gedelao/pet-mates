export const ADD_DOG = "accepted/ADD_DOG";
export const ADD_CAT = "accepted/ADD_CAT";
export const REMOVE_CAT = "accepted/REMOVE_CAT";
export const REMOVE_DOG = "accepted/REMOVE_DOG";

// adds dogs to accepted list
export const addAcceptedDog = (dog) => {
  return {
    type: ADD_DOG,
    dog,
  };
};

// adds cats to accepted list
export const addAcceptedCat = (cat) => {
  return {
    type: ADD_CAT,
    cat,
  };
};

// removes cats from accepted list
export const removeCat = (index) => {
  return {
    type: REMOVE_CAT,
    index: index,
  };
};

// removes dogs from accepted list
export const removeDog = (index) => {
  return {
    type: REMOVE_DOG,
    index: index,
  };
};
