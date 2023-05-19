import React from "react";
const CarSimpleOrder = ({ car, onShowOrder }) => {
  return (
    <div className="carOrderBack">
      <div className="carOrder">
        <div className="d-flex justify-content-between my-2">
          <h5 className="fs-2" id="exampleModalLabel">
            <span>Заказать {car.name}</span>
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              onShowOrder();
            }}
          ></button>
        </div>
        <div className="row my-4">
          <div className="col-md-6 col-sm-12">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ФИО 
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Введите ФИО"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Номер
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Введите свой номер телефона"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-12">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Комментарий
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Введите Комментарий к заявке"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="text-center">
            <button type="button" class=" btn-lg btn btn-outline-success">
              Отправить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSimpleOrder;
