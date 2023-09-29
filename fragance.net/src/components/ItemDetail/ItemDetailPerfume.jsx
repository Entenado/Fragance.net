import { useContext } from "react";
import ItemCount from "./../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContextPerfume } from "../../context/CartContextPerfume";
import imagenes from "../../assets/imagenes";

const ItemDetailPerfume = ({ perfume }) => {
  const { isInCart, addItem } = useContext(CartContextPerfume);

  const onAdd = (contador) => {
    console.log(perfume);
    console.log(contador);
    addItem(perfume, contador);
  };

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
    <div className="row g-0">
      <img
        src={isbnToImage[perfume.isbn] || imagenes.img11}
        alt="Perfume"
        style={{ maxWidth: "100px" }}
      />
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{perfume.nombre}</h5>
          <p className="card-text">Modelo: {perfume.modelo}</p>
          <p className="card-text">Marca: {perfume.marca}</p>
          <p className="card-text">Precio: ${perfume.precio}</p>
          <p className="card-text">Stock: {perfume.stock}</p>
          <ItemCount stock={perfume.stock} onAdd={onAdd} /> <br />
          <button className="btn btn-secondary">
            <Link to="/cart" className="nav-link">
              Ir al carrito
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPerfume;
