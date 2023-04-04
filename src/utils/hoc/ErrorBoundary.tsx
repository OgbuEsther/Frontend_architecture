import React from "react";

const ErrorBoundary = () => {
  return (
    <div
      style={{
        backgroundImage:
          " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        width: "100%",
        height: "50vh",
      }}
    >
      <h3>OOPPS!!!!</h3>
      <h5>something went worng</h5>
    </div>
  );
};

export default ErrorBoundary;
