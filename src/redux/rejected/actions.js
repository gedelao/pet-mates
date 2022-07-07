export const REJECT_DOG = "rejected/REJECT_DOG";
export const REJECT_CAT = "rejected/REJECT_CAT";
export const REMOVE_CAT = "rejected/REMOVE_CAT";
export const REMOVE_DOG = "rejected/REMOVE_DOG";

export const addRejectedDog = (dog) => {
  return {
    type: REJECT_DOG,
    dog,
  };
};

export const addRejectedCat = (cat) => {
  return {
    type: REJECT_CAT,
    cat,
  };
};

export const removeCat = (index) => {
  return {
    type: REMOVE_CAT,
    index: index,
  };
};

export const removeDog = (index) => {
  return {
    type: REMOVE_DOG,
    index: index,
  };
};
