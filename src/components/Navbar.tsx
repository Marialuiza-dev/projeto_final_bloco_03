function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Farmácia</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/produtos" className="hover:underline">Produtos</a>
      </div>
    </nav>
  );
}
export default Navbar;