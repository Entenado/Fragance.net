import { useState, useEffect } from "react";
import ItemListPerfumes from "../itemList/ItemListPerfumes.jsx";
import PerfumeService from "../../services/perfumeService.js";
import { useParams } from "react-router-dom";
import MyCarrousel from "./../Carrousel/MyCarrousel";

const ItemListContainerPerfume = () => {
  const [perfumes, setPerfumes] = useState([]);
  const { modelo } = useParams();
  console.log("Modelo:", modelo);

  useEffect(() => {
    console.log("Modelo:", modelo);
    listarPerfumes();
  }, [modelo]);

  const listarPerfumes = () => {
    if (modelo) {
      // Aquí puedes filtrar perfumes por categoría si es necesario
      PerfumeService.getAllPerfumes()
        .then((response) => {
          const perfumesList = response.data.filter(
            (perfume) =>
              perfume.modelo &&
              perfume.modelo.toLowerCase() === modelo.toLowerCase()
          );
          console.log("Perfumes en ItemListPerfumes:", perfumesList);
          setPerfumes(perfumesList);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Si no hay categoría específica, simplemente obtén todos los perfumes
      PerfumeService.getAllPerfumes()
        .then((response) => {
          console.log("Perfumes en ItemListPerfumes:", response.data);
          setPerfumes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <MyCarrousel />
      <ItemListPerfumes perfumes={perfumes} />{" "}
      {/* Pasa los perfumes como prop */}
    </div>
  );
};

export default ItemListContainerPerfume;
