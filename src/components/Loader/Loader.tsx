import React, { FC } from "react";

const Loader: FC = () => (
  <div className="loader flex justify-center items-center min-h-screen">
    <div className="loader__inner">
      <p className="text-3xl text-gray-600 animate-pulse">Loading...</p>
    </div>
  </div>
);

export default Loader;
