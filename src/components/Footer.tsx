import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Serviços",
      links: [
        "Fiscalização de Obras",
        "Atividades Imobiliárias", 
        "Apoio Administrativo",
        "Aluguer de Veículos",
        "Manutenção de Jardins"
      ]
    },
    {
      title: "Produtos",
      links: [
        "Equipamento Audiovisual",
        "Computadores & IT",
        "Eletrodomésticos",
        "Mobiliário",
        "Telecomunicações"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Sobre Nós",
        "Nossa Equipa",
        "Certificações",
        "Carreiras",
        "Parcerias"
      ]
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Engenharia e Consultoria Ntimbuca
              </h3>
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Transformamos visões em realidade através de serviços e produtos 
                de excelência. Com mais de 15 anos de experiência, somos o parceiro 
                ideal para o crescimento do seu negócio.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>+258 82 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>info@ntimbuca.co.mz</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Rua Principal, 123, Lichinga, Niassa, Moçambique</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-secondary-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Mantenha-se Atualizado
              </h4>
              <p className="text-secondary-foreground/70">
                Receba as últimas novidades e ofertas especiais.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Seu email..."
                className="flex-1 px-4 py-3 bg-secondary-light border border-secondary-light rounded-lg text-secondary-foreground placeholder-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-hero whitespace-nowrap">
                Subscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-secondary-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Engenharia e Consultoria Ntimbuca. Todos os direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-secondary-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-secondary-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-secondary-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;