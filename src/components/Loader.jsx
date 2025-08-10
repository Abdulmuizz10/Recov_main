import React from "react";

const Loader = () => {
  return (
    <div className="h-full w-screen flex items-center justify-center absolute inset-0 top-0 left-0 right-0 bottom-0 bg-black/50">
      <div className="loader" />
    </div>
  );
};

export default Loader;
