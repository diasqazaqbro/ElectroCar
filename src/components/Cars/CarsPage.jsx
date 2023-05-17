import React, { useState } from "react";

import CarsFilter from "./CarsFilter";
import CarItem from "./CarItem";
const state = {
  cars: [
    {
      inStock: true,
      filter: "electro",
      name: "Zeekr001 1",
      price: "от 100 000 тг",
      desk: {
        desk1: "пгшпшмшпгш",
        desk2: "3.8 секунд 2",
        desk3: "3.8 секунд 3",
        desk4: "3.8 секунд 4",
      },
      moreDetails: {},
    },
    {
      inStock: true,
      filter: "sedans",
      name: "Сидан 2",
      price: "от 100 000 тг",
      desk: {
        desk1: "3.8 секунд 1",
        desk2: "3.8 секунд 2",
        desk3: "3.8 секунд 3",
        desk4: "3.8 секунд 4",
      },
    },
    {
      inStock: true,
      filter: "minivans",
      name: "Минивэн 3",
      price: "от 100 000 тг",
      desk: {
        desk1: "3.8 секунд 1",
        desk2: "3.8 секунд 2",
        desk3: "3.8 секунд 3",
        desk4: "3.8 секунд 4",
      },
    },
    {
      inStock: true,
      filter: "minivans",
      name: "диас Минивэн 3",
      price: "от 100 000 тг",
      desk: {
        desk1: "3.8 секунд 1",
        desk2: "3.8 секунд 2",
        desk3: "3.8 секунд 3",
        desk4: "3.8 секунд 4",
      },
    },
  ],
};

const CarsPage = () => {
  const [filterState, setFilterState] = useState("electro");
  const [inStockMode, setInStockMode] = useState(true);
  const mapToCarsFilter = state.cars.map((car) => {
    if (car.filter === filterState) {
      return <CarItem car={car} />;
    }
  });
  return (
    <section className="cars">
      <div className="container">
        <h2 className="cars__suptitle my-3">
          Автомобили по всему Казахстану и СНГ Режим:
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
              : state.cars.map((car) => {
                  if (car.inStock) {
                    return  <CarItem car={car} />;
                   
                  }
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
