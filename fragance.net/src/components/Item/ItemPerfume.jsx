import { Link } from "react-router-dom";
import imagenes from "../../assets/imagenes";

const ItemPerfume = ({ perfume }) => {
  if (!perfume) {
    return <div>No hay datos de perfume disponibles</div>;
  }
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
    <div className="card cardProducto">
      <img
        src={isbnToImage[perfume.isbn] || imagenes.img11}
        alt="Perfume"
        style={{ maxWidth: "100px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{perfume.nombre}</h5>
        <p className="card-text">Marca: {perfume.marca}</p>
        <p className="card-text">Modelo: {perfume.modelo}</p>
        <p className="card-text">
          ${new Intl.NumberFormat("de-DE").format(perfume.precio)}
        </p>
        <p className="card-text">Stock: {perfume.stock}</p>

        <button className="btn btn-dark">
          <Link className="nav-link" to={`/perfume/${perfume.isbn}`}>
            Ver Producto
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ItemPerfume;
