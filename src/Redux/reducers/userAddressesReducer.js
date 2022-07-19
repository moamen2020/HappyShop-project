import {
  ADD_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  EDIT_USER_ADDRESS,
  GET_ONE_USER_ADDRESS,
  DELETE_USER_ADDRESS,
} from "../type";

const inital = {
  addUserAddress: [],
  allAddresses: [],
  deleteAddress: [],
  oneAddress: [],
  editAddress: [],
};
const userAddressesReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_USER_ADDRESS:
      return {
        ...state,
        addUserAddress: action.payload,
      };
    case GET_ALL_USER_ADDRESS:
      return {
        ...state,
        allAddresses: action.payload,
      };
    default:
      return state;
  }
};
export default userAddressesReducer;
