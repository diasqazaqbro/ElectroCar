import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="footer__inner">
          <ul className="nav my-4">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Каталог
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                В наличии
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Доставка и оплата
              </a>
            </li>
            <li className="nav-item">
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
  );
};

export default Footer;
