import React, { useState } from "react";
import cars from "../../common/cars.png";
import carsLogo from "../../common/carsLogo.png";
const CarAbout = ({ car, onShowItem, calculatorProduct, currentPrice }) => {
  const [currentColorName, setcurrentColorName] = useState(
    car.tuningColor[0].name
  );
  // const [currentWheelsName, setcurrentWheelsName] = useState(
  //   car.tuningWheels[0].name
  // );
  const [currentImg, setcurrentImg] = useState(car.tuningColor[0].img);
  const sumPrice = (tuningColor, tuningWheels) => {
    const sum = car.price + tuningColor;
    calculatorProduct(sum);
  };

  return (
    <div className="modal-dialog carModalBack">
      <div className="modal-content carModal">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Подробнее:
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              onShowItem();
            }}
          ></button>
        </div>
        <div className="modal-body">
          <img  src={carsLogo} alt="" />
          <span>{car.name}</span>
          <img style={{width: '50%'}}  src={currentImg} alt="" />
          <div className="modal__price">от 107 000</div>
          <div className="tuning">
            <h1 className="tuning__title">Выбери свой {car.name}</h1>
            <div className="tuning__color">
              Цвет кузова:{" "}
              <span>
                {car.tuningColor.map((tuning) => {
                  return (
                    <button
                      onClick={() => {
                        setcurrentColorName(tuning.name);
                        setcurrentImg(tuning.img);
                        sumPrice(tuning.price);
                      }}
                    >
                      {tuning.name}
                      <div>+ {tuning.price} $</div>
                    </button>
                  );
                })}
              </span>
              <div>Нынешний цвет {currentColorName}</div>
              <div>
                Конечная сумма: {currentPrice ? currentPrice : car.price}
              </div>
            </div>
            {/* <div className="tuning__salon">Цвет салона:</div> */}
            {/* <div className="tuning__wheels">
              Колеса:
              <span>
                {car.tuningWheels.map((tuning) => {
                  return (
                    <button
                      onClick={() => {
                        setcurrentWheelsName(tuning.name);
                        setcurrentImg(tuning.img);
                        sumPrice(tuning.price);
                      }}
                    >
                      {tuning.name}
                      <div>+ {tuning.price} $</div>
                    </button>
                  );
                })}
              </span>
            </div> */}
            {/* <div>Нынешние колеса{currentWheelsName}</div> */}
          </div>
          <div className="about-car">
            <h1 className="about-car__title">Характеристика</h1>
            <div className="about-car__desk">
              Разгон до 100 км/ч: 3.8 секунды Двигатель: 544 л.с Запас хода: 606
              км по CLTC Привод: 4WD (Полный) Мест / дверей: 5 / 5 Д*Ш*В:
              4970*1999*1560 мм Колесная база: 3005 мм Колеса: 255/45 R21
              Материал салона: Кожа Наппа + алькантара Масса (кг): 2339 кг
              Подвеска: Пневмоподвеска с системой электромагнитной амортизации
              CCD, спереди на двойных поперечных рычагах, задняя многорычажная
              Батарея: Тройная литиевая на 100 кВт*ч. AC 7 кВт Клиренс: от 150
              до 210 мм Багажник: 2144 л Тип двигателя: Постоянный магнит /
              синхронный Зимний пакет: Обогрев руля, первого и второго ряда,
              зеркал, тепловой насос (ТЭН)
            </div>
          </div>
        </div>
        <div className=" text-center p-4">
          <button
            type="button"
            className="btn btn-success btn-lg"
            data-bs-dismiss="modal"
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarAbout;