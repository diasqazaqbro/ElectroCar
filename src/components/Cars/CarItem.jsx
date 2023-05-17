import React from "react";
import ico1 from "../../common/ico1.png";
import ico2 from "../../common/ico2.png";
import ico3 from "../../common/ico3.png";
import ico4 from "../../common/ico4.png";
import cars from "../../common/cars.png";
import carsLogo from "../../common/carsLogo.png";
const CarItem = ({car}) => {
  return (
    <div className="col-sm-6">
      <div className="card p-3">
        <div className="card-body">
          <div className="card__title">
            <div className="card__name_">
              <img src={carsLogo} alt="" />
              <span className="card__name mx-2">{car.name}</span>
            </div>
            <div className="card__price text-end">{car.price}</div>
          </div>
          <div className="card__info">
            <img className="" src={cars} alt="" />
            <div className="row">
              <div className="col-6">
                <img src={ico1} alt="" />
                <span className="card__desk">
                  Разгон до 100 км/ч <br />
                  <span className="card__desk-a">{car.desk.desk1}</span>
                </span>
              </div>
              <div className="col-6">
                <img src={ico1} alt="" />
                <span className="card__desk">
                  Разгон до 100 км/ч <br />
                  <span className="card__desk-a">{car.desk.desk2}</span>
                </span>
              </div>
              <div className="col-6">
                <img src={ico1} alt="" />
                <span className="card__desk">
                  Разгон до 100 км/ч <br />
                  <span className="card__desk-a">{car.desk.desk3}</span>
                </span>
              </div>
              <div className="col-6">
                <img src={ico1} alt="" />
                <span className="card__desk">
                  Разгон до 100 км/ч <br />
                  <span className="card__desk-a">{car.desk.desk4}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="card__button">
            <button type="button" class="btn btn-success btn-lg ">
              Заказать
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="btn btn-outline-secondary btn-lg mx-4 my-4"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
