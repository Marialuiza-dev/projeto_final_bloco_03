import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import Home from "../pages/Home";
import { NotFound } from "../components/NotFound";
import { Categorias } from "../pages/Categorias";
import { CadastrarCategoria } from "../pages/CadastrarCategoria";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/cadastrarcategoria" element={<CadastrarCategoria />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}