const DATA = "DATA";

export const profileData = (payload) => ({
  type: DATA,
  payload,
});

const initialState = {
  data: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
