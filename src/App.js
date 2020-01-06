import React from "react";
import "./App.css";
import { useFirebaseApp } from "reactfire";
import Home from "./Def Vistas/Home.js";


function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
      <Home/>
  );
}


export default App;
