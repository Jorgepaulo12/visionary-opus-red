import { 
  Speaker, 
  Zap, 
  Monitor, 
  BookOpen, 
  Smartphone, 
  Gamepad2, 
  Sofa, 
  Lightbulb,
  Car,
  Shirt
} from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: Speaker,
      title: "Equipamento Audiovisual",
      description: "Sistemas de som e vídeo profissionais para eventos e apresentações.",
      category: "Tecnologia"
    },
    {
      icon: Zap,
      title: "Eletrodomésticos",
      description: "Linha completa de eletrodomésticos para casa e escritório.",
      category: "Casa"
    },
    {
      icon: Monitor,
      title: "Computadores & Periféricos",
      description: "PCs, laptops, impressoras e acessórios informáticos.",
      category: "Tecnologia"
    },
    {
      icon: BookOpen,
      title: "Livros & Papelaria",
      description: "Material de escritório, livros técnicos e artigos de papelaria.",
      category: "Escritório"
    },
    {
      icon: Smartphone,
      title: "Telecomunicações",
      description: "Equipamentos de comunicação e sistemas telefónicos avançados.",
      category: "Tecnologia"
    },
    {
      icon: Gamepad2,
      title: "Desporto & Lazer",
      description: "Artigos desportivos, equipamento de campismo e lazer.",
      category: "Lazer"
    },
    {
      icon: Sofa,
      title: "Mobiliário",
      description: "Móveis para escritório e casa com design moderno e funcional.",
      category: "Casa"
    },
    {
      icon: Lightbulb,
      title: "Iluminação",
      description: "Soluções de iluminação LED e sistemas de controlo inteligente.",
      category: "Casa"
    },
    {
      icon: Car,
      title: "Veículos Automóveis",
      description: "Venda de veículos novos e usados com garantia e financiamento.",
      category: "Automóvel"
    },
    {
      icon: Shirt,
      title: "Vestuário",
      description: "Roupas profissionais e casuais de marcas reconhecidas.",
      category: "Moda"
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção cuidadosa de produtos de alta qualidade para equipar 
            o seu negócio e tornar o seu dia a dia mais eficiente.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span 
              key={category}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div 
                key={product.title}
                className="service-card h-full animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3 self-start">
                    {product.category}
                  </span>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <button className="text-primary font-medium text-sm hover:text-primary-light transition-colors">
                      Saber Mais →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-primary to-primary-light rounded-2xl shadow-elegant">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Precisa de Algo Específico?
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                Contacte-nos para soluções personalizadas
              </p>
              <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contactar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;