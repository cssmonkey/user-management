import { getUsername } from "./selectors";
import mockState from "utilities/test/mockState";
import { RootState } from "../rootReducer";

describe("UserProfile selectors", () => {
  describe("getUsername", () => {
    it("should return username", () => {
      const state: RootState = {
        ...mockState,
        userProfile: {
          username: "Steve",
        },
      };
      expect(getUsername(state)).toBe("Steve");
    });
  });
});
