import { UserActions } from "../Reducers/UserReducer";

export const setUser = (user) => {
  return (dispatch) => {
    dispatch(
      UserActions.setUser({
        userInfo: user,
      })
    );
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(UserActions.logoutUser());
  };
};
