import React from "react";
const CarOrder = ({
  onShowOrder,
  car,
  currentColorPrice,
  currentWheelsName,
  currentWheelsPrice,
  currentSalonName,
  currentSalonPrice,
  currentMainPrice,
  currentColorName,
}) => {
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
        <span className="fs-5 order__color fw-bold">Выбранные параметры</span>
        <div className="d-flex justify-content-between my-2">
          <div>
            <div>Сам транспорт</div>
            <div className="fw-bold">{car.name}</div>
          </div>
          <div className="fw-bold order__color">+{car.price} $</div>
        </div>
        <div className="d-flex justify-content-between my-2">
          <div>
            <div>Цвет Кузова</div>
            <div className="fw-bold">{currentColorName}</div>
          </div>
          <div className="fw-bold order__color">+{currentColorPrice} $</div>
        </div>
        <div className="d-flex justify-content-between my-2">
          <div>
            <div>Колеса</div>
            <div className="fw-bold">{currentWheelsName}</div>
          </div>
          <div className="fw-bold order__color">+{currentWheelsPrice} $</div>
        </div>
        <div className="d-flex justify-content-between my-2">
          <div>
            <div>Цвет Салона</div>
            <div className="fw-bold">{currentSalonName}</div>
          </div>
          <div className="fw-bold order__color">+{currentSalonPrice} $</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h4 className="fw-light">Итог</h4>
          <h4 className="fw-normal">{currentMainPrice} $</h4>
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

export default CarOrder;
