import React, { useEffect, useState } from "react";
import carsLogo from "../../common/carsLogo.png";
import CarOrder from "./CarOrder";
const CarAbout = ({ car, onShowItem, calculatorProduct, currentPrice }) => {
  console.log(car);
  //TuningColor LocalState
  const [currentColorName, setcurrentColorName] = useState(
    car.tuningColor[0].name
  );
  const [currentColorPrice, setcurrentColorPrice] = useState(0);
  //TuningWheels LocalState
  const [currentWheelsName, setcurrentWheelsName] = useState(
    car.tuningWheels[0].name
  );
  const [currentWheelsPrice, setcurrentWheelsPrice] = useState(0);
  const [currentSalonName, setcurrentSalonName] = useState(
    car.tuningSalon[0].name
  );
  const [currentSalonPrice, setcurrentSalonPrice] = useState(0);

  // Main LocalState
  const [currentMainPrice, setcurrentMainPrice] = useState(car.price);
  const [currentImg, setcurrentImg] = useState(car.tuningColor[0].img);

  const sumPrice = () => {
    const sum =
      car.price + currentColorPrice + currentWheelsPrice + currentSalonPrice;
    setcurrentMainPrice(sum);
    calculatorProduct(sum);
  };

  // OrderMenu
  const [order, setOrder] = useState(false);
  const onShowOrder = () => {
    setOrder(!order);
  };

  return (
    <div className="carModalBack">
      <div className="carModal context">
        <div className="content">
          <div className="modal-header my-2">
            <h5 className="modal-title" id="exampleModalLabel">
              <img src={carsLogo} alt="" />
              <span>{car.name}</span>
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                onShowItem();
              }}
            ></button>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-12">
              <img className="img-thumbnail" src={currentImg} alt="" />
            </div>
            <div className="col-md-7 col-sm-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Основная Характеристика
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div className="row gx-5 gy-3">
                        <div className="col-md-4">
                          Разгон до 100 км/ч
                          <div className="fw-bold">{car.desk.desk1}</div>
                        </div>
                        <div className="col-md-4">
                          Двигатель
                          <div className="fw-bold">{car.desk.desk2}</div>
                        </div>
                        <div className="col-md-4">
                          Запас хода
                          <div className="fw-bold">{car.desk.desk3}</div>
                        </div>
                        <div className="col-md-4">
                          Привод
                          <div className="fw-bold">{car.desk.desk4}</div>
                        </div>
                        <div className="col-md-4">
                          Мест / дверей
                          <div className="fw-bold">{car.desk.desk5}</div>
                        </div>
                        <div className="col-md-4">
                          Д*Ш*В
                          <div className="fw-bold">{car.desk.desk6}</div>
                        </div>
                        <div className="col-md-4">
                          Колесная база
                          <div className="fw-bold">{car.desk.desk7}</div>
                        </div>
                        <div className="col-md-4">
                          Колеса
                          <div className="fw-bold">{car.desk.desk8}</div>
                        </div>
                        <div className="col-md-4">
                          Материал салона
                          <div className="fw-bold">{car.desk.desk9}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Доступные варианты
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <h1 className="tuning__title my-3">
                        Выбери свой {car.name}
                      </h1>
                      <div className="tuning">
                        Цвет кузова:{" "}
                        <span>
                          {car.tuningColor.map((tuning) => {
                            return (
                              <span className="tuning__item">
                                <img
                                  onMouseUp={() => {
                                    setcurrentColorPrice(tuning.price);
                                  }}
                                  onClick={() => {
                                    setcurrentColorName(tuning.name);
                                    setcurrentImg(tuning.img);
                                    sumPrice();
                                  }}
                                  src={tuning.imgLogo}
                                  alt=""
                                />
                              </span>
                            );
                          })}
                          <div className="tuning__name fw-bold">
                            {currentColorName} +<span>{currentColorPrice}</span>{" "}
                            $
                          </div>
                        </span>
                      </div>
                      <div className="tuning">
                        Цвет салона:
                        <span>
                          {car.tuningSalon.map((tuning) => {
                            return (
                              <span className="tuning__item">
                                <img
                                  onMouseUp={() => {
                                    setcurrentSalonPrice(tuning.price);
                                  }}
                                  onClick={() => {
                                    setcurrentSalonName(tuning.name);
                                    setcurrentImg(tuning.img);
                                    sumPrice();
                                  }}
                                  src={tuning.imgLogo}
                                  alt=""
                                />
                              </span>
                            );
                          })}
                          <div className="tuning__name fw-bold">
                            {currentSalonName} +<span>{currentSalonPrice}</span>{" "}
                            $
                          </div>
                        </span>
                      </div>
                      <div className="tuning">
                        Колеса:
                        <span>
                          {car.tuningWheels.map((tuning) => {
                            return (
                              <span className="tuning__item">
                                <img
                                  onMouseUp={() => {
                                    setcurrentWheelsPrice(tuning.price);
                                  }}
                                  onClick={() => {
                                    setcurrentWheelsName(tuning.name);
                                    setcurrentImg(tuning.img);
                                    sumPrice();
                                  }}
                                  src={tuning.imgLogo}
                                  alt=""
                                />
                              </span>
                            );
                          })}
                          <div className="tuning__name fw-bold">
                            {currentWheelsName} +
                            <span>{currentWheelsPrice}</span> $
                          </div>
                        </span>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="total my-3">
                <div className="d-flex justify-content-between">
                  <h1 className="fw-light">Итог</h1>
                  <h1 className="fw-normal">{currentMainPrice} $</h1>
                </div>
                <button
                  onClick={onShowOrder}
                  type="button"
                  className="btn btn-success my-3 btn-lg"
                  data-bs-dismiss="modal"
                >
                  Заказать
                </button>
              </div>
              {order && (
                <CarOrder
                  currentColorPrice={currentColorPrice}
                  currentWheelsName={currentWheelsName}
                  currentWheelsPrice={currentWheelsPrice}
                  currentSalonName={currentSalonName}
                  currentSalonPrice={currentSalonPrice}
                  currentMainPrice={currentMainPrice}
                  currentColorName={currentColorName}
                  car={car}
                  onShowOrder={onShowOrder}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAbout;
