import React, { useEffect, useState } from "react";
import "./App.css";
import useDragAndDrop from "./hooks/DragAndDrop";
import Card from "./components/Card";
import Cards from "./features/Cards";

function App() {
  return (
    <>
      <div>
        <Cards />
      </div>
    </>
  );
}

export default App;
