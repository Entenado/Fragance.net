import axios from "axios";

const CLIENTE_BASE_REST_API_URL = "http://localhost:8080/perfume/perfumes";

class PerfumeService {
  getAllPerfumes() {
    return axios.get(CLIENTE_BASE_REST_API_URL);
  }

  createPerfume(perfume) {
    return axios.post(CLIENTE_BASE_REST_API_URL, perfume);
  }

  getPerfumeById(perfumeIsbn) {
    return axios.get(CLIENTE_BASE_REST_API_URL + "/" + perfumeIsbn);
  }

  updatePerfume(perfumeIsbn, perfume) {
    return axios.put(CLIENTE_BASE_REST_API_URL + "/" + perfumeIsbn, perfume);
  }

  deletePerfume(perfumeIsbn) {
    return axios.delete(CLIENTE_BASE_REST_API_URL + "/" + perfumeIsbn);
  }

  updateStockPerfume(perfumeIsbn, nuevoStock) {
    return axios.put(
      `${CLIENTE_BASE_REST_API_URL}/${perfumeIsbn}/stock`,
      null,
      {
        params: {
          stock: nuevoStock,
        },
      }
    );
  }
}
export default new PerfumeService();
