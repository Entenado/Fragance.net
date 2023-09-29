import ordenService from "../../services/ordenService";

/*const createOrdenCompra = async (cliente, preTotal, fecha) => {
  const nuevaOrden = await addDoc(ordenService.createOrdenCompra(nuevaOrden), {
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    email: cliente.email,
    dni: cliente.dni,
    celular: cliente.celular,
    direccion: cliente.direccion,
    fecha: fecha,
    precioTotal: preTotal,
  });

  return nuevaOrden;*/

const createOrdenCompra = async (cliente, preTotal, fecha) => {
  try {
    const nuevaOrden = {
      cliente,
      total: preTotal,
      fecha,
    };
    const response = await ordenService.createOrdenCompra(nuevaOrden);

    if (response.status === 200) {
      return response.data; // Devuelve la orden creada desde el servidor
    } else {
      throw new Error("Error al crear la orden de compra");
    }
  } catch (error) {
    console.error("Error al crear la orden de compra:", error);
    throw error;
  }
};

const getOrdenCompra = async (id) => {
  const item = await getDoc(doc(ordenService, "ordenCompra", id));
  const ordenCompra = { ...item.data(), id: item.id };
  return ordenCompra;
};

export default { createOrdenCompra, getOrdenCompra };
