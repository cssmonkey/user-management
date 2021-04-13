import React, { FC } from "react";

import Logo from "assets/images/logo.svg";
import UserAvatar from "../UserAvatar/UserAvatar";

const SiteHeader: FC = () => (
  <div className="sticky top-0 left-0 right-0 px-8 py-6 bg-white border-b border-gray-100 flex items-center">
    <img src={Logo} alt="Company name" />
    <UserAvatar className="ml-auto" />
  </div>
);

export default SiteHeader;
