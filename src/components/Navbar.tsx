function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Farmácia</h1>
      <div className="space-x-4">
        <a href="/categorias" className="hover:underline">
          Categorias
        </a>
        <a href="/cadastrarcategoria" className="hover:underline">
          Cadastrar Categoria
        </a>
      </div>
    </nav>
  );
}
export default Navbar;