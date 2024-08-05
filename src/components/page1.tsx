import React from "react";

export const Page1 = ({ navigateTo  }) => {
  return (
    <React.Fragment>
      <h1>¡Login Successfully!</h1>
      <button onClick={() => navigateTo("home")}>
        Back to Home
      </button>
    </React.Fragment>
  );
};