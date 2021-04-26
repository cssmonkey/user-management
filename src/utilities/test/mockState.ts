import { initialState as userProfileInitialState } from "state/userProfile/reducer";
import { initialState as usersInitialState } from "state/users/reducer";

const state = {
  userProfile: userProfileInitialState,
  users: usersInitialState,
};

export default state;
