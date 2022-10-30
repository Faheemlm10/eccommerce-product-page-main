import "./App.css";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import dude from "./images/image-avatar.png";
import productOneS from "./images/image-product-1-thumbnail.jpg";
import productOneL from "./images/image-product-1.jpg";
import productTwoS from "./images/image-product-2-thumbnail.jpg";
import productTwoL from "./images/image-product-2.jpg";
import productThreeS from "./images/image-product-3-thumbnail.jpg";
import productThreeL from "./images/image-product-3.jpg";
import productFourS from "./images/image-product-4-thumbnail.jpg";
import productFourL from "./images/image-product-4.jpg";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import iconCart from "./images/icon-cart.svg";
import close from "./images/icon-close.svg";
import next from "./images/icon-next.svg";
import previous from "./images/icon-previous.svg";
import cross from "./images/icon-close.svg";
import deleteIcon from "./images/icon-delete.svg";
import menu from "./images/icon-menu.svg";
import { useState } from "react";

function App() {
  const [select, setSelect] = useState(true);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [number, setNumber] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);
  const [orderNumber, setOrderNumber] = useState(false);
  const [orders, setOrders] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderNumber1, setOrderNumber1] = useState(false);
  const [orders1, setOrders1] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  const lightBoxFunc = () => {
    setShowLightBox(!showLightBox);
  };
  const previousFunc = () => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    }
    if (slideIndex === 1) {
      setSlideIndex(4);
    }
  };

  const nextFunc = () => {
    if (slideIndex < 4) {
      setSlideIndex(slideIndex + 1);
    }

    if (slideIndex === 4) {
      setSlideIndex(1);
    }
  };
  const decrementFunction = () => {
    if (number > 0) {
      setNumber((number) => number - 1);
    }
  };

  const incrementFunction = () => {
    setNumber((number) => number + 1);
  };

  const changeFunclight = () => {
    setSlideIndex(1);
  };
  const changeFunc1light = () => {
    setSlideIndex(2);
  };
  const changeFunc2light = () => {
    setSlideIndex(3);
  };
  const changeFunc3light = () => {
    setSlideIndex(4);
  };

  const changeFunc = () => {
    setSelect(true);
    setSelect1(false);
    setSelect2(false);
    setSelect3(false);
  };
  const changeFunc1 = () => {
    setSelect(false);
    setSelect1(true);
    setSelect2(false);
    setSelect3(false);
  };
  const changeFunc2 = () => {
    setSelect(false);
    setSelect1(false);
    setSelect2(true);
    setSelect3(false);
  };
  const changeFunc3 = () => {
    setSelect(false);
    setSelect1(false);
    setSelect2(false);
    setSelect3(true);
  };

  const Orderfunc1 = () => {
    if (number > 0) {
      setOrderNumber1(true);
      setOrderNumber(true);
      setOrders1(number);
      setOrders(number);
    }
  };

  const Orderfunc = () => {
    if (number > 0) {
      setOrderNumber(true);
      setOrderNumber1(true);
      setOrders(number);
      setOrders1(number);
    }
  };

  const cartFunc = () => {
    setCartOpen(!cartOpen);
  };

  const deletefunc = () => {
    setOrderNumber(false);
    setNumber(0);
    setOrderNumber1(false);
    setNumber(0);
  };

  const closenavfunc = () => {
    setOpenNav(false);
  };

  const opennavfunc = () => {
    setOpenNav(true);
  };
  return (
    <div>
      {/* --------------------------------------------------------- */}

      <nav>
        <div className="nav-first">
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="nav-second">
          <div className="cart" onClick={cartFunc}>
            <img src={cart} alt="" />
            {orderNumber && <div className="noOfOrders">{orders}</div>}
            {cartOpen && (
              <div className="checkout">
                <div className="checkout-first"> Cart</div>
                <div className="line-1"></div>
                {!orderNumber && (
                  <div className="empty">Your cart is Empty</div>
                )}

                {orderNumber && (
                  <div>
                    <div className="checkout-list">
                      <div className="checkout-img">
                        <img src={productOneS} alt="" />
                      </div>
                      <div className="checkout-info">
                        <p>Fall limited Edition Sneakers</p>
                        <div>
                          <p>$125.00 x {orders}</p>
                          <p className="total">${125 * orders}</p>
                        </div>
                      </div>

                      <div className="deleteIconimg" onClick={deletefunc}>
                        <img src={deleteIcon} alt="" />
                      </div>
                    </div>
                    <div className="button">
                      <button>Checkout</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="dude">
            <img src={dude} alt="" />
          </div>
        </div>
      </nav>
      <div className={openNav ? "navbar " : "navbar close"}>
        <div className="closenav" onClick={closenavfunc}>
          <img src={cross} alt="" />
        </div>
        <div className="lists">
          <div>Collections</div>
          <div>Men</div>
          <div>Women</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className="small-nav">
        <div className="first" onClick={opennavfunc}>
          <img src={menu} alt="" srcset="" />
        </div>

        <div className="second">
          <img src={logo} alt="" />
        </div>

        <div className="cart-sm" onClick={cartFunc}>
          <img src={cart} alt="" />
          {orderNumber1 && <div className="noOfOrders1">{orders1}</div>}
          {cartOpen && (
            <div>
              <div className="checkout-sm">
                <div className="cartTitle1">Cart</div>
                <div className="line-1"></div>
                {!orderNumber1 && (
                  <div className="empty">Your cart is Empty</div>
                )}
                {orderNumber1 && (
                  <div>
                    <div className="checkout-list">
                      <div className="checkout-img">
                        <img src={productOneS} alt="" />
                      </div>
                      <div className="checkout-info">
                        <p>Fall limited Edition Sneakers</p>
                        <div>
                          <p>$125.00 x {orders1}</p>
                          <p className="total">${125 * orders1}</p>
                        </div>
                      </div>

                      <div className="deleteIconimg" onClick={deletefunc}>
                        <img src={deleteIcon} alt="" />
                      </div>
                    </div>
                    <div className="button">
                      <button>Checkout</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="dude-sm">
          <img src={dude} alt="" />
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className="line"></div>
      {/* --------------------------------------------------------- */}
      <div className="main">
        <div className="main-first">
          <div className="previous-s" onClick={previousFunc}>
            <img src={previous} alt="" srcset="" />
          </div>
          <div className="forslide">
            {slideIndex === 1 ? <img src={productOneL} alt="" /> : null}
            {slideIndex === 2 ? <img src={productTwoL} alt="" /> : null}
            {slideIndex === 3 ? <img src={productThreeL} alt="" /> : null}
            {slideIndex === 4 ? <img src={productFourL} alt="" /> : null}
          </div>
          <div className="bigImage" onClick={lightBoxFunc}>
            {select ? <img src={productOneL} alt="" /> : null}
            {select1 ? <img src={productTwoL} alt="" /> : null}
            {select2 ? <img src={productThreeL} alt="" /> : null}
            {select3 ? <img src={productFourL} alt="" /> : null}
          </div>
          <div className="next-s" onClick={previousFunc}>
            <img src={next} alt="" srcset="" />
          </div>
          <div className="listImages">
            <div>
              <img
                src={productOneS}
                onClick={changeFunc}
                className={select ? "picked" : null}
                alt=""
              />
            </div>
            <div>
              <img
                src={productTwoS}
                onClick={changeFunc1}
                className={select1 ? "picked" : null}
                alt=""
              />
            </div>
            <div>
              <img
                src={productThreeS}
                onClick={changeFunc2}
                className={select2 ? "picked" : null}
                alt=""
              />
            </div>
            <div>
              <img
                src={productFourS}
                onClick={changeFunc3}
                className={select3 ? "picked" : null}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-second">
          <div className="info">
            <p className="title-small">SNEAKER COMPANY</p>
            <h1 className="title">Fall Limited Edition Sneakers</h1>

            <p className="info-3">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="price">
            <h1>$125.00</h1>
            <div> 50%</div>
          </div>
          <div>
            <p className="full">$250.00</p>
          </div>
          <div className="last">
            <div className="decrement" onClick={decrementFunction}>
              <img src={minus} />
            </div>
            <div className="middle"> {number} </div>
            <div className="increment" onClick={incrementFunction}>
              <img src={plus} />
            </div>
            <div className="cart-2" onClick={Orderfunc}>
              <img src={cart} alt="" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div className="cart-22" onClick={Orderfunc1}>
            <img src={cart} alt="" />
            <p>Add to Cart</p>
          </div>
        </div>
      </div>

      <div className={showLightBox ? "lightbox active" : "lightbox"}>
        <div className="lightbox-first">
          <div className="cross" onClick={lightBoxFunc}>
            <img src={cross} className="cross-img" alt="" />
          </div>
          <div className="previous" onClick={previousFunc}>
            <img src={previous} alt="" srcset="" />
          </div>
          {slideIndex === 1 ? <img src={productOneL} alt="" /> : null}
          {slideIndex === 2 ? <img src={productTwoL} alt="" /> : null}
          {slideIndex === 3 ? <img src={productThreeL} alt="" /> : null}
          {slideIndex === 4 ? <img src={productFourL} alt="" /> : null}

          <div className="next" onClick={nextFunc}>
            <img src={next} alt="" />
          </div>
        </div>
        <div className="lightbox-second">
          <div className=" listImages-1">
            <div>
              <img
                src={productOneS}
                onClick={changeFunclight}
                className={slideIndex === 1 ? "picked" : null}
                alt=""
              />
            </div>
            <div>
              <img
                src={productTwoS}
                onClick={changeFunc1light}
                className={slideIndex === 2 ? "picked" : null}
                alt=""
              />
            </div>
            <div>
              <img
                src={productThreeS}
                onClick={changeFunc2light}
                className={slideIndex === 3 ? "picked" : null}
                alt=""
              />
            </div>
            <div>
              <img
                src={productFourS}
                onClick={changeFunc3light}
                className={slideIndex === 4 ? "picked" : null}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
