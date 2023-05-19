import React from "react";

const CarsFilterMobile = ({ setFilterState, setInStockMode }) => {
  return (
    <div
      class="btn-group my-4  mobileversion__show"
      role="group"
      aria-label="Button group with nested dropdown"
    >
      <div class="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          class="btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Тип машин
        </button>
        <ul class="text-center dropdown-menu" aria-labelledby="btnGroupDrop1">
            <button
              onClick={() => setInStockMode(false)}
              className="btn btn-success"
            >
              В наличии
            </button>
            <button
              onClick={() => {
                setFilterState("electro");
                setInStockMode(true);
              }}
              className="btn my-1 btn-success"
            >
              Электромобили
            </button>
            <button
              onClick={() => {
                setFilterState("crossover");
                setInStockMode(true);
              }}
              className="btn my-1 btn-success"
            >
              Кроссоверы
            </button>

            <button
              onClick={() => {
                setFilterState("sedans");
                setInStockMode(true);
              }}
              className="btn my-1 btn-success"
            >
              Седаны
            </button>
            <button
              onClick={() => {
                setFilterState("minivans");
                setInStockMode(true);
              }}
              className="btn my-1 btn-success"
            >
              Минивэны
            </button>
        </ul>
      </div>
    </div>
  );
};

export default CarsFilterMobile;
