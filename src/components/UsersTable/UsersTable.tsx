import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsersList } from "state/users/selectors";
import { fetchUsers } from "state/users/actions";

const UsersTable: FC = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(getUsersList);

  useEffect(() => {
    if (!usersList) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  if (!usersList || usersList.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {usersList.map(({ name, email, company, username }, i) => (
          <tr key={i}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{company.name}</td>
            <td>{username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
