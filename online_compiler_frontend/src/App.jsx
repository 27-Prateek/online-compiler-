import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import CompilerPage from "./pages/compiler_page";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompilerPage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
