import React, { useEffect } from "react";
import './App.css';
import { RegisterForm } from './components/RegisterForm';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import useGlobalState, { stateX } from "./globals/Globalstates.js";

function App2() {
  const [state, setState] = useGlobalState(stateX);
  const [currentPage, setCurrentPage] = React.useState("home");

  //change to use  router in a real react app just for didactic purpouses
  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (state && currentPage === "home") {
      navigateTo("page1");
    }
  }, [state]);

  return (
    <>
     <button onClick={() => navigateTo("home")}>page-1</button>
     <button onClick={() => navigateTo("page1")}>page-2</button>

      {currentPage === "home" && <RegisterForm  />}
      {currentPage === "page1" && <Page1 navigateTo={navigateTo} />}


    </>
  );
}

export default App;
