import Button from "./Button";
import { useGlobalContext } from "../context/context";
import Image from "next/image";

const Cart = () => {
  const { cartItems, setCartItems, total } = useGlobalContext();
  const deleteItem = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };
  return (
    <div
      className="cart-container"
      style={cartItems.length === 0 ? { height: "200px" } : null}
    >
      <header>
        <h4>Cart</h4>
      </header>
      <div>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((cartItem) => (
              <article className="cartitem flex-ac-jb" key={cartItem.id}>
                <div className="flex-ac">
                  <Image
                    src={cartItem.img}
                    height={40}
                    width={40}
                    alt="product image"
                  />
                  <div className="cartitem--info">
                    <h5>{cartItem.title}</h5>
                    <h5 className="cartitem--price">
                      ${cartItem.price} x {total == 0 ? 1 : total}
                      <span> ${total * cartItem.price}</span>
                    </h5>
                  </div>
                </div>
                <button onClick={() => deleteItem(cartItem.id)}>
                  <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                      />
                    </defs>
                    <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                  </svg>
                </button>
              </article>
            ))}
            <Button title="Checkout" style="checkout-btn" />
          </div>
        ) : (
          <div
            className="flex-ac-jc"
            style={cartItems.length === 0 ? { margin: "3rem" } : null}
          >
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
