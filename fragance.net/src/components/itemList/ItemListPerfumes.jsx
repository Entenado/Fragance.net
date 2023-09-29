import React from "react";
import ItemPerfume from "./../Item/ItemPerfume";

const ItemListPerfumes = ({ perfumes }) => {
  console.log("Perfumes en ItemListPerfumes:", perfumes);
  return (
    <>
      {perfumes.map((perfume) => (
        <ItemPerfume key={perfume.isbn} perfume={perfume} />
      ))}
    </>
  );
};

export default ItemListPerfumes;
