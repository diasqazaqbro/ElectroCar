import React from "react";

const CarsFilter = ({ setFilterState, setInStockMode }) => {
  return (
    <div className="mobileversion__none">
      <div className="cars__buttons d-flex justify-content-around flex-wrap my-4">
        <button
          onClick={() => setInStockMode(false)}
          className="btn btn-success my-2 btn-lg"
        >
          В наличии
        </button>
        <button
          onClick={() => {
            setFilterState("electro");
            setInStockMode(true);
          }}
          className="btn btn-success my-2 btn-lg"
        >
          Электромобили
        </button>
        <button
          onClick={() => {
            setFilterState("crossover");
            setInStockMode(true);
          }}
          className="btn btn-success my-2 btn-lg"
        >
          Кроссоверы
        </button>

        <button
          onClick={() => {
            setFilterState("sedans");
            setInStockMode(true);
          }}
          className="btn btn-success my-2 btn-lg"
        >
          Седаны
        </button>
        <button
          onClick={() => {
            setFilterState("minivans");
            setInStockMode(true);
          }}
          className="btn btn-success my-2 btn-lg"
        >
          Минивэны
        </button>
      </div>
    </div>
  );
};

export default CarsFilter;
