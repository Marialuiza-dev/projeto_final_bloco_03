import { Route, Routes } from "react-router-dom"
import { AppLayout } from "../components/AppLayout"
import Home from "../pages/Home"
import { NotFound } from "../components/NotFound"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}