import { types } from "../types/types";

export const authReducer = (authState = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...authState,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return authState;
  }
};
