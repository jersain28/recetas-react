import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import FavoritosPage from "./views/FavoritosPage";
import IndexPage from "./views/indexPage";


export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<IndexPage />}/>
        <Route path="/favoritos" element={<FavoritosPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}