import { useContext, useState, createContext } from "react";

const CartContextPerfume = createContext([]);

const CartContextPerfumeProvider = (props) => {
  const [cartPerfume, setCartPerfume] = useState([]);

  const isInCart = (isbn) => {
    return cartPerfume.find((perf) => perf.isbn === isbn);
  };

  const addItem = (perfume, cantidad) => {
    if (isInCart(perfume.isbn)) {
      const indice = cartPerfume.findIndex(
        (perf) => perf.isbn === perfume.isbn
      );
      const aux = [...cartPerfume];
      aux[indice].cant = cantidad;
      setCartPerfume(aux);
    } else {
      const nuevoPerfume = {
        ...perfume,
        cant: cantidad,
      };

      setCartPerfume([...cartPerfume, nuevoPerfume]);
    }
    console.log(cartPerfume);
  };

  const emptyCart = () => {
    return setCartPerfume([]);
  };

  const removeItem = (isbn) => {
    return setCartPerfume(cartPerfume.filter((perf) => perf.isbn !== isbn));
  };

  const getItemQuantity = () => {
    return cartPerfume.reduce((acum, perf) => acum + perf.cant, 0);
  };

  const totalPrice = () => {
    return cartPerfume.reduce(
      (acum, perf) => acum + perf.cant * perf.precio,
      0
    );
  };
  console.log(cartPerfume);
  return (
    <CartContextPerfume.Provider
      value={{
        cartPerfume,
        isInCart,
        addItem,
        emptyCart,
        removeItem,
        getItemQuantity,
        totalPrice,
        setCartPerfume,
      }}
    >
      {props.children}
    </CartContextPerfume.Provider>
  );
};

export { CartContextPerfumeProvider, CartContextPerfume };
