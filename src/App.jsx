import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Stamps from "./components/Cars/Stamps";
import Footer from "./components/Footer/Footer";
import CarsPage from "./components/Cars/CarsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <CarsPage />
      <Stamps />
      <Footer/>
      
    </div>
  );
}

export default App;
