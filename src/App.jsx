import "./App.scss";
import React from "react";
import logo from "./common/logo.png";
import phone from "./common/phone.png";
import ico1 from "./common/ico1.png";
import ico2 from "./common/ico2.png";
import ico3 from "./common/ico3.png";
import ico4 from "./common/ico4.png";
import cars from "./common/cars.png";
import carsLogo from "./common/carsLogo.png";
// or less ideally
function App() {
  return (
    <div className="App">
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
            Автомобили по всему Казахстану и СНГ
          </h2>
          <h1 className="cars__title my-3">Электромобили</h1>
          <div className="cars__buttons my-4">
            <button className="btn btn-success btn-lg">В наличии</button>
            <button className="btn btn-success btn-lg">Электромобили</button>
            <button className="btn btn-success btn-lg">Кроссоверы</button>

            <button className="btn btn-success btn-lg">Седаны</button>
            <button className="btn btn-success btn-lg">Минивэны</button>
          </div>
          <div className="cars__list">
            <div className="row gy-3">
              <div className="col-sm-6">
                <div className="card p-3">
                  <div className="card-body">
                    <div className="card__title">
                      <div className="card__name_">
                        <img src={carsLogo} alt="" />
                        <span className="card__name mx-2">Zeekr001</span>
                      </div>
                      <div className="card__price text-end">от 100 000 тг</div>
                    </div>
                    <div className="card__info">
                      <img className="" src={cars} alt="" />
                      <div className="row">
                        <div className="col-6">
                          <img src={ico1} alt="" />
                          <span className="card__desk">
                            Разгон до 100 км/ч <br />
                            <span className="card__desk-a">3.8 секунды</span>
                          </span>
                        </div>
                        <div className="col-6">
                          <img src={ico1} alt="" />
                          <span className="card__desk">
                            Разгон до 100 км/ч <br />
                            <span className="card__desk-a">3.8 секунды</span>
                          </span>
                        </div>
                        <div className="col-6">
                          <img src={ico1} alt="" />
                          <span className="card__desk">
                            Разгон до 100 км/ч <br />
                            <span className="card__desk-a">3.8 секунды</span>
                          </span>
                        </div>
                        <div className="col-6">
                          <img src={ico1} alt="" />
                          <span className="card__desk">
                            Разгон до 100 км/ч <br />
                            <span className="card__desk-a">3.8 секунды</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card__button">
                    <button type="button" class="btn btn-success btn-lg ">Заказать</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg mx-4 my-4">Подробнее</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stamps">
        <div className="container">
          <div className="stamps__inner"></div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info"></div>
            <div className="footer__phone"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
