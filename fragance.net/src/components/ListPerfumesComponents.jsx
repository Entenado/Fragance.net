import React, { useEffect, useState } from "react";
import PerfumeService from "../services/perfumeService";
import { Link } from "react-router-dom";
import perfumeService from "../services/perfumeService";
import imagenes from "../assets/imagenes";

const ListPerfumesComponents = () => {
  const [perfumes, setPerfumes] = useState([]);

  const isbnToImage = {
    1: imagenes.img1,
    2: imagenes.img2,
  };

  useEffect(() => {
    listarPerfumes();
  }, []);

  const listarPerfumes = () => {
    PerfumeService.getAllPerfumes()
      .then((response) => {
        console.log("Datos de perfumes recibidos:", response.data);
        setPerfumes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePerfume = (perfumeIsbn) => {
    perfumeService
      .deletePerfume(perfumeIsbn)
      .then((response) => {
        listarPerfumes();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="perfumeContainer">
      <h2 className="text-center">Lista de perfumes</h2>
      <Link to="/add-perfume" className="btn btn-primary mb-2">
        Agregar Perfume
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>isbn</th>
            <th>nombre</th>
            <th>modelo</th>
            <th>marca</th>
            <th>precio</th>
            <th>stock</th>
            <th>imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {perfumes.map((perfume) => (
            <tr key={perfume.isbn}>
              <td>{perfume.isbn}</td>
              <td>{perfume.nombre}</td>
              <td>{perfume.modelo}</td>
              <td>{perfume.marca}</td>
              <td>{perfume.precio}</td>
              <td>{perfume.stock}</td>
              <td>
                <img
                  src={isbnToImage[perfume.isbn] || imagenes.img3}
                  alt="Perfume"
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-perfume/${perfume.isbn}`}
                >
                  Actualizar
                </Link>
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-danger"
                  onClick={() => deletePerfume(perfume.isbn)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPerfumesComponents;
