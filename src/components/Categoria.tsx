import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import { useCategorias } from "../hooks/useCategoria";
import type { Categoria } from "../model/Categoria";

type Props = ComponentProps<"div"> & {
  titulo: string;
  data: Categoria;
};

export function Categoria({ data, titulo, ...rest }: Props) {
  const { deletarCategoria } = useCategorias();

  return (
    <div
      className="flex flex-col w-[21.125rem] sm:w-[25.125rem] h-[13.875rem] rounded-lg bg-indigo-800"
      {...rest}
    >
      <h1 className="text-white text-2xl font-bold p-4.5">{titulo}</h1>

      <div className="bg-white px-4.5 py-7">
        <p className="text-2xl font-semibold">{data.nome}</p>
      </div>

      <div className="p-4.5 flex justify-center items-center gap-2">
        <PencilIcon
          className="text-white hover:opacity-80 transition ease-in cursor-pointer"
          size={28}
        />
        <TrashIcon
          className="text-white hover:opacity-80 transition ease-in cursor-pointer"
          size={28}
          onClick={() => deletarCategoria(data.id)}
        />
      </div>
    </div>
  );
}