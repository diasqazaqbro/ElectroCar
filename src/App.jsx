import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Stamps from "./components/Cars/Stamps";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import CarsPageContainer from "./components/Cars/CarsPageContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/car" element={<CarsPageContainer />} />
      </Routes>
      <Stamps />
      <Footer />
    </div>
  );
}

export default App;
