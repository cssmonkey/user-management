import React, { FC } from "react";

interface ContentCardProps {
  children: JSX.Element[] | JSX.Element;
}

const ContentCard: FC<ContentCardProps> = ({ children }) => (
  <div className="my-10 bg-white p-8 md:p-16 shadow">{children}</div>
);

export default ContentCard;
