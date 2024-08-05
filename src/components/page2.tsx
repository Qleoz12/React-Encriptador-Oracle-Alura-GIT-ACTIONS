import React from "react";

export const Page2 = ({ navigateTo: string }) => {
  return (
    <React.Fragment>
      <h1>Page 2</h1>
      <button onClick={() => navigateTo("home")}>
        Back to Home
      </button>
    </React.Fragment>
  );
};