import { Helmet } from "react-helmet-async";

const Sobre = () => {
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/sobre` : "/sobre";

  return (
    <>
      <Helmet>
        <title>Sobre a MultiServ | Soluções Empresariais</title>
        <meta name="description" content="Conheça a MultiServ: fiscalização de obras, TI, consultoria, aluguer e comércio especializado. Soluções completas para empresas." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <header className="pt-28 pb-12 bg-gradient-to-b from-background to-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">Sobre a MultiServ</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Empresa multidisciplinar que presta serviços e fornece bens para impulsionar negócios com eficiência, tecnologia e confiança.
          </p>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Quem somos</h2>
            <p className="text-muted-foreground">
              A MultiServ integra equipas especializadas em fiscalização de obras públicas, consultoria e programação informática,
              gestão de equipamentos e operações administrativas, oferecendo soluções ponta-a-ponta para organizações de qualquer dimensão.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border service-card group">
                <h3 className="text-xl font-semibold mb-3">Prestadores de Serviços</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Fiscalização de obras públicas</li>
                  <li>Atividades imobiliárias por conta de outrem</li>
                  <li>Execução de fotocópias e apoio administrativo</li>
                  <li>Aluguer de veículos automóveis</li>
                  <li>Plantação e manutenção de jardins</li>
                  <li>Gestão e exploração de equipamento informático</li>
                  <li>Consultoria e programação informática</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border service-card group">
                <h3 className="text-xl font-semibold mb-3">Fornecedores de Bens</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Equipamento audiovisual e eletrodomésticos</li>
                  <li>Computadores, periféricos e software</li>
                  <li>Livros, jornais, revistas e papelaria</li>
                  <li>Equipamento de telecomunicações</li>
                  <li>Artigos de desporto, campismo e lazer</li>
                  <li>Mobiliário e iluminação</li>
                  <li>Veículos automóveis e vestuário</li>
                </ul>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold">Missão</h3>
              <p className="text-muted-foreground mt-2">
                Proporcionar soluções integradas e de elevada qualidade, com foco em resultados, sustentabilidade e satisfação dos nossos clientes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold">Contactos</h3>
              <p className="text-muted-foreground mt-2">info@multiserv.pt</p>
              <p className="text-muted-foreground">+351 123 456 789</p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Sobre;
