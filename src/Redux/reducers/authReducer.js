import { CREATE_NEW_USER, GET_ERROR } from "../type";

const initial = {
  createUser: [],
  loading: true,
};
const authReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        createUser: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
