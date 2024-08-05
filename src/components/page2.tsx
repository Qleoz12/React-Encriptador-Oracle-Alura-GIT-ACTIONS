import React from "react";

// Define a type for the props
interface Page1Props {
  navigateTo: (path: string) => void; // Assuming navigateTo is a function that takes a string argument and returns void
}
export const Page2:React.FC<Page1Props> = ({ navigateTo }) => {
  return (
    <React.Fragment>
      <h1>Page 2</h1>
      <button onClick={() => navigateTo("home")}>
        Back to Home
      </button>
    </React.Fragment>
  );
};