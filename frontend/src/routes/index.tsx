import { Route, Routes } from "react-router-dom";
import ListarCategorias from "../pages/categorias/listar-categorias";

export default function AppRoutes(){

    return(

        <Routes>
            {/* rota principal */}
            <Route path="/" element={<h1>Página Inicial</h1>} />

            <Route path="/categorias" element={<ListarCategorias />} />           

        </Routes>
    );
}