import React, { useEffect, useState } from "react";
import perfumeService from "../../services/perfumeService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddPerfumeComponent = () => {
  const [nombre, setNombre] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const { isbn } = useParams();
  const savePerfume = (e) => {
    e.preventDefault();
    const perfume = { nombre, modelo, marca, precio, stock };

    // -----------------------------------------------------------------------------------//

    if (isbn) {
      perfumeService
        .updatePerfume(isbn, perfume)
        .then((response) => {
          console.log(response.data);
          navigate("/perfumes");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      perfumeService
        .createPerfume(perfume)
        .then((response) => {
          console.log(response.data);
          navigate("/perfumes");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    /* perfumeService
      .createPerfume(perfume)
      .then((response) => {
        console.log(response.data);
        navigate("/perfumes");
      })
      .catch((error) => {
        console.log(error);
      });*/
  };

  useEffect(() => {
    if (isbn) {
      perfumeService
        .getPerfumeById(isbn)
        .then((response) => {
          setNombre(response.data.nombre);
          setModelo(response.data.modelo);
          setMarca(response.data.marca);
          setPrecio(response.data.precio);
          setStock(response.data.stock);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isbn]);

  const tittle = () => {
    if (isbn) {
      return <h2 className="text-center">Actualizar perfume</h2>;
    } else {
      return <h2 className="text-center">Agregar perfume</h2>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">{tittle()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    placeholder="Digite nombre"
                    name="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">modelo</label>
                  <input
                    type="text"
                    placeholder="Digite modelo"
                    name="modelo"
                    className="form-control"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Marca</label>
                  <input
                    type="text"
                    placeholder="Digite marca"
                    name="marca"
                    className="form-control"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Precio</label>
                  <input
                    type="number"
                    placeholder="Digite precio"
                    name="precio"
                    className="form-control"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    placeholder="Digite Stock"
                    name="stock"
                    className="form-control"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => savePerfume(e)}
                >
                  Guardar
                </button>
                &nbsp;&nbsp;
                <Link to="/perfumes" className="btn btn-danger">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPerfumeComponent;
