import { 
  Building2, 
  FileText, 
  Car, 
  TreePine, 
  Monitor, 
  Code,
  ClipboardCheck,
  Home
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Fiscalização de Obras",
      description: "Supervisão profissional de obras públicas e privadas com rigor técnico e qualidade comprovada.",
      features: ["Inspeção técnica", "Relatórios detalhados", "Certificação"]
    },
    {
      icon: Home,
      title: "Atividades Imobiliárias",
      description: "Gestão imobiliária completa por conta de terceiros com transparência e eficiência.",
      features: ["Avaliações", "Gestão de propriedades", "Consultoria"]
    },
    {
      icon: FileText,
      title: "Apoio Administrativo",
      description: "Execução de fotocópias, preparação de documentos e serviços administrativos especializados.",
      features: ["Processamento de documentos", "Digitalização", "Arquivo"]
    },
    {
      icon: Car,
      title: "Aluguer de Veículos",
      description: "Frota diversificada de veículos para todas as necessidades empresariais e pessoais.",
      features: ["Veículos novos", "Seguros incluídos", "Flexibilidade"]
    },
    {
      icon: TreePine,
      title: "Manutenção de Jardins",
      description: "Criação, plantação e manutenção de espaços verdes com design paisagístico.",
      features: ["Design paisagístico", "Manutenção regular", "Sistemas de rega"]
    },
    {
      icon: Monitor,
      title: "Gestão Informática",
      description: "Gestão e exploração de equipamento informático com suporte técnico especializado.",
      features: ["Gestão de sistemas", "Suporte técnico", "Atualizações"]
    },
    {
      icon: Code,
      title: "Consultoria IT",
      description: "Atividades de consultoria e programação informática para transformação digital.",
      features: ["Desenvolvimento", "Consultoria", "Integração"]
    },
    {
      icon: Building2,
      title: "Soluções Empresariais",
      description: "Consultoria especializada para otimização de processos e crescimento empresarial.",
      features: ["Análise de processos", "Estratégia", "Implementação"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços profissionais para atender 
            todas as necessidades do seu negócio com excelência e qualidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="service-card animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li 
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;