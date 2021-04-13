import { getUsername } from "./selectors";

import { RootState } from "../rootReducer";

describe("UserProfile selectors", () => {
  describe("getUsername", () => {
    it("should return username", () => {
      const state: RootState = {
        userProfile: {
          username: "Steve",
        },
      };
      expect(getUsername(state)).toBe("Steve");
    });
  });
});
