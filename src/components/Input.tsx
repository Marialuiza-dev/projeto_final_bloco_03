import type React from "react";

type Props = React.ComponentProps<"input"> & {
  titulo?: string;
};

export function Input({ titulo, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {titulo && (
        <legend className="block text-sm font-medium text-gray-700 mb-2">
          {titulo}
        </legend>
      )}

      <input
        type={type}
        className="w-[20rem] lg:w-[57rem] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-400 text-gray-900"
        {...rest}
      />
    </fieldset>
  );
}