import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import "./all.css";
import "./index.css";
import "./typography.css";

function App() {

  return (
    <>

       <BrowserRouter>
         <Routes>
           <Route path="/" exact Component={Home} />

         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
