import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserById } from "state/userProfile/actions";
import { getUsername } from "state/userProfile/selectors";

import Loader from "../Loader/Loader";
import SiteHeader from "../SiteHeader/SiteHeader";

import "styles/app.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);

  useEffect(() => {
    if (!username) {
      dispatch(fetchUserById());
    }
  }, [dispatch]);

  const isPageReady = username;

  if (!isPageReady) {
    return <Loader />;
  }

  return (
    <div className="app bg-gray-50 min-h-screen">
      <SiteHeader />
    </div>
  );
};

export default App;
