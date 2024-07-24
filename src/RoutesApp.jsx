import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Filme from "./pages/Filme/Filme";
import Favoritos from "./pages/Favoritos/Favoritos";

const RoutesApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<h1>Não encontrado</h1>} />
        </Routes>
    )
}

export default RoutesApp;
