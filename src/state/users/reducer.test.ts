import reducer, { initialState } from "./reducer";
import { ACTION_TYPES } from "./actions";
import { Users } from "../types";

describe("Users reducer", () => {
  it("Fetch users fulfilled", () => {
    const usersList: Users = [
      {
        id: "1",
        name: "Steve Smith",
      },
    ];
    const state = reducer(initialState, {
      type: `${ACTION_TYPES.FETCH_USERS}/fulfilled`,
      payload: usersList,
    });
    expect(state.list).toEqual(usersList);
  });
});
