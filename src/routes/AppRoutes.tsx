import { Route, Routes } from "react-router-dom"
import { AppLayout } from "../components/AppLayout"
import Home from "../pages/Home"
import { NotFound } from "../components/NotFound"
import { Categorias } from "../pages/Categorias"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/categorias" element={<Categorias />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}