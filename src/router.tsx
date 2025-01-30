import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritosPage from "./views/favoritosPage";
import IndexPage from "./views/indexPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage /> }/>
        <Route path='favoritos' element={<FavoritosPage /> }/>
        
      </Routes>
    </BrowserRouter>
  );
}