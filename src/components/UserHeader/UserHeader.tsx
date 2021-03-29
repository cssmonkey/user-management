import React, { FC } from "react";
import { useSelector } from "react-redux";

import { getUsername } from "../../state/userProfile/selectors";

const UserHeader: FC = () => {
  const userName = useSelector(getUsername);
  return (
    <div className="user-profile">
      <span>
        Logged in as <strong>{userName}</strong>
      </span>
    </div>
  );
};

export default UserHeader;
