import React, { useContext } from "react";
import { CartContextPerfume } from "../../context/CartContextPerfume";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ordenService from "../../services/ordenService";
import cartPerfume from "../Cart/CartPerfume";
import perfumeService from "../../services/perfumeService";
const Checkout = () => {
  const datosFormulario = React.useRef();
  let navigate = useNavigate();
  const { cartPerfume, emptyCart, totalPrice, setCartPerfume } =
    useContext(CartContextPerfume);

  const consultarFormulario = async (e) => {
    e.preventDefault();
    const datForm = new FormData(datosFormulario.current);
    const nuevosValores = Object.fromEntries(datForm);

    // Reducir el stock de los perfumes en el servidor
    for (const perfume of cartPerfume) {
      try {
        const updatedStock = perfume.stock - perfume.cant;
        const response = await perfumeService.updateStockPerfume(
          perfume.isbn,
          updatedStock
        );
        console.log("Stock actualizado:", response.data);

        const updatedCart = cartPerfume.map((item) => {
          if (item.isbn === perfume.isbn) {
            return {
              ...item,
              stock: updatedStock,
            };
          }
          return item;
        });
        setCartPerfume(updatedCart);
      } catch (error) {
        console.error("Error al actualizar el stock:", error);
      }
    }

    // Crear la orden de compra en el servidor
    const cliente = {
      nombre: nuevosValores.nombre,
      apellido: nuevosValores.apellido,
      email: nuevosValores.email,
      dni: nuevosValores.dni,
      celular: nuevosValores.celular,
      direccion: nuevosValores.direccion,
    };

    function getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    const nuevaOrdenCompra = {
      perfumes: cartPerfume.map((ItemPerfume) => ({
        isbn: ItemPerfume.isbn,
        cantidad: ItemPerfume.cant,
      })),
      total: totalPrice(),
      cliente,
      nombreCliente: nuevosValores.nombre,
      fecha: getCurrentDate(),
      apellidoCliente: nuevosValores.apellido,
      emailCliente: nuevosValores.email,
    };

    try {
      const response = await ordenService.createOrdenCompra(nuevaOrdenCompra);
      if (response.status === 200) {
        toast.success("Orden de compra creada con éxito.");
        emptyCart();
        navigate("/");
      } else {
        toast.error("Error al crear la orden de compra.");
      }
    } catch (error) {
      toast.error("Error al crear la orden de compra.");
      console.error("Error al crear la orden de compra:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input type="text" className="form-control" name="apellido" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="dni" className="form-label">
            DNI
          </label>
          <input type="number" className="form-control" name="dni" />
        </div>
        <div className="mb-3">
          <label htmlFor="celular" className="form-label">
            Numero telefonico
          </label>
          <input type="number" className="form-control" name="celular" />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección
          </label>
          <input type="text" className="form-control" name="direccion" />
        </div>
        <button type="submit" className="btn btn-primary">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
