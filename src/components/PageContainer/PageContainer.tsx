import React, { FC } from "react";

interface PageContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => (
  <div className="container my-10 mx-auto">{children}</div>
);

export default PageContainer;
