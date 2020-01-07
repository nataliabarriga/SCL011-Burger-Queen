import React from "react";
import "./App.css";
import { useFirebaseApp } from "reactfire";
import Home from "./Def Vistas/Home.js";
import Test from "./Def Componentes/firestorePrueba.js"


function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <div>
      <Home/>
      <Test/>
    </div>
  );
}


export default App;
