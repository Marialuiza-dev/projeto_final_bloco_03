import { Categoria } from "../components/Categoria";
import { useCategorias } from "../hooks/useCategoria";

export function Categorias() {
  const { categorias} = useCategorias();

  return (
    <div className="container h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-items-center py-12">

      {categorias.map((categoria) => (
        <Categoria
          key={categoria.id}
          data={categoria}
          titulo="Categoria"
        />
      ))}
    </div>
  );
}