import React, { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { getUsername } from "state/userProfile/selectors";

interface UserHeaderProps {
  className?: string;
}

const UserHeader: FC<UserHeaderProps> = ({ className }) => {
  const userName = useSelector(getUsername);
  const classes = classNames("user-profile", className);
  return <div className={classes}>Logged in as {userName}</div>;
};

export default UserHeader;
