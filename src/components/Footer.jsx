import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Информация</div>
            <div className="footer__content">
              <p>Главная</p>
              <p>Акции</p>
              <p>Каталог</p>
              <p>Сделайт заказ</p>
            </div>
          </div>
          <div>
            <div className="footer__title">Что нас важно </div>
            <div className="footer__content">
              <p>
                <img className="img-1" src="/kach.svg" width={25} /> Качество
              </p>
              <p>
                <img className="img-2" src="/sor.svg" alt="" width={25} />
                Скорость
              </p>
              <p>
                <img className="img-3" src="/hand 1.svg" width={25} />
                Отвестность
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Соц. сети</div>
            <div className="footer__content con2">
              <img src="/telegtam.svg" />
              <img src="/ins.svg" />
              <img src="/em.svg" />
              <img src="/telegsvg.svg" />
            </div>

            <div className="tel2">
              <p className="tel-22">
                <img src="/tel2.svg" />
                <span>+375255990755</span>
              </p>
              <p>
                {" "}
                <img src="/carbon_time.svg" />
                <span> круглосуточно, без выходных</span>
              </p>
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p className="we">
              Ремесла нашего народа, через кыргызские узоры раскрывают
              внутреннюю сущность вещей и предметов роскоши, визуально
              визуализируют торжество нашей комфортной жизни.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
