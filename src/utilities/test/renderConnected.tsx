import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";

interface RenderConnected {
  ui: JSX.Element;
  initialState: Record<string, unknown>;
  store?: MockStore;
}

interface RenderConnectedWithStore extends RenderResult {
  store: MockStore;
}

const middleware = [thunk];
const mockStore = configureStore(middleware);

export const makeStore = (initialState: Record<string, unknown>): MockStore =>
  mockStore(initialState);

const renderConnected = ({
  ui,
  initialState = {},
  store = makeStore(initialState),
}: RenderConnected): RenderConnectedWithStore => {
  const rendered = render(<Provider store={store}>{ui}</Provider>);
  return {
    ...rendered,
    store,
  };
};

export default renderConnected;
