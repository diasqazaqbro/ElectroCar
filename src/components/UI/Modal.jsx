import React from "react";
import cars from "./common/cars.png";
import carsLogo from "./common/carsLogo.png";
const Modal = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Подробнее:
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img src={carsLogo} alt="" />
            <span>Zeekr001</span>
            <img src={cars} alt="" />
            <div className="modal__price">от 107 000</div>
            <div className="tuning">
              <h1 className="tuning__title">Выбери свой Zeekr001</h1>
              <div className="tuning__color">Цвет кузова:</div>
              <div className="tuning__salon">Цвет салона:</div>
              <div className="tuning__wheels">Колеса:</div>
            </div>
            <div className="about-car">
              <h1 className="about-car__title">Характеристика</h1>
              <div className="about-car__desk">
                Разгон до 100 км/ч: 3.8 секунды Двигатель: 544 л.с Запас хода:
                606 км по CLTC Привод: 4WD (Полный) Мест / дверей: 5 / 5 Д*Ш*В:
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
          <div class=" text-center p-4">
            <button
              type="button"
              class="btn btn-success btn-lg"
              data-bs-dismiss="modal"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
