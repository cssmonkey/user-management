import { getUsersList } from "./selectors";
import mockState from "utilities/test/mockState";
import { RootState } from "../rootReducer";
import { Users } from "../types";

describe("Users selectors", () => {
  describe("getUsersList", () => {
    it("should return list of users", () => {
      const usersList: Users = [
        {
          id: "1",
          name: "Steve Smith",
        },
      ];
      const state: RootState = {
        ...mockState,
        users: {
          list: usersList,
        },
      };
      expect(getUsersList(state)).toEqual(usersList);
    });
  });
});
