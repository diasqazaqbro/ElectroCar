import React, { useState } from "react";
import ico1 from "../../common/ico1.png";
import ico2 from "../../common/ico2.png";
import ico3 from "../../common/ico3.png";
import ico4 from "../../common/ico4.png";

import CarAboutContainer from "./CarAboutContainer";
import CarSimpleOrder from "./CarSimpleOrder";

const CarItem = ({ car }) => {
  const [modal, setModal] = useState(false);
  const [secondImg, setSecondImg] = useState(false);
  const onShowItem = () => {
    setModal(!modal);
  };
  const [order, setOrder] = useState(false);
  const onShowOrder = () => {
    setOrder(!order);
  };
  return (
    <div className="col-sm-6">
      <div className="card p-3">
        <div className="card-body ">
          <div className="d-flex justify-content-between">
            <div className="card__name_">
              {/* <img src={carsLogo} alt="" /> */}
              <span className="card__name mx-2">{car.name}</span>
            </div>
            <div className="card__price text-end">{car.price} $</div>
          </div>
          <div className="row my-4">
            <div className="col">
              {secondImg && (
                <img
                  style={{ width: "100%" }}
                  className=""
                  src={car.tuningColor[1].img}
                  alt=""
                  onClick={() => {
                    setSecondImg(false);
                  }}
                />
              )}
              {!secondImg && (
                <img
                  style={{ width: "100%" }}
                  className=""
                  src={car.tuningColor[0].img}
                  alt=""
                  onClick={() => {
                    setSecondImg(true);
                  }}
                />
              )}
            </div>
            <div className="col none">
              <div className="row">
                <div className="col-6">
                  <img src={ico1} alt="" />
                  <span className="card__desk">
                    Разгон до 100 км/ч <br />
                    <span className="card__desk-a">{car.desk.desk1}</span>
                  </span>
                </div>
                <div className="col-6">
                  <img src={ico2} alt="" />
                  <span className="card__desk">
                    Двигатель <br />
                    <span className="card__desk-a">{car.desk.desk2}</span>
                  </span>
                </div>
                <div className="col-6">
                  <img src={ico4} alt="" />
                  <span className="card__desk">
                    Запас хода <br />
                    <span className="card__desk-a">{car.desk.desk3}</span>
                  </span>
                </div>
                <div className="col-6">
                  <img src={ico3} alt="" />
                  <span className="card__desk">
                    Привод <br />
                    <span className="card__desk-a">{car.desk.desk4}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card__button text-center">
            <button
              onClick={onShowOrder}
              type="button"
              class="btn btn-success btn-lg "
            >
              Заказать
            </button>
            <button
              type="button"
              onClick={() => {
                onShowItem();
              }}
              // data-bs-toggle="modal"
              // data<-bs-target="#exampleModal"
              class="btn btn-outline-secondary btn-lg mx-4 my-4"
            >
              Подробнее
            </button>
          </div>
          {modal && <CarAboutContainer onShowItem={onShowItem} car={car} />}
          {order && <CarSimpleOrder onShowOrder={onShowOrder} car={car} />}
        </div>
      </div>
    </div>
  );
};

export default CarItem;
