import { RootState } from "../rootReducer";

export const getUsername = (state: RootState): string => state.userProfile.username;
