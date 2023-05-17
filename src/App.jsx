import "./App.scss";
import React, { useState } from "react";
import logo from "./common/logo.png";
import phone from "./common/phone.png";
import ico1 from "./common/ico1.png";
import ico2 from "./common/ico2.png";
import ico3 from "./common/ico3.png";
import ico4 from "./common/ico4.png";
import cars from "./common/cars.png";
import carsLogo from "./common/carsLogo.png";

const state = {
  cars: [
    {
      inStock: true,
      filter: "electro",
      name: "Zeekr001 1",
      price: "от 100 000 тг",
      desk: {
        desk1: "3.8 секунд 1",
        desk2: "3.8 секунд 2",
        desk3: "3.8 секунд 3",
        desk4: "3.8 секунд 4",
      },
      moreDetails: {},
    },
    {
      inStock: true,
      filter: "sedans",
      name: "Сидан 2",
      price: "от 100 000 тг",
      desk: {
        desk1: "3.8 секунд 1",
        desk2: "3.8 секунд 2",
        desk3: "3.8 секунд 3",
        desk4: "3.8 секунд 4",
      },
    },
    {
      inStock: true,
      filter: "minivans",
      name: "Минивэн 3",
      price: "от 100 000 тг",
      desk: {
        desk1: "3.8 секунд 1",
        desk2: "3.8 секунд 2",
        desk3: "3.8 секунд 3",
        desk4: "3.8 секунд 4",
      },
    },
  ],
};

function App() {
  const [filterState, setFilterState] = useState("electro");
  const [inStockMode, setInStockMode] = useState(true);
  const mapToCarsFilter = state.cars.map((car) => {
    if (car.filter === filterState) {
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
    }
  });
  return (
    <div className="App">
      {/* Modal  */}
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
                  606 км по CLTC Привод: 4WD (Полный) Мест / дверей: 5 / 5
                  Д*Ш*В: 4970*1999*1560 мм Колесная база: 3005 мм Колеса: 255/45
                  R21 Материал салона: Кожа Наппа + алькантара Масса (кг): 2339
                  кг Подвеска: Пневмоподвеска с системой электромагнитной
                  амортизации CCD, спереди на двойных поперечных рычагах, задняя
                  многорычажная Батарея: Тройная литиевая на 100 кВт*ч. AC 7 кВт
                  Клиренс: от 150 до 210 мм Багажник: 2144 л Тип двигателя:
                  Постоянный магнит / синхронный Зимний пакет: Обогрев руля,
                  первого и второго ряда, зеркал, тепловой насос (ТЭН)
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
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img
                src={logo}
                alt=""
                className="rounded float-start header__logo"
              />
            </div>
            <div className="col-6">
              <ul className="nav text-center">
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    Доставка и оплата
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    Наши партнеры
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <a href="#" className="header__phone">
                <img src={phone} alt="" className="rounded mx-auto d-block" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="cars">
        <div className="container">
          <h2 className="cars__suptitle my-3">
            Автомобили по всему Казахстану и СНГ Режим: {filterState}
          </h2>
          <h1 className="cars__title my-3">Электромобили</h1>
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
          <div className="cars__list">
            <div className="row gy-3">
              {inStockMode
                ? mapToCarsFilter
                : state.cars.map((car) => {
                    if (car.inStock) {
                      return (
                        <div className="col-sm-6">
                          <div className="card p-3">
                            <div className="card-body">
                              <div className="card__title">
                                <div className="card__name_">
                                  <img src={carsLogo} alt="" />
                                  <span className="card__name mx-2">
                                    {car.name} gasgas
                                  </span>
                                </div>
                                <div className="card__price text-end">
                                  {car.price}
                                </div>
                              </div>
                              <div className="card__info">
                                <img className="" src={cars} alt="" />
                                <div className="row">
                                  <div className="col-6">
                                    <img src={ico1} alt="" />
                                    <span className="card__desk">
                                      Разгон до 100 км/ч <br />
                                      <span className="card__desk-a">
                                        {car.desk.desk1}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="col-6">
                                    <img src={ico1} alt="" />
                                    <span className="card__desk">
                                      Разгон до 100 км/ч <br />
                                      <span className="card__desk-a">
                                        {car.desk.desk2}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="col-6">
                                    <img src={ico1} alt="" />
                                    <span className="card__desk">
                                      Разгон до 100 км/ч <br />
                                      <span className="card__desk-a">
                                        {car.desk.desk3}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="col-6">
                                    <img src={ico1} alt="" />
                                    <span className="card__desk">
                                      Разгон до 100 км/ч <br />
                                      <span className="card__desk-a">
                                        {car.desk.desk4}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="card__button">
                                <button
                                  type="button"
                                  class="btn btn-success btn-lg "
                                >
                                  Заказать
                                </button>
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  type="button"
                                  class="btn btn-outline-secondary btn-lg mx-4 my-4"
                                >
                                  Подробнее
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
            </div>
          </div>
        </div>
      </section>
      <section className="stamps">
        <div className="container">
          <div className="stamps__inner"></div>
        </div>
      </section>
      <footer className="footer mt-5">
        <div className="container">
          <div className="footer__inner">
            <ul className="nav my-4">
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  Каталог
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  В наличии
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  Доставка и оплата
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Наши партнеры
                </a>
              </li>
            </ul>
            <div className="my-4">
              <button type="button" class="btn btn-dark btn-lg text-center">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
