import { useState, type FormEvent } from "react";
import { Input } from "../components/Input";
import { useCategorias } from "../hooks/useCategoria";
import { SpinnerIcon } from "@phosphor-icons/react";

export function CadastrarCategoria() {
  const { cadastrarCategoria, isLoading } = useCategorias();
  const [nome, setNome] = useState("");

  async function cadastrar(e: FormEvent) {
    e.preventDefault();

    try {
      await cadastrarCategoria({ nome });

      alert("Cadastrado com Sucesso");
    } catch (erro) {
      console.error(erro);
    }
  }

  return (
    <div className="flex flex-col h-screen items-center py-8">
      <h1 className="font-regular text-3xl md:text-5xl mb-12">
        Cadastrar categoria
      </h1>

      <form className="flex flex-col gap-4" onSubmit={cadastrar}>
        <Input
          titulo="Categoria"
          placeholder="Digite a categoria..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button
          className="w-[20rem] sm:w-[23rem] bg-indigo-800 rounded-lg py-3 text-xl text-white font-bold hover:bg-indigo-900 transition-colors cursor-pointer disabled:opacity-50 self-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              {" "}
              <SpinnerIcon size={22} className="text-white animate-spin" />
            </span>
          ) : (
            <>Cadastrar</>
          )}
        </button>
      </form>
    </div>
  );
}