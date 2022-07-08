import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import CHeader from "./components/Layout/CHeader";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    // <React.Fragment>
    // {cartIsShown && <Cart onClose={hideCartHandler} />}
    // <CHeader onShowCart={showCartHandler} />
    // <main>
    //   <Meals />
    // </main>
    // </React.Fragment>

    // we replaced the React.Fragment with CartProvider
    // component because all the child element requires the CartProvider component
    // which internally manages the state of items which are added in the cart.

    // Cart component needs that state to display items when the model is on
    // Header component needs that because we are showing the number of items added in the cart
    // Meals component needs that because we can add items to the cart shown here.

    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <CHeader onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
