import React from "react";
import logo from "../../common/logo.png";
import phone from "../../common/phone.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <img
              src={logo}
              alt=""
              className="rounded float-start header__logo"
            />
          </div>
          {/* <div className="col-6">
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
          </div> */}
 
        </div>
      </div>
    </header>
  );
};

export default Header;
