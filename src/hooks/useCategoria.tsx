import { useContext } from "react";
import { CategoriaContext } from "../contexts/CategoriaContext";

export function useCategorias() {
  const context = useContext(CategoriaContext);

  return context;
}