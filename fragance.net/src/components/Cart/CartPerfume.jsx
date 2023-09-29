import { useContext } from "react";
import { CartContextPerfume } from "../../context/CartContextPerfume";
import { Link } from "react-router-dom";
import imagenes from "../../assets/imagenes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartPerfume = () => {
  const { cartPerfume, emptyCart, totalPrice, removeItem } =
    useContext(CartContextPerfume);
  const isbnToImage = {
    1: imagenes.img1,
    2: imagenes.img2,
    3: imagenes.img3,
    4: imagenes.img4,
    5: imagenes.img5,
    6: imagenes.img6,
    7: imagenes.img7,
    8: imagenes.img8,
    9: imagenes.img9,
    10: imagenes.img10,
  };

  return (
    <>
      {cartPerfume.length === 0 ? (
        <div className="text-center">
          <p>Tu carrito está vacío</p>
          <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          <Link to={"/"}>
            <br />
            <button className="btn btn-dark">Ir al inicio</button>
          </Link>
        </div>
      ) : (
        <div>
          {cartPerfume.map((perfume, indice) => (
            <div
              className="card mb-3"
              key={indice}
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={isbnToImage[perfume.isbn] || imagenes.img11}
                    alt="Perfume"
                    style={{ maxWidth: "100px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{perfume.nombre}</h5>
                    <p className="card-text">Cantidad: {perfume.cant}</p>
                    <p className="card-text">
                      Precio unitario: {perfume.precio}
                    </p>
                    <p className="card-text">
                      Subtotal: {perfume.precio * perfume.cant}
                    </p>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(perfume.isbn)}
                  >
                    Eliminar Producto
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <p>Total: {totalPrice()}</p>
            <button className="btn btn-danger" onClick={emptyCart}>
              Limpiar Carrito
            </button>
            <Link to="/checkout">
              <button className="btn btn-primary">Finalizar Compra</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPerfume;
