import React from "react";
import "./App.css";
import ListItems from "./component/ListItems/ListItems";
import { Header } from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import FetchData from "./component/FetchData/FetchData";
const App=()=> {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<ListItems />} />
        <Route path="/FetchApi" element={<FetchData />} />
      </Routes>
    </div>
  );
}

export default App;
