import React from 'react';
import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
     <>
        <Header/>
        <BrowserRouter>
           <Routes>

           </Routes>
        </BrowserRouter>
     </>

  );
};

export default App;
