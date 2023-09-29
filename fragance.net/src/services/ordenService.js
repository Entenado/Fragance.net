import axios from "axios";

const CLIENTE_BASE_REST_API_URL_OC = "http://localhost:8080/ordenes/compra";

class ordenService {
  createOrdenCompra(ordenCompra) {
    return axios.post(CLIENTE_BASE_REST_API_URL_OC, ordenCompra);
  }
}
export default new ordenService();
