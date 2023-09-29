import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar/Navbar";

import { CartContextPerfumeProvider } from "../context/CartContextPerfume";
import Checkout from "./Checkout/Checkout";
import ListPerfumesComponents from "./ListPerfumesComponents";
import AddPerfumeComponent from "./AddPerfume/AddPerfumeComponent";
import ItemListContainerPerfume from "./ItemListContainer/ItemListContainerPerfume";
import ItemDetailContainerPerfume from "./ItemDetailContainer/ItemDetailContainerPerfume";
import CartPerfume from "./Cart/CartPerfume";
import MyCarrousel from "./Carrousel/MyCarrousel";
import FooterPerfume from "./Footer/footerPerfume";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextPerfumeProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainerPerfume />} />

            <Route
              path="/perfume/:isbn"
              element={<ItemDetailContainerPerfume />}
            />
            <Route path="/cart" element={<CartPerfume />} />
            <Route
              path="/modelo/:modelo"
              element={<ItemListContainerPerfume />}
            />
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="/perfumes"
              element={<ListPerfumesComponents />}
            ></Route>
            <Route
              path="/add-perfume"
              element={<AddPerfumeComponent />}
            ></Route>
            <Route
              path="/edit-perfume/:isbn"
              element={<AddPerfumeComponent />}
            ></Route>
          </Routes>
          <FooterPerfume />
          <ToastContainer />
        </CartContextPerfumeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
