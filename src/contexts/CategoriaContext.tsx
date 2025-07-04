import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Categoria } from "../model/Categoria";
import { api } from "../services/api";
import { AxiosError } from "axios";

type CategoriaContext = {
  isLoading: boolean;
  categorias: Categoria[];
  cadastrarCategoria: (data: Categoria) => Promise<void>;
  deletarCategoria: (id: number) => Promise<void>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CategoriaContext = createContext({} as CategoriaContext);

export function CategoriaProvider({ children }: { children: ReactNode }) {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function buscarCategorias() {
    try {
      setIsLoading(true);

      const resposta = await api.get("/categorias");
      setCategorias(resposta.data ?? []);
    } catch (erro) {
      console.error(erro);

      if (erro instanceof AxiosError) {
        return alert(erro.response?.data.message);
      }

      alert("Não foi possível carregar as categorias");
    } finally {
      setIsLoading(false);
    }
  }

  async function cadastrarCategoria(data: Categoria) {
    try {
      setIsLoading(true);
      await api.post("/categorias", data);
      buscarCategorias();
    } catch (erro) {
      alert("Não foi possível cadastrar a categoria! Tente Novamente");

      console.error(erro);
    } finally {
      setIsLoading(false);
    }
  }

  async function deletarCategoria(id: number) {
    if (
      window.confirm(
        "Deseja realmente excluir esta categoria? Isso pode afetar os produtos cadastrados"
      )
    ) {
      try {
        setIsLoading(true);
        await api.delete(`/categorias/${id}`);
        buscarCategorias();
      } catch (erro) {
        alert("Não foi possível excluir a categoria! Tente Novamente");

        console.error(erro);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <CategoriaContext.Provider
      value={{
        isLoading,
        categorias,
        cadastrarCategoria,
        deletarCategoria,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
}