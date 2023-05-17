import React from "react";

const CarsFilter = ({setFilterState, setInStockMode}) => {
    return (
        <div className="cars__buttons my-4">
          <button
            onClick={() => setInStockMode(false)}
            className="btn btn-success btn-lg"
          >
            В наличии
          </button>
          <button
            onClick={() => {
              setFilterState("electro");
              setInStockMode(true);
            }}
            className="btn btn-success btn-lg"
          >
            Электромобили
          </button>
          <button
            onClick={() => {
              setFilterState("crossover");
              setInStockMode(true);
            }}
            className="btn btn-success btn-lg"
          >
            Кроссоверы
          </button>

          <button
            onClick={() => {
              setFilterState("sedans");
              setInStockMode(true);
            }}
            className="btn btn-success btn-lg"
          >
            Седаны
          </button>
          <button
            onClick={() => {
              setFilterState("minivans");
              setInStockMode(true);
            }}
            className="btn btn-success btn-lg"
          >
            Минивэны
          </button>
        </div>
    )
}

export default CarsFilter