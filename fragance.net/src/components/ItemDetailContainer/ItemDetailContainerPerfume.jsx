import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailPerfume from "../ItemDetail/ItemDetailPerfume";
import perfumeService from "../../services/perfumeService";

const ItemDetailContainerPerfume = () => {
  const [perfume, setPerfume] = useState([]);
  const { isbn } = useParams();

  useEffect(() => {
    const apiUrl = `/${isbn}`;
    console.log("API URL:", apiUrl);
    perfumeService
      .getPerfumeById(isbn)
      .then((response) => {
        setPerfume(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
      });
  }, []);

  return (
    <div>
      <div
        className=" card mb-5 container itemDetail"
        style={{ maxWidth: "400px" }}
      >
        <ItemDetailPerfume perfume={perfume} />
      </div>
    </div>
  );
};

export default ItemDetailContainerPerfume;
