import React, { useState } from "react";
import CarsFilter from "./CarsFilter";
import CarItem from "./CarItem";

const CarsPage = ({cars}) => {
  const [filterState, setFilterState] = useState("electro");
  const [inStockMode, setInStockMode] = useState(true);
  const mapToCarsFilter = cars.map((car) => {
    if (car.filter === filterState) {
      return <CarItem state={cars} car={car} />;
    }
  });
  return (
    <section className="cars">
      <div className="container">
        <h2 className="cars__suptitle my-3">
          Автомобили по всему Казахстану и СНГ
        </h2>
        <h1 className="cars__title my-3">Электромобили</h1>
        <CarsFilter
          setFilterState={setFilterState}
          setInStockMode={setInStockMode}
        />
        <div className="cars__list">
          <div className="row gy-3">
            {inStockMode
              ? mapToCarsFilter
              : cars.map((car) => {
                  if (car.inStock) {
                    return <CarItem state={cars} car={car} />;
                  }
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
