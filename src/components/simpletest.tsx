import React, { } from "react";
import './App.css';
import { RegisterForm } from "./RegisterForm";
import { Page1 } from "./page1";
//import useGlobalState, { stateX } from "../globals/Globalstates.js";

export const Simpletest = () => {
  // const [state] = useGlobalState(stateX);
  const [currentPage, setCurrentPage] = React.useState("home");

  //change to use  router in a real react app just for didactic purpouses
  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  // useEffect(() => {
  //   if (state && currentPage === "home") {
  //     navigateTo("page1");
  //   }
  // }, [state]);

  return (
    <>
     <button onClick={() => navigateTo("home")}>page-1</button>
     <button onClick={() => navigateTo("page1")}>page-2</button>

      {currentPage === "home" && <RegisterForm  />}
      {currentPage === "page1" && <Page1 navigateTo={navigateTo} />}


    </>
  );
}



