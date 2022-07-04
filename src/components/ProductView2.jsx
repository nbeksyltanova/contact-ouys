import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { remove } from "../redux/product-modal/productModalSlice";

import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

const ProductView2 = (props) => {
  const dispatch = useDispatch();

  let ases = props.ases;

  if (ases === undefined)
    ases = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",

      description: "",
    };

  const [previewImg, setPreviewImg] = useState(ases.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(ases.image01);
    setQuantity(1);
    setColor(undefined);
  }, [ases]);

  const check = () => {
    if (color === undefined) {
      alert("Пожалуйста, выберите цвет!");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      let newItem = {
        slug: ases.slug,
        color: color,

        price: ases.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        alert("Успешно добавлен корзину");
      } else {
        alert("Недобавлень");
      }
    }
  };

  const goToCart = () => {
    if (check()) {
      let newItem = {
        slug: ases.slug,
        color: color,

        price: ases.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        dispatch(remove());
        props.history.push("/cart");
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(ases.image01)}
          >
            <img src={ases.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(ases.image02)}
          >
            <img src={ases.image02} alt="" />
          </div>
          {/* Добавила */}
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Подробное информация</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: ases.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Свернуть" : "Читать дальше"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{ases.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(ases.price)} сом
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Цвет</div>
          <div className="product__info__item__list">
            {ases.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        {/*
         */}
        {/*  */}
        <div className="ty">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(ases.image01)}
          >
            <img width={50} src={ases.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(ases.image02)}
          >
            <img width={50} src={ases.image02} alt="" />
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Количество</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Добавить в корзину</Button>
          <Button onClick={() => goToCart()}>Купить</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Подробная информация</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: ases.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Свернуть " : "Читать дальше"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView2.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView2);
