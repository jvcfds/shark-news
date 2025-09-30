import React from "react";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-shark-bg text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-shark-gold bg-shark-green2 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="SharkNews Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-extrabold text-shark-gold">
              SharkNews
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {["Tecnologia", "Negócios", "Ciência", "Cultura", "Esportes"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-shark-gold transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Notícia principal */}
        <article className="lg:col-span-2 bg-shark-green2 rounded-2xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&fit=crop"
            alt="Notícia principal"
            className="w-full h-[22rem] object-cover"
          />
          <div className="p-6">
            <span className="bg-shark-gold text-shark-bg text-xs px-3 py-1 rounded-full">
              DESTAQUE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold">
              Descoberta Revolucionária nos Oceanos Profundos
            </h2>
            <p className="mt-2 text-gray-300">
              Cientistas revelam ecossistema inexplorado a 4000 metros de
              profundidade com espécies nunca antes vistas.
            </p>
            <div className="mt-4 flex gap-6 text-xs text-gray-400">
              <span>📅 29/09/2025</span>
              <span>✍️ Maria Silva</span>
              <span>⏱️ 5 min de leitura</span>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="flex flex-col gap-4">
          {[
            {
              title: "Inteligência Artificial Supera Limites",
              text: "Novo modelo de IA demonstra capacidades de raciocínio nunca vistas anteriormente.",
            },
            {
              title: "Energia Sustentável Bate Recorde",
              text: "Painéis solares de nova geração alcançam 47% de eficiência em testes.",
            },
            {
              title: "Startup Brasileira Conquista o Mundo",
              text: "Empresa de biotecnologia recebe investimento bilionário internacional.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-shark-green3 shadow-md border-l-4 border-shark-gold hover:bg-shark-green2 transition"
            >
              <h3 className="text-lg font-bold text-shark-gold">{item.title}</h3>
              <p className="text-sm text-gray-200 mt-2">{item.text}</p>
            </div>
          ))}
        </aside>
      </section>

      {/* ÚLTIMAS NOTÍCIAS */}
      <section className="bg-shark-green1/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-shark-gold">
            Últimas Notícias
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Computação Quântica Alcança Marco Histórico",
                desc: "Pesquisadores conseguem manter qubits estáveis por tempo recorde, aproximando-nos da era da computação quântica prática.",
                img: "https://picsum.photos/seed/quantum/600/400",
              },
              {
                title: "Mercado Global em Transformação Digital",
                desc: "Análise revela que 85% das empresas Fortune 500 investiram pesadamente em IA e automação.",
                img: "https://picsum.photos/seed/office/600/400",
              },
              {
                title: "Novo Material Promete Revolucionar Eletrônicos",
                desc: "Descoberta de supercondutor em temperatura ambiente pode mudar completamente a indústria tecnológica mundial.",
                img: "https://picsum.photos/seed/lab/600/400",
              },
            ].map((item, i) => (
              <article
                key={i}
                className="rounded-xl overflow-hidden bg-shark-green2 shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
                  <a
                    href="#"
                    className="text-shark-gold font-semibold text-sm mt-4 inline-block"
                  >
                    Leia mais →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-shark-green2 py-12 border-t border-shark-gold">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <h4 className="text-shark-gold font-bold mb-3">Sobre Nós</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Nossa História</a></li>
              <li><a href="#">Equipe</a></li>
              <li><a href="#">Missão</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-shark-gold font-bold mb-3">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Tecnologia</a></li>
              <li><a href="#">Ciência</a></li>
              <li><a href="#">Negócios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-shark-gold font-bold mb-3">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Redes Sociais</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} SharkNews. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
