function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cyan-200 px-6">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12">
        
        {/* Lado esquerdo - Texto e botão */}
        <section className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Bem-vindo à <span className="text-green-600">Farmácia Torres</span>!
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-md leading-relaxed">
            Aqui você encontra os <strong>melhores produtos</strong> com os <strong>melhores preços</strong>. Qualidade, cuidado e confiança em um só lugar!
          </p>
          <button className="border border-blue-700 text-blue-700 font-semibold px-6 py-2 rounded hover:bg-blue-700 hover:text-white transition">
            Novo Produto
          </button>
        </section>

        {/* Lado direito - Imagem */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="https://i.imgur.com/jOOuVXv.png" 
            alt="Duas farmacêuticas atendendo no balcão" 
            className="w-full max-w-md"
          />
        </div>

      </div>
    </main>
  );
}

export default Home;