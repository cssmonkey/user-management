import React, { FC } from "react";

interface PageContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => (
  <div className="px-8">
    <div className="container my-10 mx-auto">{children}</div>
  </div>
);

export default PageContainer;
