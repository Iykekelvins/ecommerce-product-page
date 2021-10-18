import {
  useContext,
  useEffect,
  useReducer,
  createContext,
  useState,
} from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  total: 0,
  amount: 0,
  cart: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartItems, setCartItems] = useState(state.cart);
  const [showLightBox, setShowLightbox] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isPhoneNav, setIsPhoneNav] = useState(false);

  const increase = () => {
    dispatch({ type: "INCREASE" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const clearAmount = () => {
    dispatch({ type: "CLEAR_AMOUNT" });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        clearAmount,
        cartItems,
        showLightBox,
        setShowLightbox,
        showCart,
        setShowCart,
        setCartItems,
        isPhoneNav,
        setIsPhoneNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
