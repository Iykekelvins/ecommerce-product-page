import Image from "next/image";
import Button from "./Button";
import appSvgs from "../public/appSvgs";
import { useGlobalContext } from "../context/context";
import images from "../public/images";
import { useEffect } from "react";
import { ProductImages } from "./index";

const ProductInfo = () => {
  const {
    amount,
    increase,
    total,
    decrease,
    clearAmount,
    cartItems,
    setCartItems,
    showLightBox,
    setShowLightbox,
  } = useGlobalContext();

  const addToCart = () => {
    const details = {
      id: 1,
      title: "Fall Limited Edition Sneakers",
      img: images.imageOne,
      price: "125.00",
    };
    //Check if an object already has id of 1.
    if (cartItems.some((obj) => obj.id === 1)) {
      return null;
    } else {
      setCartItems([...cartItems, details]);
    }
  };

  useEffect(() => {
    //If total cart items is 0, set the cart list empty.
    if (total == 0) {
      setCartItems([]);
    }
  }, [total]);

  return (
    <article className="product--info">
      {showLightBox && (
        <div className="light-box flex-ac-jc">
          <div className="light-box--container">
            <button
              className="close-btn"
              onClick={() => setShowLightbox(false)}
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <ProductImages btn />
          </div>
        </div>
      )}
      <h4>Sneaker Company</h4>

      <h2>
        Fall Limited Edition <br /> Sneakers
      </h2>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="price">
        <h3 className="flex-ac">
          $125.00 <span className="discount">50%</span>
        </h3>
        <h5> $250.00</h5>
      </div>

      <div className="flex-ac counter-container">
        <div className="counter flex-ac">
          <Button
            style="counter--toggle counter--dec"
            icon={
              <svg
                width="12"
                height="4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                    id="a"
                  />
                </defs>
                <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
              </svg>
            }
            onClick={amount === 0 ? null : () => decrease()}
          />
          <span>{amount}</span>
          <Button
            style="counter--toggle counter--inc"
            icon={
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                    id="b"
                  />
                </defs>
                <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
              </svg>
            }
            onClick={() => increase()}
          />
        </div>

        <Button
          title="Add to cart"
          style="add-btn"
          icon={
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
          }
          onClick={amount === 0 ? null : () => addToCart() && clearAmount()}
        />
      </div>

      {/*  
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
           .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); } */}
    </article>
  );
};

export default ProductInfo;
