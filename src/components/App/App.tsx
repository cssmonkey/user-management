import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUserById } from "../../state/userProfile/actions";

import "../../styles/app.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);
  return (
    <div className="app bg-gray-50 min-h-screen">
      <p>App</p>
    </div>
  );
};

export default App;
