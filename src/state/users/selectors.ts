import { RootState } from "../rootReducer";
import { User } from "../types";

export const getUsersList = (state: RootState): User[] => state.users.list;
