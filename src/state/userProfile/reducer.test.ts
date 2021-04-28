import reducer, { initialState } from "./reducer";
import { ACTION_TYPES } from "./actions";
import { User } from "../types";

describe("UserProfile reducer", () => {
  it("Fetch user by id fulfilled", () => {
    const user: User = {
      id: "1",
      name: "Steve Smith",
    };
    const state = reducer(initialState, {
      type: `${ACTION_TYPES.FETCH_USER_BY_ID}/fulfilled`,
      payload: user,
    });
    expect(state.id).toBe("1");
    expect(state.name).toBe("Steve Smith");
  });
});
